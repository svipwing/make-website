const editor = ace.edit("editor");// 获取编辑器元素
editor.setTheme("ace/theme/tomorrow_night"); // 暗黑模式

// HTML 模板
const htmlCode = `<!DOCTYPE html>
<html>
<head>
  <title>标题</title>
</head>
<body>
  <h1>HTML 代码</h1>
</body>
</html>`;

// 元素获取
const exportButton = document.getElementById('exportButton');
const importFileInput = document.getElementById('importFile');
const htmlButton = document.getElementById('html');

// 导出为文件
exportButton.addEventListener('click', () => {
    const code = editor.getValue(); // 获取代码内容
    let exportCode = code;

    const blob = new Blob([exportCode], {type: 'text/plain'});
    const url = URL.createObjectURL(blob); // 获取储存链接

    const a = document.createElement('a'); // 新建一个超链接
    a.href = url; // 设置链接
    a.download = 'index.html'; // 下载文件名
    a.click(); // 模拟点击

    URL.revokeObjectURL(url);
});

// 导入
importFileInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (file) {
        const code = await file.text();
        editor.setValue(code); // 导入代码内容
    }
});

// 新建代码
htmlButton.addEventListener('click', () => {
    editor.session.setMode("ace/mode/html"); // 代码类型设置
    editor.setValue(htmlCode); // 模板代码
});