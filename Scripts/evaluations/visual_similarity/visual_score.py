 
import torch
from tqdm import tqdm
from transformers import CLIPImageProcessor, CLIPModel, CLIPTokenizer
# from transformers import CLIPProcessor, CLIPModel
from PIL import Image
import os
import cv2
import json
from skimage.metrics import structural_similarity as ssim
from PIL import Image
import numpy as np
import matplotlib.pyplot as plt

method_list = ['rn','flutter','arkts','baselinegpt','baselineclaude']
language_list = ['React Native', 'Flutter', 'ArkTS']
method = method_list[4]
language = language_list[0]
gpt_compile_error_apps = ["file_manage","pdf_translator","socialsoftwareapp","musicapp","short-video-ui","shortvideoapp","keep","zhaoshangbank","taobao","xianyu","go-book","xiecheng"]
claude_compile_error_apps = ["file_manage","pdf_translator","soundcloudiosmusic","short-video-ui","taskmanageapp-ui","coursetaskmanageapp","onlineteachsoftware","ebay","xiecheng","gaodemap","cnn","msnweather"]


device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
torch.cuda.set_device(0)
 
# Load the CLIP model
model_ID = "openai/clip-vit-large-patch14"
model = CLIPModel.from_pretrained(model_ID).to(device)
preprocess = CLIPImageProcessor.from_pretrained(model_ID)
 
def get_all_folders(folder_path):
    all_files = os.listdir(folder_path)
    folder_files = [file for file in all_files if os.path.isdir(os.path.join(folder_path, file))]
    folder_paths = [os.path.join(folder_path, folder_file) for folder_file in folder_files]
    return folder_paths
 
def get_all_images(folder_path):
    all_files = os.listdir(folder_path)
    image_files = [file for file in all_files if file.endswith((".jpg", ".png", ".jpeg"))]
    image_paths = [os.path.join(folder_path, image_file) for image_file in image_files]
    return image_paths
 
# Define a function to load an image and preprocess it for CLIP
def load_and_preprocess_image(image_path):
    # Load the image from the specified path
    image = Image.open(image_path)
    image = preprocess(image, return_tensors="pt")
    return image

def calculate_img_scores_for_pair_images(img1_path,img2_path):
    img_score = clip_img_score(img1_path,img2_path)
    return img_score
 
def calculate_img_clip_scores_for_all_images(generate_path, original_path):
    clip_score_json = {}
    
    app_cnt = 0
    png_cnt = 0
    for category in os.listdir(generate_path):
        
        generate_apps = get_all_folders(os.path.join(generate_path,category))
        original_apps = get_all_folders(os.path.join(original_path,category))
    
        category_img_scores = {}
        pic_pairs_less_than_08_list = []  # [(img1_path, img2_path), ...]
        for folder1, folder2 in tqdm(zip(generate_apps, original_apps),total=len(generate_apps),desc="Processing"):
            app_cnt += 1
            category_img_scores_detail = {}
            name = os.path.basename(folder1)
            print(f"app_name: {name}")
            generate_images_paths = get_all_images(folder1)
            img_scores = 0

            for generate_images_path in generate_images_paths:
                image_name = os.path.basename(generate_images_path)
                original_images_path = os.path.join(folder2, image_name)
                print(generate_images_path,original_images_path)
                if name in claude_compile_error_apps:
                    img_score = 0
                    print(f"{image_name} clip_score: {img_score:.4f}")
                    category_img_scores_detail[image_name] = img_score
                else:
                    img_score = clip_img_score(generate_images_path,original_images_path)
                    print(f"{image_name} clip_score: {img_score:.4f}")
                    category_img_scores_detail[image_name] = img_score
                img_scores += img_score
                png_cnt += 1
        
            if len(generate_images_paths) == 0:
                continue
            category_img_scores_detail['average_score'] = img_scores / (len(generate_images_paths))
            category_img_scores[name] = category_img_scores_detail
            print(f"##{name} average_clip_score: {category_img_scores_detail['average_score']:.4f}")
        clip_score_json[category] = category_img_scores
    with open(clip_score_json_path, 'w',encoding='utf-8') as f:
        json.dump(clip_score_json, f, indent=4)
 
def calculate_img_ssim_scores_for_all_images(generate_path, original_path):
    ssim_score_json = {}
     
    for category in os.listdir(generate_path):
        
        generate_apps = get_all_folders(os.path.join(generate_path,category))
        original_apps = get_all_folders(os.path.join(original_path,category))
    
        category_img_ssim_scores = {}
        for folder1, folder2 in tqdm(zip(generate_apps, original_apps),total=len(generate_apps),desc="Processing"):
            category_img_scores_detail = {}
            name = os.path.basename(folder1)
            generate_images_paths = get_all_images(folder1)
            ssim_scores = 0
            ssim_score = 0
            for generate_images_path in generate_images_paths:
                image_name = os.path.basename(generate_images_path)
                original_images_path = os.path.join(folder2, image_name)
                print(generate_images_path,original_images_path)
                if name in claude_compile_error_apps:
                    ssim_score = 0
                    print(f"{image_name} ssim_score: {ssim_score:.4f}")
                    category_img_scores_detail[image_name] = ssim_score
                else:
                    ssim_score = ssim_img_score(generate_images_path,original_images_path)
                    print(f"{image_name} ssim_score: {ssim_score:.4f}")
                    category_img_scores_detail[image_name] = ssim_score
                ssim_scores += ssim_score
        
            if len(generate_images_paths) == 0:
                continue
            category_img_scores_detail['average_score'] = ssim_scores / (len(generate_images_paths))
            category_img_ssim_scores[name] = category_img_scores_detail
            print(f"##{name} average_ssim_score: {ssim_scores/(len(generate_images_paths)):.4f}")
        ssim_score_json[category] = category_img_ssim_scores
    with open(ssim_score_json_path, 'w',encoding='utf-8') as f:
        json.dump(ssim_score_json, f, indent=4)
        
def clip_img_score(img1_path, img2_path):
    # Load the two samples_images and preprocess them for CLIP
    image_a = load_and_preprocess_image(img1_path)["pixel_values"].to(device)
    image_b = load_and_preprocess_image(img2_path)["pixel_values"].to(device)
 
    # Calculate the embeddings for the samples_images using the CLIP model
    with torch.no_grad():
        embedding_a = model.get_image_features(image_a)
        embedding_b = model.get_image_features(image_b)
 
    # Calculate the cosine similarity between the embeddings
    similarity_score = torch.nn.functional.cosine_similarity(embedding_a, embedding_b)
    return similarity_score.item()

def ssim_img_score(img1_path, img2_path):
    # load the two input images
    imageA = cv2.imread(img1_path)
    imageB = cv2.imread(img2_path)
    (H, W) = imageA.shape[:2]
    # to resize and set the new width and height
    imageB = cv2.resize(imageB, (W, H))

    # # convert the images to grayscale
    # grayA = cv2.cvtColor(imageA, cv2.COLOR_BGR2GRAY)
    # grayB = cv2.cvtColor(imageB, cv2.COLOR_BGR2GRAY)

    # compute the Structural Similarity Index (SSIM) between the two
    # images, ensuring that the difference image is returned
    score = ssim(imageA, imageB, multichannel=True,channel_axis=2)
    print("SSIM: {}".format(score))
    return score

def plot_boxplot(json_path,boxplot_path,x_label="Category",y_label="CLIP Score",title="",y_min = 0.0,y_max = 1.0):

    with open(json_path, 'r') as file:
        data = json.load(file)

    category_scores = {}

    for category, apps in data.items():
        scores = []
        for app_name, app_scores in apps.items():
            for ui_name, score in app_scores.items():
                if ui_name != "average_score":
                    scores.append(score)
        category_scores[category] = scores

    plt.figure(figsize=(12, 8))
    plt.boxplot(category_scores.values(), patch_artist=True)
    plt.xticks(range(1, len(category_scores) + 1), category_scores.keys(), rotation=90)
    plt.ylim(y_min,y_max)
    plt.ylabel(y_label)
    plt.xlabel(x_label)
    plt.title(title) 

    print("showing boxplot")
    plt.show()
    plt.savefig(boxplot_path) 

def count_average_score(json_path):
    with open(json_path, 'r') as file:
        data = json.load(file)
    cate_sum = 0
    for category, apps in data.items():
        sum_score = 0
        for app_name, app_scores in apps.items():          
            for ui_name, score in app_scores.items():
                if ui_name == "average_score":
                    print(f"Category: {category}, App: {app_name}, Average Score: {score}")
                    sum_score += score
        category_average_score = sum_score / len(apps)
        cate_sum += category_average_score
        print(f"####Category: {category}, Average Score: {category_average_score}")
    final_average_score = cate_sum / len(data)
    print(len(data))
    print(f"Final Average Score: {final_average_score}")
    
if __name__ == "__main__":
    language_list = ['React Native', 'Flutter', 'ArkTS']
    language = language_list[0]
    method_list = ['rn','flutter','arkts','baselinegpt','baselineclaude','rn_gpt','rn_ablation_sam','rn_ablation_refine']
    method = method_list[4]
    generate_folder = os.path.join("DeclarUI\Scripts\evaluations\rq2_ablation_study\generate_UIs", 'baseline_claude')
    original_folder = "DeclarUI\Scripts\evaluations\visual_similarity\original_UIs"
    # clip score
    clip_score_json_path = f"clip_{method}.json"
    # ssim score
    ssim_score_json_path = f"ssim_{method}.json"
           
    # clip score
    img_clip_scores = calculate_img_clip_scores_for_all_images(generate_folder, original_folder)
    
    # ssim score
    img_ssim_scores = calculate_img_ssim_scores_for_all_images(generate_folder, original_folder)
