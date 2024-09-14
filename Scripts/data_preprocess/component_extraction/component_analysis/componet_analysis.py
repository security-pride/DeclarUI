import json
from openai import OpenAI
import subprocess
import shutil
import httpx
import base64
import re
import os
import openai
from similarity_search import similarity_search
os.environ["OPENAI_API_BASE"] = 'https://api.xty.app/v1'
os.environ["OPENAI_API_KEY"] = "your_api_key"  #4

openai.api_key = os.getenv("OPENAI_API_KEY")

def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')


def split2type(image_dir, category, app_name, image_name, content):
    IMG_LIMIT = 10
    image_files = []
    complete_img_path = os.path.join(image_dir, "complete_imgs", category, app_name, image_name)
    image_files.append(encode_image(complete_img_path))
    split_img_dir = os.path.join(image_dir, "split_imgs",category, app_name, image_name.split(".")[0])

    files = os.listdir(split_img_dir)

    png_files = [f for f in files if f.endswith('.png')]

    sorted_files = sorted(png_files, key=lambda x: int(os.path.splitext(x)[0]))
    print(sorted_files)
    for file in sorted_files:
        image_files.append(encode_image(os.path.join(split_img_dir, file)))

                
    client = OpenAI(
        base_url="https://api.xty.app/v1",
        api_key="your_api_key", 
        http_client=httpx.Client(
            base_url="https://api.xty.app/v1",
            follow_redirects=True,
        ),
    )
    text_dic = {
                    "type":"text",
                    "text":content
                }
    # complete_img
    complete_img_dic = img_content_template = {
            "type":"image_url",
            "image_url":{
            "url": f"data:image/png;base64,{image_files[0]}"
            }
        }
    # add complete screenshot
    img_dic_list =[]
    # add split component
    for base64_img_before in image_files[1:]:
        pic_type = "png"
        img_content_template = {
            "type":"image_url",
            "image_url":{
            "url": f"data:image/{pic_type};base64,{base64_img_before}"
            }
        }
        img_dic_list.append(img_content_template)
    img_cnt = len(img_dic_list)
    query_times = img_cnt/(IMG_LIMIT-1)+1
    left = 0
    if left+IMG_LIMIT-1 <= img_cnt:
        right = left+IMG_LIMIT-1
    else:
        right = img_cnt
    response = ""
    for i in range(int(query_times)):
        content_list = []
        content_list.append(text_dic)
        content_list.append(complete_img_dic)
        content_list = content_list+img_dic_list[left:right]
        completion = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "user", 
                "content": content_list
                },
            ],
        )
        response = response + completion.choices[0].message.content + '\n'
        left = right
        if left+IMG_LIMIT-1 <= img_cnt:
            right = left+IMG_LIMIT-1
        else:
            right = img_cnt
    print(response)
    return response


def extract_component_type(s):
    pattern = r'@@@(.*?)@@@'
    matches = re.findall(pattern, s)
    unique_matches = list(set(matches))  
    return unique_matches


def search_reference_info_ids(dir):
    for file in os.listdir(dir):
        page_name = file.split(".")[0].split("_")[0]
        type_or_position = file.split(".")[0].split("_")[1]
        refer_list = []
        print(page_name,type_or_position)
        if type_or_position == "type":
            with open(os.path.join(dir, file), 'r', encoding='utf-8') as f:
                data = f.read()
            type_list = extract_component_type(data)
            print(type_list)
            for type in type_list:
                sim_top2=similarity_search(type)
                for sim in sim_top2:
                    if sim not in refer_list:
                        refer_list.append(sim)
            with open(os.path.join(dir, page_name + "_refer.json"), 'w', encoding='utf-8') as f:
                f.write(json.dumps(refer_list, ensure_ascii=False, indent=4))


def copy_file(src, dst):
    try:
        # Ensure the source file exists
        if not os.path.exists(src):
            print(f"Source file '{src}' does not exist.")
            return

        # Ensure the destination directory exists, if not, create it
        dst_dir = os.path.dirname(dst)
        if not os.path.exists(dst_dir):
            os.makedirs(dst_dir)
            print(f"Destination directory '{dst_dir}' created.")

        # Construct the cp command
        command = ['cp', src, dst]
        
        # Execute the command
        subprocess.run(command, check=True)
        print(f"Successfully copied '{src}' to '{dst}'.")

    except subprocess.CalledProcessError as e:
        print(f"Error occurred while copying: {e}")
        
def clear_folder(folder_path):
    try:
        # Ensure the folder exists
        if not os.path.exists(folder_path):
            print(f"Folder '{folder_path}' does not exist.")
            return

        # Remove all contents within the folder
        for filename in os.listdir(folder_path):
            file_path = os.path.join(folder_path, filename)
            try:
                if os.path.isfile(file_path) or os.path.islink(file_path):
                    os.unlink(file_path)  # Remove the file or link
                elif os.path.isdir(file_path):
                    shutil.rmtree(file_path)  # Remove the directory
            except Exception as e:
                print(f'Failed to delete {file_path}. Reason: {e}')
        
        print(f"Successfully cleared all contents of '{folder_path}'.")

    except Exception as e:
        print(f"Error occurred: {e}")

if __name__ == "__main__":
    component_info_folder = "DeclarUI\Scripts\results\extract_results"
    framework = 'ArkTS'
    language_list = ["RN","Flutter", "ArkTS"]
    lang = language_list[2]
    category = "Entertainment"
    image_dir = "DeclarUI\Dataset"
    initial_component_info_dir = os.path.join(component_info_folder,lang)
    initial_split_img_dir = os.path.join("DeclarUI\Scripts\data_preprocess\component_extraction\lang-segment-anything\split_img")
    initial_complete_img_dir = image_dir
    prompt_dir = "DeclarUI\Scripts\data_preprocess\component_extraction\component_analysis\prompt_repo"
    
    if lang == "RN":
        prompt_path = os.path.join(prompt_dir, "RN_Split2TypePrompt.txt")
    elif lang == "ArkTS":
        prompt_path = os.path.join(prompt_dir, "ArkTS_Split2TypePrompt.txt")
    elif lang == "Flutter":
        prompt_path = os.path.join(prompt_dir, "Flutter_Split2TypePrompt.txt")
    with open(prompt_path, "r") as f:
        split2type_prompt = f.read()
    
    state_file = {}
    for category in os.listdir(initial_complete_img_dir):
        complete_img_dir = os.path.join(initial_complete_img_dir, category)
        split_img_dir = os.path.join(initial_split_img_dir, category)
        component_info_dir = os.path.join(initial_component_info_dir, category)
        for app in os.listdir(complete_img_dir):
            image_state = {}
            for image_name in os.listdir(os.path.join(complete_img_dir, app)):          
                if image_name.endswith('.png'):
                    image_state[image_name.split('.')[0]]=0
                    state_file[app] = image_state

    if os.path.exists('state.json'):
        with open('state.json', 'r', encoding='utf-8') as f:
            state_file = json.load(f)
    for category in os.listdir(initial_complete_img_dir):
        complete_img_dir = os.path.join(initial_complete_img_dir, category)
        split_img_dir = os.path.join(initial_split_img_dir, category)
        component_info_dir = os.path.join(initial_component_info_dir, category)
        print(f"Processing category: {category}")
        for app in os.listdir(complete_img_dir): 
            app_component_info_dir = os.path.join(component_info_dir, app)
            if not os.path.exists(app_component_info_dir):
                os.makedirs(app_component_info_dir)
            app_split_img_dir = os.path.join(split_img_dir, app)
            app_img_dir = os.path.join(complete_img_dir, app)
            for image_name in os.listdir(app_img_dir):
                if not image_name.endswith('.png'):
                    continue
                if state_file[app][image_name.split('.')[0]] == 1:
                    continue
                print(f"Processing {app} {image_name}") 
                component_type = split2type(image_dir, category, app, image_name, split2type_prompt)
                component_type_path = os.path.join(app_component_info_dir,image_name.split('.')[0] + "_type.txt")
                with open(component_type_path, 'w', encoding='utf-8') as file:
                    file.write(component_type)
                position_before = os.path.join(app_split_img_dir, image_name.split('.')[0],"position.txt")
                position_after = os.path.join(app_component_info_dir,image_name.split('.')[0]+"_position.txt")
                copy_file(position_before, position_after)
                state_file[app][image_name.split('.')[0]] = 1
                with open('state.json', 'w', encoding='utf-8') as f:
                    json.dump(state_file, f, ensure_ascii=False, indent=4)
                print(f"Finished {app} {image_name}")
            if lang == "ArkTS":
                search_reference_info_ids(app_component_info_dir)
                
            print(f"Finished {app}")
        print(f"Finished {category}")
        

