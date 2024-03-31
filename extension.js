const vscode = require('vscode');
const { mkdir } = require('node:fs/promises');
const { writeFile } = require('node:fs/promises');
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const contentlist = ["Advancements", "Banner Pattern", "Block Tags", "Chat Type", "Damage Type", "Functions", "Item Modifiers", "Item Tags", "Loot Tables", "Predicates", "Recipes", "Structures", "Text Component", "Trim Material", "Trim Pattern", "Wolf Variant", "Worldgen"]
	let disposable = vscode.commands.registerCommand('mc-pack-org.packInit', function () {
		async function init () {
            let data = []
            const wsfolder = await vscode.window.showWorkspaceFolderPick({
                ignoreFocusOut: true,
                placeHolder: "DataPack will be initialised here",
            })
            let path = wsfolder.uri.path.slice(1)
            console.log(path)
			const options = await vscode.window.showQuickPick(contentlist, {
				canPickMany: true,
				ignoreFocusOut: true,
                title: "Chose Contents"
			})
            const namespace = await vscode.window.showInputBox({
                title: "Provide Namespace ID",
            })
            await mkdir(path + "/data/minecraft", {recursive: true})
            await mkdir(path + "/data/" + namespace, {recursive: true})
            data = ['{\n','   "pack": {\n','      "pack_format": 36,\n','      "description": "<you pack description here>"\n','   }\n','}']
            await writeFile(path + "/pack.mcmeta", data)
            const nspath = path + "/data/" + namespace
            options.forEach (async (x) => {
                 switch (x) {
                    case "Advancements":
                        console.log("Advancements")
                        await mkdir(nspath + "/advancements", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/advancements/" + "empty.json", data)
                        break
                    case "Predicates":
                        console.log("Predicates")
                        await mkdir(nspath + "/predicates", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/predicates/" + "empty.json", data)
                        break
                    case "Banner Pattern":
                        console.log("Banner Pattern")
                        await mkdir(nspath + "/banner_pattern", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/banner_pattern/" + "empty.json", data)
                        break
                    case "Chat Type":
                        console.log("Chat Type")
                        await mkdir(nspath + "/chat_type", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/chat_type/" + "empty.json", data)
                        break
                    case "Damage Type":
                        console.log("Damage Type")
                        await mkdir(nspath + "/damage_type", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/damage_type/" + "empty.json", data)
                        break
                    case "Text Component":
                        console.log("Text Component")
                        await mkdir(nspath + "/text_component", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/text_component/" + "empty.json", data)
                        break
                    case "Trim Pattern":
                        console.log("Trim Pattern")
                        await mkdir(nspath + "/trim_pattern", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/trim_pattern/" + "empty.json", data)
                        break
                    case "Trim Material":
                        console.log("Trim Material")
                        await mkdir(nspath + "/trim_material", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/trim_material/" + "empty.json", data)
                        break
                    case "Wolf Variant":
                        console.log("Wolf Variant")
                        await mkdir(nspath + "/wolf_variant", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/wolf_variant/" + "empty.json", data)
                        break
                    case "Item Modifiers":
                        console.log("Item Modifiers")
                        await mkdir(nspath + "/item_modifiers", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/item_modifiers/" + "empty.json", data)
                        break
                    case "Recipes":
                        console.log("Recipes")
                        await mkdir(nspath + "/recipes", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/recipes/" + "empty.json", data)
                        break
                    case "Structures":
                        console.log("Structures")
                        await mkdir(nspath + "/structures", {recursive: true})
                        break
                    case "Item Tags":
                        console.log("Item Tags")
                        await mkdir(nspath + "/tags/items", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/tags/items/" + "empty.json", data)
                        break
                    case "Block Tags":
                        console.log("Block Tags")
                        await mkdir(nspath + "/tags/blocks", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/tags/blocks/" + "empty.json", data)
                        break
                    case "Damage Types":
                        console.log("Damage Types")
                        await mkdir(nspath + "/damage_type", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/damage_type/" + "empty.json", data)
                        break
                    case "Loot Tables":
                        console.log("Loot Tables")
                        await mkdir(nspath + "/loot_tables", {recursive: true})
                        data = ['{}']
                        await writeFile(nspath + "/loot_tables/" + "empty.json", data)
                        break
                    case "Functions":
                        console.log("Functions")
                        await mkdir(nspath + "/functions", {recursive: true})
                        data = ['']
                        await writeFile(nspath + "/functions/" + "main.mcfunction", data)
                        await writeFile(nspath + "/functions/" + "setup.mcfunction", data)
                        await mkdir(path + "/data/minecraft/tags/functions/", {recursive: true})
                        data = ['{\n','  "replace": false,\n','  "values": [\n','    "' + namespace + ':main"\n','  ]\n','}']
                        await writeFile(path + "/data/minecraft/tags/functions/" + "tick.json", data)
                        data = ['{\n','  "replace": false,\n','  "values": [\n','    "' + namespace + ':setup"\n','  ]\n','}']
                        await writeFile(path + "/data/minecraft/tags/functions/" + "load.json", data)
                        break
                    case "Worldgen":
                        console.log("Worldgen")
                        await mkdir(nspath + "/dimension", {recursive: true})
                        await mkdir(nspath + "/dimension_type", {recursive: true})
                        await mkdir(nspath + "/worldgen", {recursive: true})
                        await mkdir(nspath + "/worldgen/biome", {recursive: true})
                        await mkdir(nspath + "/worldgen/configured_carver", {recursive: true})
                        await mkdir(nspath + "/worldgen/configured_feature", {recursive: true})
                        await mkdir(nspath + "/worldgen/density_function", {recursive: true})
                        await mkdir(nspath + "/worldgen/flat_level_generator_preset", {recursive: true})
                        await mkdir(nspath + "/worldgen/noise", {recursive: true})
                        await mkdir(nspath + "/worldgen/noise_settings", {recursive: true})
                        await mkdir(nspath + "/worldgen/placed_feature", {recursive: true})
                        await mkdir(nspath + "/worldgen/processor_list", {recursive: true})
                        await mkdir(nspath + "/worldgen/structure", {recursive: true})
                        await mkdir(nspath + "/worldgen/structure_set", {recursive: true})
                        await mkdir(nspath + "/worldgen/template_pool", {recursive: true})
                        await mkdir(nspath + "/worldgen/world_preset", {recursive: true})
                        break
                    default:
                        console.log("None Selected")
                        break
                }
            })
		}
        init()
	})
	context.subscriptions.push(disposable && disposable1);

}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
