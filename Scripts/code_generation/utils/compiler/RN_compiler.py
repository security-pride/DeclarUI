import subprocess
import os
import threading
import time
import re
import json
import shutil

def run_metro_server(project_path):
    os.chdir(project_path)
    process = subprocess.Popen(
        ["node", "node_modules/react-native/cli.js", "start"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        universal_newlines=True
    )
    
    error_detected = [False]
    
    def monitor_output():
        while True:
            output = process.stdout.readline()
            if output == '' and process.poll() is not None:
                break
            if output:
                print(output.strip())
                if re.search(r"error|exception", output, re.IGNORECASE):
                    error_detected[0] = True
                    error_message = output + process.stdout.read()
                    save_error_log(error_message)
                    print("detected Metro server error，saved to metro_error_log.txt")
                    process.terminate()
                    break
    
    thread = threading.Thread(target=monitor_output)
    thread.start()
    
    return process, error_detected

def run_react_native_project(project_path):
    try:
        os.chdir(project_path)
        
        # start Metro server
        metro_process, error_detected = run_metro_server(project_path)

        time.sleep(10)
        
        if not error_detected[0]:
            # run React Native project (Android)
            android_process = subprocess.Popen(
                [r"D:\Program Files\nodejs\npx.cmd", "react-native", "run-android","--port=8081"],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                universal_newlines=True
            )
            
            # inspect Android gradle
            while True:
                output = android_process.stdout.readline()
                if output == '' and android_process.poll() is not None:
                    break
                if output:
                    print(output.strip())
            
            android_return_code = android_process.poll()
            if android_return_code != 0:
                error_output = android_process.stderr.read()
                save_error_log(error_output)
                print(f"Android gradle error，error_code: {android_return_code}")
                print("error msg saved to android_error_log.txt")
            else:
                print("Android project run successfully")
        
        # Wait for the Metro server to run for a while to capture any potential JS errors.
        time.sleep(30)
        
        # terminate Metro server
        metro_process.terminate()
        
        stop_app(project_path)
        
    except subprocess.CalledProcessError as e:
        print(f"command failed to run: {e}")
        save_error_log(str(e))

def save_error_log(error_message, filename="error_log.txt"):
    with open(filename, "w",encoding='utf-8') as f:
        f.write(error_message)

def stop_app(project_path):
    try:
        # from package.json to find app package name
        with open(os.path.join(project_path, 'package.json'), 'r') as f:
            package_data = json.load(f)
        app_name = package_data.get('name', '')
        
        if not app_name:
            print("Unable to retrieve the app package name, please manually stop the app.")
            return

        full_package_name = f"com.{app_name.lower()}"

        subprocess.run(["adb", "shell", "am", "force-stop", full_package_name], check=True)
        print(f"stop app: {full_package_name}")
    except subprocess.CalledProcessError as e:
        print(f"fail to stop app: {e}")
    except FileNotFoundError:
        print("The adb command was not found. Please ensure that the Android SDK Platform Tools are installed and added to your PATH.")
    except Exception as e:
        print(f"An unknown error occurred while stopping the app: {e}")
   
def strip_ansi_escape(text):
    ansi_escape = re.compile(r'\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])')
    return ansi_escape.sub('', text)

def is_package_installed(package_name, package_json_path=r"D:\Postgraduate\paper\UIGeneration\ReactNativeProject\MyProject\package.json"):
    # make sure package.json exists
    if not os.path.exists(package_json_path):
        print(f"Error: {package_json_path} does not exist.")
        return False

    try:
        with open(package_json_path, 'r') as file:
            package_data = json.load(file)
    except json.JSONDecodeError:
        print("Error: package.json is not a valid JSON file.")
        return False

    # inspect dependencies and devDependencies
    dependencies = package_data.get('dependencies', {})
    dev_dependencies = package_data.get('devDependencies', {})

    # Check if the package is listed in any dependency list.
    is_installed = package_name in dependencies or package_name in dev_dependencies
    return is_installed
   
def run_gradlew_assemble(project_path,category,apk_name,add_package_list=[]):
    original_cwd = os.getcwd()
    error_dict = ""
    compile_state = False
    os.chdir(project_path)
    if not os.path.exists('android'):
        print("Error: The current directory is not the root of a React Native project.")
        return

    os.chdir('android')

    # inspect whether gradlew exists
    if not os.path.exists('gradlew'):
        print("Error：gradlew file not exists.")
        return
    npm_install_cmd = [r"D:\Program Files\nodejs\npm.cmd", "install"]
    npm_uninstall_cmd  = [r"D:\Program Files\nodejs\npm.cmd", "uninstall"]
    # If there are new packages, install them using npm install.
    if add_package_list:
        for add_package in add_package_list:
            if not is_package_installed(add_package):
                npm_install_cmd.append(add_package)
                npm_uninstall_cmd.append(add_package)
        print(npm_install_cmd)
        if len(npm_install_cmd) > 2:
            subprocess.run(npm_install_cmd, check=True)
    try:
        # run gradlew assemble command
        result = subprocess.run(['gradlew.bat', 'assemble'], 
                                capture_output=True, 
                                text=True, 
                                check=True)
        print("gradlew assemble run successfully")
        compile_state = True
    except subprocess.CalledProcessError as e:
        # If the command execution fails, write the error information to err_log.txt.
        print(f"gradlew assemble failed to run。Error msg：{e.stderr}")
        compile_state = False
        clean_error = strip_ansi_escape(e.stderr)
        error_dict = extract_error_info(clean_error)
        error_dict = clean_error
        for key, value in error_dict.items():
            print(f"file: {key}\n Error: {value}\n")
        with open('../err_log.txt', 'w', encoding='utf-8') as f:
            f.write(clean_error)
        print(f"The gradlew assemble command failed. The error log has been saved to err_log.txt.")  
    # If there are new packages, they need to be removed after the build is complete to avoid affecting the next compilation.
    if add_package_list and len(npm_uninstall_cmd)>2:
        subprocess.run(npm_uninstall_cmd, check=True)   
    os.chdir(original_cwd)
    return compile_state,error_dict
 
def extract_error_info(log_text):
    pattern = r'(\w+\.js): (.+?)\n\n\s*((?:\d+\s*\|\s*.*(?:\n|$))+)'

    matches = re.finditer(pattern, log_text, re.MULTILINE | re.DOTALL)
    
    error_dict = {}
    for match in matches:
        filename = match.group(1)
        error_description = match.group(2).strip()
        error_info = match.group(3)
        
        error_lines = error_info.split('\n')
        cleaned_error_info = "\n".join(line.strip() for line in error_lines if line.strip() and '|' in line)

        full_error_info = f"{error_description}\n{cleaned_error_info}"

        if filename in error_dict:
            error_dict[filename] += "\n\n" + full_error_info
        else:
            error_dict[filename] = full_error_info
    
    return error_dict

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
        
        # logging.info("Successfully cleared all contents of %s.",folder_path)

    except Exception as e:
        print(f"Error occurred: {e}")
  

def copy_file2project(src_folder, dst_folder):
    components_folder = os.path.join(dst_folder,"components")
    for item in os.listdir(src_folder):
        extension = os.path.splitext(item)[1]
        if extension == '.js' or extension == '.jsx':
            if item == "App.js":
                shutil.copy(os.path.join(src_folder, item), dst_folder)
            else:
                src_path = os.path.join(src_folder, item)
                shutil.copy(src_path, components_folder)
                print(f"{item} copied!")   
                
if __name__ == "__main__":
    app_classification_list = []
    app_classification = app_classification_list[0]
    app_name = 'file_manage' 
    src_folder = ""    
    # Please replace with your project path.
    project_path = "" 
    clear_folder(os.path.join(project_path,'components'))
    copy_file2project(src_folder,project_path)
    run_gradlew_assemble(project_path,app_classification,app_name,add_package_list=['react-native-vector-icons'])