import subprocess
import os


def run_git_log(author_name, path):

    command = f'git log --author="{author_name}" --pretty=tformat: --numstat {path}'
    result = subprocess.run(command, shell=True, text=True, capture_output=True)
    
    if result.returncode != 0:
        return f"Error executing command: {result.stderr}"


    added, removed = 0, 0
    for line in result.stdout.strip().split('\n'):
        parts = line.split()
        if len(parts) >= 2:
            try:
                added += int(parts[0])
                removed += int(parts[1])
            except ValueError:
                continue  
    
    return f"Added lines: {added}\tRemoved lines: {removed}\ntotal: {added+removed}"

os.chdir("DeclarUI\Scripts\evaluations\rq3_userstudy")
user = 5
author_list = ["user1","user2","user3","user4","user5"]
author  = author_list[user-1]
base_path = "./user{}/TestCases/{}/{}"


results = {}
for test_case in range(1, 3): 
    for appname in os.listdir(f"./user{user}/TestCases/{test_case}/"):
        
        path = base_path.format(user, test_case, appname)
        if os.path.isdir(path):
            key = f"user{user}_TestCases{test_case}_{appname}"
            results[key] = run_git_log(author, path)

for key, value in results.items():
    print(key, value)
