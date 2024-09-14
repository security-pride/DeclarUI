import subprocess
import os
import time
import shutil
import re
from collections import defaultdict

def copy_file2project(src_folder, dst_folder):   
    screen_folder = os.path.join(dst_folder, "screens")
    for item in os.listdir(src_folder):
        if item == "main.dart":
            continue
        extension = os.path.splitext(item)[1]
        if extension == ".dart":
            src_path = os.path.join(src_folder, item)
            shutil.copy(src_path, screen_folder)  
    shutil.copy(os.path.join(src_folder, 'main.dart'), dst_folder)
    
   

def extract_dart_filenames(error_message):
    pattern = r'lib\/.*?\/([^\/]+\.dart)'
    
    # Use regular expressions to find all file names that match the specified criteria.
    filenames = re.findall(pattern, error_message)
    unique_filenames = list(set(filenames))
    print(unique_filenames)
    return filenames

def parse_error_message(error_message):
    # Initialize a dictionary to store file names and their corresponding error messages.
    error_dict = defaultdict(str)
    
    # Use regular expressions to match each file name and all subsequent error messages.
    pattern = re.compile(r'((lib\/.*?\.dart):\d+:\d+.*?)(?=\nlib\/|\n\n|$)', re.DOTALL)
    
    matches = pattern.findall(error_message)
    
    for match in matches:
        full_error = match[0].strip()
        file_name = match[1].split('/')[-1]  # Retain only the file name portion.
        error_dict[file_name] += full_error + "\n\n"
    
    return dict(error_dict)


def compile_and_run_flutter_project(project_path,category,apk_name):
    current_directory = os.getcwd()
    apk_saved_folder = ""
    complie_state = True
    error_msg = ''
    error_dict = {}
    error_filenames = []
    try:
        os.chdir(project_path)
        
        compile_process = subprocess.run([r'D:\flutterSDK\flutter_windows_3.22.3-stable\flutter\bin\flutter.bat', 'build', 'apk'], 
                                         capture_output=True, 
                                         text=True, 
                                         check=True)
        
        print("Successfully compiled!")
        
        run_process = subprocess.Popen([r'D:\flutterSDK\flutter_windows_3.22.3-stable\flutter\bin\flutter.bat', 'run'], 
                                       stdout=subprocess.PIPE, 
                                       stderr=subprocess.PIPE,
                                       text=True)      
        
       # Wait for a moment to ensure the app launches.
        time.sleep(10)  
        
        # terminate flutter run process
        run_process.terminate()
        print("Successfully run!")
        
        # successfully run，save apk
        source = r"project_root_folder\project_templates\Flutterapp\build\app\outputs\flutter-apk\app-release.apk"
        if not os.path.exists(os.path.join(apk_saved_folder,category)):
            os.makedirs(os.path.join(apk_saved_folder,category))
        destination = os.path.join(apk_saved_folder,category,apk_name+'.apk')
        shutil.copy(source, destination)
        
    except subprocess.CalledProcessError as e:
        complie_state = False
        error_message = f"ERROR:\n{e.stdout}\n{e.stderr}"
        error_filenames = extract_dart_filenames(error_message)
        error_dict = parse_error_message(error_message)
        if not error_dict:
            error_dict['None'] = 'None'
        print(error_message)
        
        with open('error_log.txt', 'w',encoding='utf-8') as error_file:
            error_file.write(error_message)
        
        print("error messages saved to error_log.txt")
        error_msg = error_message
    os.chdir(current_directory)
    return complie_state, error_dict

if __name__ == "__main__":
    # use example
    
    src = '' # llm code folder
    dst = ''# template project folder
    copy_file2project(src,dst)
    project_path = "" # template project folder
    complie_state, error_dict = compile_and_run_flutter_project(project_path,'category',"app_name")
    for key, value in error_dict.items():
        print(f"{key}: {value}")