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
    controls: true,
    wheel: true,
    startScale: 0.9,
    maxScale: 0.9,
    minScale: 0.9,
    scaleSpeed: 0,
  },
  theme: "zelos",
  renderer: "zelos",
};
var blocklyDiv = document.getElementById("blocklyDiv");
var workspace = Blockly.inject(blocklyDiv, options);
var workspaceBlocks = document.getElementById("workspaceBlocks");
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

y = true;

function myUpdateFunction(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  
  if(code.split('\n')[0].indexOf("var") !== -1){
    if(code.indexOf("</title>") !== -1){
      lines = code.split('\n');
      lines[0] = "\n<script>\n"+lines[0]+"\n</script>\n";
      lines.splice(lines.indexOf("</head>")-1, 0, lines.shift());
      lines.splice(0, 2);
      code = lines.join('\n');
    }else{
      lines = code.split('\n');
      lines[0] = "<script>\n"+lines[0]+"\n</script>";
      code = lines.join('\n');
    }
  }

  if(code.indexOf("MC不灭") !== -1 && y){
    y = false;
    if(confirm("恭喜你找到了彩蛋！")){
      window.open("mc.html");
    }
  }

  document.getElementById("code").textContent = code;
  document.getElementById("look").innerHTML = code;

  hljs.highlightAll();
}

workspace.addChangeListener(myUpdateFunction);