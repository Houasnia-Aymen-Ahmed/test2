import os

def list_files_in_folder(folder_path):
    files = []
    for file in os.listdir(folder_path):
        if os.path.isfile(os.path.join(folder_path, file)):
            files.append(file)
    return files

# Replace 'your_folder_path' with the actual path of the folder you want to list files from
folder_path = 'F:\\Desktop\\Programming\\Originova\\test2\\test2\\src\\assets\\images'

file_names = list_files_in_folder(folder_path)

for file_name in file_names:
    print(file_name)