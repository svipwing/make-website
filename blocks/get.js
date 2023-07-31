Blockly.JavaScript.ORDER_ATOMIC = 99;

Blockly.Blocks['h1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("第一大标题：")
        .appendField(new Blockly.FieldTextInput("text"), "text")
        .appendField("，颜色英文名/十六进制代码（可留空）：")
        .appendField(new Blockly.FieldTextInput("black"), "color")
        .appendField("，id（可留空）：")
        .appendField(new Blockly.FieldTextInput("id"), "id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['h2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("第二大标题：")
        .appendField(new Blockly.FieldTextInput("text"), "text")
        .appendField("，颜色英文名/十六进制代码（可留空）：")
        .appendField(new Blockly.FieldTextInput("black"), "color")
        .appendField("，id（可留空）：")
        .appendField(new Blockly.FieldTextInput("id"), "id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['h3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("第三大标题：")
        .appendField(new Blockly.FieldTextInput("text"), "text")
        .appendField("，颜色英文名/十六进制代码（可留空）：")
        .appendField(new Blockly.FieldTextInput("black"), "color")
        .appendField("，id（可留空）：")
        .appendField(new Blockly.FieldTextInput("id"), "id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['p'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("普通文字：")
        .appendField(new Blockly.FieldTextInput("text"), "text")
        .appendField("，颜色英文名/十六进制代码（可留空）：")
        .appendField(new Blockly.FieldTextInput("black"), "color")
        .appendField("，id（可留空）：")
        .appendField(new Blockly.FieldTextInput("id"), "id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['go'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("开始，网页标题")
        .appendField(new Blockly.FieldTextInput("hello"), "title")
        .appendField("，网页编码")
        .appendField(new Blockly.FieldDropdown([["utf-8","utf-8"], ["gbk","gbk"]]), "unicode");
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("结束");
    this.setPreviousStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['code'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("自定义代码")
        .appendField(new Blockly.FieldTextInput("<span>自定义</span>"), "code_txt");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['style'] = {
  init: function() {
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
  }
};

Blockly.Blocks['text_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("文本颜色的英文名/十六进制代码：")
        .appendField(new Blockly.FieldTextInput("red"), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};