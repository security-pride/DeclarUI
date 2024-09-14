# coding=utf-8
import subprocess
import sys
import os
import argparse
import re
from collections import defaultdict

def strip_ansi_codes(text):
    ansi_escape = re.compile(r'\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])')
    return ansi_escape.sub('', text)
def extract_error_filename(error_message):
    pattern = r'File:\s.*?\/([^\/]+\.ets)'
    
    filenames = re.findall(pattern, error_message)
    unique_filenames = list(set(filenames))
    
    return unique_filenames


def parse_error_message(error_message):
    error_dict = defaultdict(str)
    
    pattern = re.compile(r'(ERROR File: .+?\/([^\/]+\.ets):\d+:\d+.*?)(?=\d{0,2}\sERROR|\Z)', re.DOTALL)
    
    matches = pattern.findall(error_message)
    
    for match in matches:
        full_error = match[0].strip()
        file_name = match[1]
        error_dict[file_name] += full_error + "\n\n"
    
    return dict(error_dict)

def compile_arkts_project(project_path):
    original_dir = os.getcwd()
    os.chdir(project_path)

    command = [
        r"D:\Programs\HuaWei\DevEco Studio\tools\node\node.exe",
        r"D:\Programs\HuaWei\DevEco Studio\tools\hvigor\bin\hvigorw.js",
        '--mode', 'module',
        '-p', 'product=default',
        'assembleHap',
        '--parallel',
        '--incremental',
        '--daemon',
    ]

    error_message = ""

    try:
        process = subprocess.Popen(
            command,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            universal_newlines=True
        )

        while True:
            output = process.stdout.readline()
            if output == '' and process.poll() is not None:
                break
            if output:
                print(output.strip())
                sys.stdout.flush()

        return_code = process.poll()

        if return_code != 0:
            _, stderr = process.communicate()
            error_message = f"Compilation failed with return code {return_code}. Error: {stderr}"
            print(error_message)

    except Exception as e:
        error_message = f"An error occurred: {str(e)}"
        print(error_message)

    finally:
        os.chdir(original_dir)

    return error_message


def compile_and_run_arkts_project():
    compile_state = True
    error_msg = ''
    error_filenames = []
    parser = argparse.ArgumentParser(description="Compile ArkTS project")
    parser.add_argument("project_path", nargs="?", default=".", help="Path to the ArkTS project directory")
    args = parser.parse_args()

    project_path = "root_folder/project_templates/ArkTSapp"

    if not os.path.isdir(project_path):
        print(f"Error: The specified path '{project_path}' is not a valid directory.")
        return

    print(f"Compiling ArkTS project in: {project_path}")

    error = compile_arkts_project(project_path)
    clean_error = strip_ansi_codes(error)
    if error:
        error_msg = clean_error
        error_filenames = extract_error_filename(error_msg)
        error_dict = parse_error_message(error_msg)
        if error_filenames:
            compile_state = False
            print(f"Compilation failed.")
        else:
            print("Compilation completed successfully.")
        print(error_filenames)
        print(error_dict)
        error_log_path = os.path.join(project_path, "compilation_error.log")
        with open(error_log_path, "w", encoding="utf-8") as f:
            f.write(clean_error)  
    else:
        #After the project is generated, the executable file is saved by default in {{project path}}\entry\build\default\outputs\default.
        compile_state = True
        error_msg = ''
        print("Compilation completed successfully.")
    return compile_state,error_dict



if __name__ == "__main__":
    compile_and_run_arkts_project('')