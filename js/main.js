function intro() {
    var lsys = document.querySelector('[layout="v"]');
    lsys.setAttribute('data-title', '积木盒子');
    lsys.setAttribute('data-intro', '这里是装积木的盒子，它们有不同的分类，你可以随意使用');

    introJs().start();

    swal({
        title: "指引",
        text: "是否需要打开详细的帮助文档?",
        icon: "info",
        buttons: ["不用了", "是的"]
    }).then((y) => {
        if (y) {
            window.open("https://docs.svipwing.xyz/guide/user/help.html");
        } else {
            swal("好的，您可在导航栏再次打开");
        }
    });
}

$(document).ready(function () {

    if (window.history && window.history.pushState && window.history.replaceState) {
        $(document).pjax('a', 'body');
    } else {
        console.log("浏览器不支持pjax。将使用传统的页面刷新方式。");
    }
    
    sometext = ['让世界上没有难做的网页！',
        '基于Google blockly开发',
        'jQuery简单又好用',
        '听说vscode可以在线协作写代码',
        '内置了一个<a style="color:pink;" href="markdown.html">markdown编辑器</a>哦！',
        '初次使用要看<a style="color:pink;" href="help.html">帮助文档</a>哦！'];
    $("#text").html(sometext[Math.floor(Math.random() * sometext.length)]);

    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    if (month == 10 && day == 24) {
        swal({
            "title": "节日快乐！",
            "text": "1024程序员节快乐！",
            "icon": "success",
            "button": false,
            "timer": 2000
        });
    }

    if ($.cookie("Starter") === undefined) {
        setTimeout(intro, 3000);

        $.growl.notice({
            title: "必看提示",
            message:
                "如果您是新手，请查看新手指引！如遇问题，请加QQ交流群，群号：135452025",
            duration: 10000,
        });
        $.cookie("Starter", false);
    }

    start = JSON.parse('{"blocks":{"languageVersion":0,"blocks":[{"type":"go","id":"xGW#Gs{{#%XM47~?a?mP","x":-701,"y":-459,"fields":{"title":"hello","unicode":"utf-8"},"next":{"block":{"type":"h1","id":"|l8Nf%^q0Q@nB2%-?j^`","fields":{"text":"你好","id":"id"},"next":{"block":{"type":"h2","id":"cr-62Co(OrIvqEYx,iA%","fields":{"text":"这是一个网页","id":"id"},"next":{"block":{"type":"end","id":"5`8u45C8^slJ[PI%[ibM"}}}}}}}]}}');
    Blockly.serialization.workspaces.load(start, workspace);
    workspace.scrollCenter();

    c = false;
    $("#dao").click(function () {

        if (!c) {
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

    document.getElementById('importFile').addEventListener('change', async (event) => {
        const file = event.target.files[0];
        if (file) {
            const code = await file.text();
            Blockly.serialization.workspaces.load(JSON.parse(code), workspace);
            
            swal({
                title: "导入完毕",
                text: "积木数据导入完毕，请前往工作区查看！",
                icon: "info"
            });
        }
    });

    function downloadText(fileName, text) {
        const url = window.URL || window.webkitURL || window;
        const blob = new Blob([text]);
        const saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
        saveLink.href = url.createObjectURL(blob);
        saveLink.download = fileName;
        saveLink.click();
    }

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

        downloadText('page1.json', JSON.stringify(json));
    });

    $("#qq").click(function () {
        swal({
            title: "提示",
            text: "请先查看新手指引，如果还是不懂，请加QQ交流群，群号：135452025",
            icon: "success",
        });
    });

    $("#take-photo").click(function () {

        if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
            $.growl.error({
                title: "提示",
                message:
                    "移动端不支持webrtc，即将启用html2canvas截图功能，兼容性不好，请见谅（请下载图片，而不是选择“√”按钮）",
                duration: 5000,
            });

            new screenShotPlugin({ enableWebRtc: false , writeBase64: false });
        }else{
            $.growl.notice({
                title: "提示",
                message:
                    "即将弹出授权窗口，请允许，否则无法截图",
                duration: 5000,
            });

            new screenShotPlugin({ enableWebRtc: true });
        }

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

    setTimeout(() => {
        $("#nav").fadeOut(1000);
    }, 1500);

    if ($.cookie("theme") === undefined) {
        $.cookie("theme", "#2196f3");
        document.querySelector('#blocklyDiv .blocklyMainBackground').style.fill = '#f2f3f7';
        var toolboxDiv = document.querySelector('#blocklyDiv .blocklyToolboxDiv');
        toolboxDiv.style.backgroundColor = '#fff';
        toolboxDiv.style.borderRight = '1px solid #e5e7eb';
    }else{
        $(".navbar").css("background-color", $.cookie("theme"));
    }

    $("#theme-blue").click(function () {
        $(".navbar").css("background-color", "#2196f3");
        $.cookie("theme", "#2196f3");
        document.querySelector('#blocklyDiv .blocklyMainBackground').style.fill = '#f2f3f7';
        var toolboxDiv = document.querySelector('#blocklyDiv .blocklyToolboxDiv');
        toolboxDiv.style.backgroundColor = '#fff';
        toolboxDiv.style.borderRight = '1px solid #e5e7eb';
        $("#box-parent").css("display","none");
    });
    $("#theme-purple").click(function () {
        $(".navbar").css("background-color", "#6d50f0");
        $.cookie("theme", "#6d50f0");
        document.querySelector('#blocklyDiv .blocklyMainBackground').style.fill = '#f2f3f7';
        var toolboxDiv = document.querySelector('#blocklyDiv .blocklyToolboxDiv');
        toolboxDiv.style.backgroundColor = '#fff';
        toolboxDiv.style.borderRight = '1px solid #e5e7eb';
        $("#box-parent").css("display","none");
    });
    $("#theme-black").click(function () {
        $.cookie("theme", "#494949");
        $(".navbar").css("background-color", "#494949");
        document.querySelector('#blocklyDiv .blocklyMainBackground').style.fill = '#1f1f1f';
        var toolboxDiv = document.querySelector('#blocklyDiv .blocklyToolboxDiv');
        toolboxDiv.style.backgroundColor = '#c2c2c2';
        toolboxDiv.style.borderRight = '1px solid #e5e7eb';
        $("#box-parent").css("display","none");
    });
});