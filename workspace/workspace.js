var options = { 
	toolbox : document.getElementById("toolbox"), 
	collapse : false, 
	comments : false, 
	disable : false, 
	maxBlocks : Infinity, 
	trashcan : false, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : './media/', 
	rtl : false, 
	scrollbars : false, 
	sounds : true, 
	oneBasedIndex : true,
	zoom : {
		controls : true, 
		wheel : true, 
		startScale : 0.9, 
		maxScale : 0.9, 
		minScale : 0.9, 
		scaleSpeed : 0
	},
	theme: "zelos",
	renderer: "zelos"
};
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv, options);
var workspaceBlocks = document.getElementById("workspaceBlocks"); 
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
// 自动生成代码
        function myUpdateFunction(event) {
            var code = Blockly.JavaScript.workspaceToCode(workspace);
            document.getElementById("code").innerText = code;
document.getElementById("look").innerHTML = code;

        }
        workspace.addChangeListener(myUpdateFunction);