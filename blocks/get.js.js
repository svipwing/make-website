Blockly.JavaScript.ORDER_ATOMIC = 99;

Blockly.JavaScript["h1"] = function (block) {
  var text_text = block.getFieldValue("text");
  var text_color = block.getFieldValue("color");
  var text_id = block.getFieldValue("id");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<h1 id="' +
    text_id +
    '">' +
    text_text +
    "</h1>\n";
  return code;
};

Blockly.JavaScript["h2"] = function (block) {
  var text_text = block.getFieldValue("text");
  var text_color = block.getFieldValue("color");
  var text_id = block.getFieldValue("id");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<h2 id="' +
    text_id +
    '">' +
    text_text +
    "</h2>\n";
  return code;
};

Blockly.JavaScript["h3"] = function (block) {
  var text_text = block.getFieldValue("text");
  var text_color = block.getFieldValue("color");
  var text_id = block.getFieldValue("id");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<h3 id="' +
    text_id +
    '">' +
    text_text +
    "</h3>\n";
  return code;
};

Blockly.JavaScript["go"] = function (block) {
  var text_title = block.getFieldValue("title");
  var dropdown_unicode = block.getFieldValue("unicode");
  var code =
    '<html>\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=' +
    dropdown_unicode +
    '">\n<title>' +
    text_title +
    "</title>\n</head>\n<body>\n";
  return code;
};

Blockly.JavaScript["end"] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "</body>\n</html>\n";
  return code;
};

Blockly.JavaScript["p"] = function (block) {
  var text_text = block.getFieldValue("text");
  var text_color = block.getFieldValue("color");
  var text_id = block.getFieldValue("id");
  // TODO: Assemble JavaScript into code variable.
  var code =
    '<p id="' +
    text_id +
    '">' +
    text_text +
    "</p>\n";
  return code;
};

Blockly.JavaScript["code"] = function (block) {
  var text_code_txt = block.getFieldValue("code_txt");
  // TODO: Assemble JavaScript into code variable.
  var code = text_code_txt + "\n";
  return code;
};

Blockly.JavaScript["style"] = function (block) {
  var text_who = block.getFieldValue("who");
  var statements_css = Blockly.JavaScript.statementToCode(block, "css");
  // TODO: Assemble JavaScript into code variable.
  var code = "<style>\n#" + text_who + "{\n" + statements_css + "}\n</style>\n";
  return code;
};

Blockly.JavaScript["text_color"] = function (block) {
  var text_color = block.getFieldValue("color");
  // TODO: Assemble JavaScript into code variable.
  var code = "color:" + text_color + ";\n";
  return code;
};

Blockly.JavaScript['text_size'] = function(block) {
  var text_size = block.getFieldValue('size');
  // TODO: Assemble JavaScript into code variable.
  var code = 'font-size:' + text_size + 'px;\n';
  return code;
};

Blockly.JavaScript['js'] = function(block) {
  var statements_js = Blockly.JavaScript.statementToCode(block, 'js');
  // TODO: Assemble JavaScript into code variable.
  var code = '<script>\n' + statements_js + '</script>\n';
  return code;
};

Blockly.JavaScript['alert'] = function(block) {
  var text_text = block.getFieldValue('text');
  // TODO: Assemble JavaScript into code variable.
  var code = 'alert("' + text_text + '");\n';
  return code;
};

Blockly.JavaScript['line'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '<hr />\n';
  return code;
};

Blockly.JavaScript['center_go'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '<center>\n';
  return code;
};

Blockly.JavaScript['center_end'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '</center>\n';
  return code;
};

Blockly.JavaScript['link'] = function(block) {
  var text_text = block.getFieldValue('text');
  var text_link = block.getFieldValue('link');
  // TODO: Assemble JavaScript into code variable.
  var code = '<a href="' + text_link + '">' + text_text + '</a>\n';
  return code;
};

Blockly.JavaScript['image'] = function(block) {
  var text_img = block.getFieldValue('img');
  var text_height = block.getFieldValue('height');
  var text_width = block.getFieldValue('width');
  // TODO: Assemble JavaScript into code variable.
  var code = '<img src="' + text_img + '" width="' + text_width + 'px" height="' + text_height + 'px " />\n';
  return code;
};