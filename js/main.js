$(document).ready(function () {
  sometext = ['让世界上没有难做的网页！',
  '基于Google blockly开发',
  'jQuery简单又好用',
  '听说vscode可以在线协作写代码',
  '内置了一个<a style="color:pink;" href="markdown.html">markdown编辑器</a>哦！',
  '初次使用要看<a style="color:pink;" href="help.html">帮助文档</a>哦！'];
  $("#text").html(sometext[Math.floor(Math.random()*sometext.length)]);

  var date = new Date();
  var month = date.getMonth() + 1;
  var day = date.getDate();
                    
  if(month==10 && day==21){
    swal({
      "title":"节日快乐！", 
      "text":"1024程序员节快乐！", 
      "icon":"success", 
      "button":false,
      "timer": 3000
    });
   }

  if ($.cookie("Starter") === undefined) {
    $.growl.notice({
      title: "必看提示",
      message:
        "如果您是新手，请务必查看帮助文档！帮助文档可以为您解答90%的问题，如果还是不懂，请加QQ交流群，群号：135452025",
      duration: 10000,
    });
    $.cookie("Starter", false);
  }

  start = JSON.parse('{"blocks":{"languageVersion":0,"blocks":[{"type":"go","id":"xGW#Gs{{#%XM47~?a?mP","x":-838,"y":-492,"fields":{"title":"hello","unicode":"utf-8"},"next":{"block":{"type":"h1","id":"|l8Nf%^q0Q@nB2%-?j^`","fields":{"text":"你好","id":"id"},"next":{"block":{"type":"h2","id":"cr-62Co(OrIvqEYx,iA%","fields":{"text":"这是一个网页","id":"id"},"next":{"block":{"type":"end","id":"5`8u45C8^slJ[PI%[ibM"}}}}}}}]}}');
  Blockly.serialization.workspaces.load(start, workspace);

  c = false;
  $("#dao").click(function () {
      
    if(!c){
      swal({
        title: "使用说明",
        text: "您正在打开 导入/导出功能，此功能用于积木数据操作，再次点击右上角的 按钮“导” 关闭页面",
        icon: "info"
      });
    }
    
    $("#import").toggle(1000);
    c = !c;
  });
  
  $("#a").click(function () {
    var json = JSON.parse($("#data").val());
    Blockly.serialization.workspaces.load(json, workspace);
    
    swal({
      title: "导入完毕",
      text: "积木数据导入完毕，请前往工作区查看！",
      icon: "info"
    });
  });
  
  $("#b").click(function () {
    var json = Blockly.serialization.workspaces.save(workspace);
    $("#json").val(JSON.stringify(json));
    
    let transfer = document.createElement('textarea');
    document.body.appendChild(transfer);
    transfer.value = JSON.stringify(json);
    transfer.focus();
    transfer.select();
    document.execCommand('copy');
    transfer.blur();
    document.body.removeChild(transfer);
    
    swal({
      title: "导出成功！",
      text: "积木数据导出成功！已复制到剪贴板！",
      icon: "success"
    });
  });

  $("#qq").click(function () {
    swal({
      title: "提示",
      text: "请先阅读帮助文档，如果还是不懂，请加QQ交流群，群号：135452025",
      icon: "success",
    });
  });

  $("#copycode").click(function () {
    let transfer = document.createElement('textarea');
    document.body.appendChild(transfer);
    transfer.value = document.getElementById("code").innerText;
    transfer.focus();
    transfer.select();
    document.execCommand('copy');
    transfer.blur();
    document.body.removeChild(transfer);

    $.growl.notice({
      title: "提示",
      message:
        "代码复制成功！",
      duration: 10000,
    });
  });

  $("#code_open").click(function () {
    $("#code").toggle(1000);
  });

  $("#look_open").click(function () {
    $("#look").toggle(1000);
  });

  if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    $.growl.notice({
        title: "提示",
        message:
          "建议使用电脑端打开，移动端建议切换为横屏以获得更好的体验",
        duration: 10000,
    });
  }
});