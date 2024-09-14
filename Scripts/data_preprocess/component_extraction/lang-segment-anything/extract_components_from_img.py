
import numpy as np
from PIL import Image
from lang_sam import LangSAM
from lang_sam.utils import draw_image
import os
import cv2
import shutil

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
# os.environ["CUDA_VISIBLE_DEVICES"] = "1"

if __name__=="__main__":
    clear_folder('DeclarUI\Scripts\data_preprocess\component_extraction\lang-segment-anything\results')
    clear_folder('DeclarUI\Scripts\data_preprocess\component_extraction\lang-segment-anything\assets\outputs')
    asset_input_dir = 'DeclarUI\Dataset'
    asset_output_dir = 'DeclarUI\Scripts\data_preprocess\component_extraction\lang-segment-anything\assets\outputs'
    initial_result_dir = 'DeclarUI\Scripts\data_preprocess\component_extraction\lang-segment-anything\results'
    initial_split_dir = 'DeclarUI\Scripts\data_preprocess\component_extraction\lang-segment-anything\split_img'
    model = LangSAM(ckpt_path='sam_vit_h_4b8939.pth')
    for category in os.listdir(asset_input_dir):
        input_dir = os.path.join(asset_input_dir, category)
        output_dir = os.path.join(asset_output_dir, category)
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
        result_dir = os.path.join(initial_result_dir, category)
        if not os.path.exists(result_dir):
            os.makedirs(result_dir)
        split_dir = os.path.join(initial_split_dir, category)
        if not os.path.exists(split_dir):
            os.makedirs(split_dir)
        print(f"Processing category: {category}")
        for app in os.listdir(input_dir):
            if app in os.listdir(split_dir):
                continue
            print(f"Processing app: {app}")
            imgs_dir = os.path.join(input_dir, app)
            output_app_dir = os.path.join(output_dir, app)
            if not os.path.exists(output_app_dir):
                os.makedirs(output_app_dir)
            img_result_dir = os.path.join(result_dir, app)
            for input_img in os.listdir(imgs_dir):
                if not input_img.endswith('.png'):
                    continue
                imgname = input_img.split('.')[0]
                img_path = os.path.join(imgs_dir, input_img)
                image_pil = Image.open(img_path).convert("RGB")
                # text_prompt = "icon.button.text"
                text_prompt = "icon.button.text"
                masks, boxes, phrases, logits = model.predict(image_pil, text_prompt)

                # create result folder
                if not os.path.exists(os.path.join(img_result_dir, imgname)):
                    os.makedirs(os.path.join(img_result_dir, imgname))
                # create position.txt
                with open(os.path.join(img_result_dir, imgname,'position.txt'), 'w') as file:

                    for i,mask in enumerate(masks):
                        mask = mask.numpy()
                        cv2.imwrite(os.path.join(output_app_dir,imgname+ '_'+str(i+1) + '.png'),mask * 255)

                        image = cv2.imread(os.path.join(imgs_dir,input_img))
                        mask = cv2.imread(os.path.join(output_app_dir,imgname+ '_'+str(i+1) + '.png'), cv2.IMREAD_GRAYSCALE)
                        # apply mask to image
                        _, mask = cv2.threshold(mask, 127, 255, cv2.THRESH_BINARY)
                        # find contours
                        contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
                        # create a blank image with four channels (RGBA)
                        height, width = image.shape[:2]
                        transparent_image = np.zeros((height, width, 4), dtype=np.uint8)
                        # copy the RGB image to the first three channels of the transparent image
                        transparent_image[:, :, :3] = image
                        # use mask to set alpha channel
                        transparent_image[:, :, 3] = mask
                        x, y, w, h = cv2.boundingRect(mask)
                        cropped_transparent_image = transparent_image[y:y+h, x:x+w]
                        # transform the OpenCV image to a PIL image
                        final_image = Image.fromarray(cropped_transparent_image, 'RGBA')

                        # save the image
                        final_image.save(os.path.join(img_result_dir,imgname,str(i+1) + '.png'))

                        # save the coordinates
                        box_list = boxes[i].tolist()
                        box_str = ' '.join(map(str, box_list))
                        file.write(box_str + '\n')

                labels = [f"{phrase} {logit:.2f}" for phrase, logit in zip(phrases, logits)]
                image_array = np.asarray(image_pil)
                #image_array = draw_image(image_array, masks, boxes, labels)
                image_array = Image.fromarray(np.uint8(image_array)).convert("RGB")
                # image_array.save('./results/'+imgname+ '.png')
                print('all ok')
            print(f"{app} is done")
        print(f"{category} is done")
