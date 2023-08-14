document.addEventListener("keydown", (event) => {
    if (event.key === "f12" || event.keyCode === 123) {
        event.preventDefault();
        $.growl.error({
            title: "嘿！别瞎按！",
            message: "坏孩子!",
            duration: 5000,
        });
    }
});

function formatTimeDifference(time) {
    return ~~(time / 86400000) + " 天 " + ~~(time / 3600000) % 24 + " 时 " + ~~(time / 6E4) % 60 + " 分 " + ~~(time / 1E3) % 60 + " 秒";
}

var specifiedDate = new Date("2023-07-23 00:00:00.000");
console.log("%c网%c页%c开%c发%c助%c手",
    "font-size: 45px;color:#d4a6ff;", "font-size: 45px;color:#caa7fd;", "font-size: 45px;color:#c1a8fc;", "font-size: 45px;color:#b7a9fa;",
    "font-size: 45px;color:#aeabf9;", "font-size: 45px;color:#a4acf7;");

console.log("%c网页开发助手 官方QQ群%c1%c3%c5%c4%c5%c2%c0%c2%c5",
    "font-size: 14px;padding:4px 8px;margin-top:10px;background: linear-gradient(89deg, #D4A6FF 0%, #63B5EE 78%);color:#fff;",
    "margin-left:10px;font-size:14px;color:#d4a6ff;", "font-size:14px;color:#c8a7fd;", "font-size:14px;color:#bca8fb;",
    "font-size:14px;color:#b1aaf9;", "font-size:14px;color:#a5abf7;", "font-size:14px;color:#9aadf6;", "font-size:14px;color:#8eaef4;",
    "font-size:14px;color:#83b0f2;", "font-size:14px;color:#83b0f2;");

console.log("%c♥ %c网页开发助手 已经成立 " + formatTimeDifference(Date.now() - specifiedDate.valueOf()) + "%c ♥",
    "color:#f00;padding:5px 0px;", "padding:5px 0px;", "color:#f00;padding:5px 0px;");

var yearDifference = (new Date(Date.now() - specifiedDate.valueOf())).getFullYear() - 1970;
specifiedDate = new Date(specifiedDate.getFullYear() + yearDifference + 1 + "-" + specifiedDate.toISOString().match(/.+\-(.+\-.+)T.+/)[1] + " 19:55:00.000");

if ("07-23" === (new Date).toISOString().match(/.+\-(.+\-.+)T.+/)[1]) {
    console.log("%c♥ %c今天是 网页开发助手 成立的 第 " + yearDifference + " 周年 哇~快去QQ群祝福吧~%c ♥",
        "color:#f00;padding:5px 0px;", "padding:5px 0px;", "color:#f00;padding:5px 0px;");
} else {
    console.log("%c♥ %c距离 网页开发助手 " + (yearDifference + 1) + " 周年 还剩 " + formatTimeDifference(specifiedDate.valueOf() - Date.now()) + "%c ♥",
        "color:#f00;padding:5px 0px;", "padding:5px 0px;", "color:#f00;padding:5px 0px;");
}