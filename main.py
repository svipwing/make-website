import os,json

def scan_files(directory):
    file_list = []

    # 遍历当前目录下的所有文件和文件夹
    for root, directories, files in os.walk(directory):
        if '.git' in directories:
            directories.remove('.git')

        for file in files:
            # 获取文件的相对路径
            file_path = os.path.join(root, file)
            relative_path = os.path.relpath(file_path, directory).replace('\\','/')
            file_list.append(relative_path)

    return file_list


# 调用函数扫描当前目录下的所有文件，并输出结果
current_directory = os.getcwd()
files = scan_files(current_directory)

with open("file.json","w") as f:
    json.dump(files,f)