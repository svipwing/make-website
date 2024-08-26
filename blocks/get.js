Blockly.JavaScript.ORDER_ATOMIC = 99;

Blockly.Blocks["h1"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("第一大标题:")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["h2"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("第二大标题:")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["h3"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("第三大标题:")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["p"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("普通文字:")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["div"] = {
    init: function () {
        this.appendStatementInput('html')
            .setCheck(null)
            .appendField("块标签")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id")
            .appendField(",颜色")
            .appendField(new Blockly.FieldTextInput("color"), "color");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["div_xy"] = {
    init: function () {
        this.appendStatementInput('html')
            .setCheck(null)
            .appendField("块标签")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id")
            .appendField(",颜色")
            .appendField(new Blockly.FieldTextInput("color"), "color")
            .appendField(",x")
            .appendField(new Blockly.FieldTextInput("x"), "x")
            .appendField(",y")
            .appendField(new Blockly.FieldTextInput("y"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["i"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("斜体文字")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["i_xy"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("斜体文字")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id")
            .appendField(",x")
            .appendField(new Blockly.FieldTextInput("x"), "x")
            .appendField(",y")
            .appendField(new Blockly.FieldTextInput("y"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["u"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("下划线文字")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["u_xy"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("下划线文字")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id")
            .appendField(",x")
            .appendField(new Blockly.FieldTextInput("x"), "x")
            .appendField(",y")
            .appendField(new Blockly.FieldTextInput("y"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["s"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("删除线文字")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["s_xy"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("删除线文字")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id")
            .appendField(",x")
            .appendField(new Blockly.FieldTextInput("x"), "x")
            .appendField(",y")
            .appendField(new Blockly.FieldTextInput("y"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["table"] = {
    init: function () {
        this.appendStatementInput('table')
            .appendField("定义表格")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["tr_head"] = {
    init: function () {
        this.appendStatementInput('tr')
            .appendField("表头行")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["tr"] = {
    init: function () {
        this.appendStatementInput('tr')
            .appendField("表格行")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["th"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("定义表头")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["td"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("定义单元格")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["go"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("开始,网页标题")
            .appendField(new Blockly.FieldTextInput("hello"), "title")
            .appendField(",网页编码")
            .appendField(
                new Blockly.FieldDropdown([
                    ["utf-8", "utf-8"],
                    ["gbk", "gbk"],
                ]),
                "unicode"
            );
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["end"] = {
    init: function () {
        this.appendDummyInput().appendField("结束");
        this.setPreviousStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["code"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("自定义代码")
            .appendField(
                new Blockly.FieldTextInput("<span>自定义</span>"),
                "code_txt"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["style"] = {
    init: function () {
        this.appendStatementInput("css")
            .setCheck(null)
            .appendField("id为")
            .appendField(new Blockly.FieldTextInput("a"), "who")
            .appendField("元素的样式");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["text_color"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("文本颜色的英文名/十六进制代码:")
            .appendField(new Blockly.FieldTextInput("red"), "color");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["text_size"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("字体大小:")
            .appendField(new Blockly.FieldTextInput("10"), "size")
            .appendField("像素");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["js"] = {
    init: function () {
        this.appendStatementInput("js").setCheck(null).appendField("高级脚本");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["alert"] = {
    init: function () {
        this.appendValueInput("text")
            .setCheck(["Number", "String"])
            .appendField("弹出提示框:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["line"] = {
    init: function () {
        this.appendDummyInput().appendField("分割线");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["center_go"] = {
    init: function () {
        this.appendDummyInput().appendField("开始居中");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["center_end"] = {
    init: function () {
        this.appendDummyInput().appendField("结束居中");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["link"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("超链接,提示文本")
            .appendField(new Blockly.FieldTextInput("百度"), "text")
            .appendField(",链接")
            .appendField(new Blockly.FieldTextInput("https://baidu.com"), "link");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["image"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("图片,文件路径")
            .appendField(new Blockly.FieldTextInput("a.png"), "img")
            .appendField(",高度")
            .appendField(new Blockly.FieldTextInput("10"), "height")
            .appendField("像素,宽度")
            .appendField(new Blockly.FieldTextInput("10"), "width")
            .appendField("像素");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["button"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("按钮,文本")
            .appendField(new Blockly.FieldTextInput("按钮文本"), "text")
            .appendField(",点击后跳转到链接")
            .appendField(new Blockly.FieldTextInput("http://baidu.com"), "link");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["dom_get_value"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("获取id为")
            .appendField(new Blockly.FieldTextInput("a"), "id")
            .appendField("的输入框的内容");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["input"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("普通输入框，id为")
            .appendField(new Blockly.FieldTextInput("a"), "id")
            .appendField("，内容类型为")
            .appendField(
                new Blockly.FieldDropdown([
                    ["文本", "text"],
                    ["密码", "password"],
                ]),
                "type"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["button_onclick"] = {
    init: function () {
        this.appendStatementInput("onclick")
            .setCheck(null)
            .appendField("id为")
            .appendField(new Blockly.FieldTextInput("a"), "id")
            .appendField("的按钮被点击后");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["radius"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("圆角")
            .appendField(new Blockly.FieldTextInput("10"), "r")
            .appendField("像素");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["shadow"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("阴影 x偏移")
            .appendField(new Blockly.FieldTextInput("-2"), "x")
            .appendField("y偏移")
            .appendField(new Blockly.FieldTextInput("-2"), "y")
            .appendField("模糊")
            .appendField(new Blockly.FieldTextInput("10"), "m")
            .appendField("颜色")
            .appendField(new Blockly.FieldTextInput("red"), "c");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["bg_color"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("背景色为")
            .appendField(new Blockly.FieldTextInput("red"), "color")
            .appendField("(颜色英文或十六进制代码）");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["css_width"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("宽度为")
            .appendField(new Blockly.FieldTextInput("100"), "width")
            .appendField("像素");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["css_height"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("高度为")
            .appendField(new Blockly.FieldTextInput("10"), "height")
            .appendField("像素");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["z-index"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("设置图层为")
            .appendField(new Blockly.FieldTextInput("10"), "c")
            .appendField("层(数值越大显示越上)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
Blockly.Blocks["br"] = {
    init: function () {
        this.appendDummyInput().appendField("换行");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["h1_xy"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("第一大标题：")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField("，id（可留空）：")
            .appendField(new Blockly.FieldTextInput("id"), "id")
            .appendField("，x坐标")
            .appendField(new Blockly.FieldTextInput("5"), "x")
            .appendField("，y坐标")
            .appendField(new Blockly.FieldTextInput("5"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["h2_xy"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("第二大标题：")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField("，id（可留空）：")
            .appendField(new Blockly.FieldTextInput("id"), "id")
            .appendField("，x坐标")
            .appendField(new Blockly.FieldTextInput("5"), "x")
            .appendField("，y坐标")
            .appendField(new Blockly.FieldTextInput("5"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};


Blockly.Blocks["h3_xy"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("第三大标题：")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField("，id（可留空）：")
            .appendField(new Blockly.FieldTextInput("id"), "id")
            .appendField("，x坐标")
            .appendField(new Blockly.FieldTextInput("5"), "x")
            .appendField("，y坐标")
            .appendField(new Blockly.FieldTextInput("5"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["p_xy"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("普通文字:")
            .appendField(new Blockly.FieldTextInput("text"), "text")
            .appendField(",id(可留空):")
            .appendField(new Blockly.FieldTextInput("id"), "id")
            .appendField("，x坐标")
            .appendField(new Blockly.FieldTextInput("5"), "x")
            .appendField("，y坐标")
            .appendField(new Blockly.FieldTextInput("5"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["link_xy"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("超链接,提示文本")
            .appendField(new Blockly.FieldTextInput("百度"), "text")
            .appendField(",链接")
            .appendField(new Blockly.FieldTextInput("https://baidu.com"), "link")
            .appendField("，x坐标")
            .appendField(new Blockly.FieldTextInput("5"), "x")
            .appendField("，y坐标")
            .appendField(new Blockly.FieldTextInput("5"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["image_xy"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("图片,文件路径")
            .appendField(new Blockly.FieldTextInput("a.png"), "img")
            .appendField(",高度")
            .appendField(new Blockly.FieldTextInput("10"), "height")
            .appendField("像素,宽度")
            .appendField(new Blockly.FieldTextInput("10"), "width")
            .appendField("像素")
            .appendField("，x坐标")
            .appendField(new Blockly.FieldTextInput("5"), "x")
            .appendField("，y坐标")
            .appendField(new Blockly.FieldTextInput("5"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["button_xy"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("按钮,文本")
            .appendField(new Blockly.FieldTextInput("按钮文本"), "text")
            .appendField(",点击后跳转到链接")
            .appendField(new Blockly.FieldTextInput("http://baidu.com"), "link")
            .appendField("，x坐标")
            .appendField(new Blockly.FieldTextInput("5"), "x")
            .appendField("，y坐标")
            .appendField(new Blockly.FieldTextInput("5"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["input_xy"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("普通输入框，id为")
            .appendField(new Blockly.FieldTextInput("a"), "id")
            .appendField("，内容类型为")
            .appendField(
                new Blockly.FieldDropdown([
                    ["文本", "text"],
                    ["密码", "password"],
                ]),
                "type"
            )
            .appendField("，x坐标")
            .appendField(new Blockly.FieldTextInput("5"), "x")
            .appendField("，y坐标")
            .appendField(new Blockly.FieldTextInput("5"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

for (var key in msg) {
    Blockly.Msg[key] = msg[key];
}