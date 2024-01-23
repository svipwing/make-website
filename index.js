const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const Path = require('path');

const templateDir = './templates';
const outputDir = './public';

data = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

function processTemplate(filePath) {
    if (filePath.substring(filePath.lastIndexOf(".") + 1) == "html" || (filePath.substring(filePath.lastIndexOf(".") + 1) == "js" && ! ["blockly.min","highlight.min","icon","html2canvas"].includes(Path.parse(filePath).name))) {
        console.log("正在处理文件 "+filePath);

        const templateContent = fs.readFileSync(filePath, 'utf8');
        const result = ejs.render(templateContent, data);
        const fileName = path.relative(path.resolve(templateDir), filePath);
        const outputPath = path.join(outputDir, path.dirname(fileName));
        fs.mkdirSync(outputPath, { recursive: true });
        const outputFilePath = path.join(outputDir, fileName);
        fs.writeFileSync(outputFilePath, result);
    }else{
        console.log("正在拷贝文件"+filePath);
        fs.cp(filePath, path.join(outputDir, path.relative(path.resolve(templateDir), filePath)), (err) => {
            if (err) {
                console.error(err);
            }
        });
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);

        if (fs.statSync(filePath).isDirectory()) {
            processDirectory(filePath);
        } else {
            processTemplate(filePath);
        }
    });
}

console.log("正在准备清空缓存");
if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true });
    console.log(`${outputDir} 目录已删除`);
}else{
    console.log(`${outputDir} 目录不存在`);
}

console.log("开始扫描模板目录");
processDirectory(templateDir);