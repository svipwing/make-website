var options = {
    toolbox: document.getElementById("toolbox"),
    collapse: false,
    comments: false,
    disable: false,
    maxBlocks: Infinity,
    trashcan: true,
    horizontalLayout: false,
    toolboxPosition: "start",
    css: true,
    media: "./media/",
    rtl: false,
    scrollbars: false,
    sounds: true,
    oneBasedIndex: true,
    zoom: {
        controls: true, wheel: true,
    },
    theme: 'zelos',
    renderer: "codemao",
};
var blocklyDiv = document.getElementById("blocklyDiv");
var workspace = Blockly.inject(blocklyDiv, options);
var workspaceBlocks = document.getElementById("workspaceBlocks");
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

function myUpdateFunction(event) {
    var code = Blockly.JavaScript.workspaceToCode(workspace);

    if (code.split('\n')[0].indexOf("var") !== -1) {
        if (code.indexOf("</title>") !== -1) {
            lines = code.split('\n');
            lines[0] = "\n<script>\n" + lines[0] + "\n</script>\n";
            lines.splice(lines.indexOf("</head>") - 1, 0, lines.shift());
            lines.splice(0, 2);
            code = lines.join('\n');
        } else {
            lines = code.split('\n');
            lines[0] = "<script>\n" + lines[0] + "\n</script>";
            code = lines.join('\n');
        }
    }

    document.getElementById("code").textContent = code;
    document.getElementById("look").innerHTML = code;

    hljs.highlightAll();
}

workspace.addChangeListener(myUpdateFunction);

document.addEventListener("resize", function () {
    Blockly.svgResize(workspace);
})