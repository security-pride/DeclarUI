import shutil
import os

class Component:
    def __init__(self, id, x_min, y_min, x_max, y_max):
        self.id = id
        self.x_min = x_min
        self.y_min = y_min
        self.x_max = x_max
        self.y_max = y_max
        self.children = []

    def is_parent_of(self, other):
        return (self.x_min <= other.x_min and self.y_min <= other.y_min and
                self.x_max >= other.x_max and self.y_max >= other.y_max)

    def __repr__(self):
        return f"Component({self.id}, {self.x_min}, {self.y_min}, {self.x_max}, {self.y_max})"

def build_tree(components):
    roots = []
    for current in components:
        placed = False
        for potential_parent in components:
            if potential_parent != current and potential_parent.is_parent_of(current):
                potential_parent.children.append(current)
                placed = True
                break
        if not placed:
            roots.append(current)
    return roots

def print_tree(node, level=0):
    indent = ' ' * (level * 4)
    print(f"{indent}- Component {node.id}")
    for child in node.children:
        print_tree(child, level + 1)

def main(txt_file):
    components = []
    with open(txt_file, "r") as file:
        for i, line in enumerate(file):
            x_min, y_min, x_max, y_max = map(float, line.strip().split())
            components.append(Component(i + 1, x_min, y_min, x_max, y_max))

    tree = build_tree(components)
    root_list = []
    for root in tree:
        root_list.append(root.id)
    return tree,root_list  


def copy_images_and_text(list_of_nums, dir1, dir2, text_file, output_text_file):
    
    if not os.path.exists(dir2):
        os.makedirs(dir2)
    
    with open(text_file, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    
    
    with open(output_text_file, 'w', encoding='utf-8') as output_file:

        file_cnt = 0
        for filename in os.listdir(dir1):
            
            if filename.split('.')[0] in map(str, list_of_nums): 
               
                file_cnt += 1
                new_filename = f"{file_cnt}.png"
                shutil.copy(os.path.join(dir1, filename), os.path.join(dir2, new_filename))
                
                line_index = int(filename.split('.')[0]) - 1  
                if 0 <= line_index < len(lines):
                    output_file.write(lines[line_index])


import subprocess
import os

def copy_files(src_folder, dst_folder):
    if not os.path.exists(dst_folder):
        os.makedirs(dst_folder)
        
    for item in os.listdir(src_folder):
        src_path = os.path.join(src_folder, item)
        dst_path = os.path.join(dst_folder, item)
        
        if os.path.isfile(src_path):
            shutil.copy2(src_path, dst_path)
        elif os.path.isdir(src_path):
            shutil.copytree(src_path, dst_path, dirs_exist_ok=True)


def copy_subdirectories(src_folder, dst_folder):
    try:
        # Ensure the source folder exists
        if not os.path.exists(src_folder):
            print(f"Source folder '{src_folder}' does not exist.")
            return
        
        # Ensure the destination folder exists, if not, create it
        if not os.path.exists(dst_folder):
            os.makedirs(dst_folder)
            print(f"Destination folder '{dst_folder}' created.")
        
        # Iterate over all items in the source folder
        for item in os.listdir(src_folder):
            item_path = os.path.join(src_folder, item)
            if os.path.isdir(item_path):
                shutil.copytree(item_path, os.path.join(dst_folder, item))
                print(f"Copied '{item_path}' to '{dst_folder}'")

    except Exception as e:
        print(f"Error occurred: {e}")

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
    clear_folder("DeclarUI\Scripts\data_preprocess\component_extraction\lang-segment-anything\split_img")
    result_oridinal_root_dir = 'DeclarUI\Scripts\data_preprocess\component_extraction\lang-segment-anything\results'
    split_merge_root_dir = 'DeclarUI\Scripts\data_preprocess\component_extraction\lang-segment-anything\split_img'
    for category in os.listdir(result_oridinal_root_dir):
        oridinal_root_dir = os.path.join(result_oridinal_root_dir,category)
        merge_root_dir = os.path.join(split_merge_root_dir,category)
        if not os.path.exists(merge_root_dir):
            os.makedirs(merge_root_dir)
        for app in os.listdir(oridinal_root_dir):
            if app in os.listdir(merge_root_dir):
                continue
            app_res_dir = os.path.join(oridinal_root_dir,app)
            for img_name in os.listdir(app_res_dir):
                # before
                dir1 = os.path.join(app_res_dir,img_name)
                txt_file = os.path.join(dir1,'position.txt')
                # after
                dir2 = os.path.join(merge_root_dir,app,img_name)
                output_txt_file = os.path.join(dir2,'position.txt')
                
                root_components,root_list = main(txt_file)
                for root_node in root_components:
                    print_tree(root_node) 
                print(root_list)  
                
                list_of_nums = root_list  

                copy_images_and_text(list_of_nums, dir1, dir2, txt_file, output_txt_file)

