import json
from openai import OpenAI
import subprocess
import shutil
import httpx
import base64
import re
import os
import openai
picture_folder  = "DeclarUI\Dataset"
ptg_prompt_path = "DeclarUI\Scripts\data_preprocess\ptg_construction\PTG_Prompt.txt"

def encode_image(image_path):
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode('utf-8')


def ptg_generate(image_dir, category, app_name, content):
    image_files = []
    app_img_folder = os.path.join(image_dir, category, app_name)

    files = os.listdir(app_img_folder)
    png_files = [f for f in files if f.endswith('.png')]
    png_file_names = [f.split('.')[0] for f in png_files]
    content.format(node_id_list=png_file_names)
    for file in png_files:
        image_files.append(encode_image(os.path.join(app_img_folder, file)))
                
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
    img_dic_list =[]
    for base64_img_before in image_files:
        pic_type = "png"
        img_content_template = {
            "type":"image_url",
            "image_url":{
            "url": f"data:image/{pic_type};base64,{base64_img_before}"
            }
        }
        img_dic_list.append(img_content_template)
    response = ""
    content_list = [text_dic] + img_dic_list
    completion = client.chat.completions.create(
        model="claude-3.5-sonnet",
        messages=[
            {"role": "user", 
            "content": content_list
            },
        ],
    )
    response = response + completion.choices[0].message.content + '\n'
    return response


if __name__ == "__main__":
    category = ""
    app_name = ""
    with open(ptg_prompt_path, 'r', encoding='utf-8') as f:
        ptg_prompt = f.read()
    res = ptg_generate(picture_folder,category,app_name,ptg_prompt)
    
        

