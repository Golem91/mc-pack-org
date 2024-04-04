# Datapack manager
This Extension aims to make the creation and distribution of Minecraft DataPacks easier.
It allows you to create file and folderstructures out of the box.
It creates a blank pack for you in your desired workspace folder.

# Usage
## Initialization
When you have a workspace already setup open the command palette and use the command:
`DataPack: Initialize`
This will prompt you to select a workspace folder to initialize your datapack in.
It then will ask you to select the directories you want to create inside your datapack.
After that it will ask you for the namespace ID used by minecraft to identify external resources within your datapack.
It will then create the datapack structure.

## Export / Zip
When you want to zip your datapack, type in the command:
`DataPack: Create Zip`
This will, unless set inside the pack-config.json, prompt you to select the file you want to export your datapack to.
It than will create that datapack.
Your <export-name>.zip will contain the following files and folders within the root directory of the zip:
* /data/
* /pack.mcmeta
* [optional] /pack.mcmeta
* [optional] any file listed inside the `include: []` array in the config file

## Config
When you want to setup a config file for your datapack workspace type the command:
`DataPack: Configure`
This will prompt you with the same select File dialog which is used in the Export / Zip function.
It then will create a folder within your workspace called .vscode. Within that it will create a file called pack-config.json.
This config file contains the `saveLocation` entry, used to Export / Zip the datapack.
It will also contain an `include: []` array, used to include specified files in the root directory of the Export / Zip.
It will also keep the include array when rerunning the Configure command.
