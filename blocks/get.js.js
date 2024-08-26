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
        '<html>\n<head>\n<script src=" https://static.codemao.cn/pickduck/Sk6ZKOYoR.js?hash=FvdCzpDmExIP2wPGUy13G5i3NEfy"></script><meta http-equiv="Content-Type" content="text/html; charset=' +
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
Blockly.JavaScript["div"] = function (block) {
    var statements_html = Blockly.JavaScript.statementToCode(block, "html");
    // var text_text = block.getFieldValue("text");
    var text_color = block.getFieldValue("color");
    var text_id = block.getFieldValue("id");
    // TODO: Assemble JavaScript into code variable.
    var code = '<div id="' + text_id + '" style="background-color: ' + text_color + '">' + statements_html + '</div>'
    return code;
};
Blockly.JavaScript["div_xy"] = function (block) {
    var statements_html = Blockly.JavaScript.statementToCode(block, "html");
    // var text_text = block.getFieldValue("text");
    var text_color = block.getFieldValue("color");
    var text_id = block.getFieldValue("id");
    var text_x = block.getFieldValue("x");
    var text_y = block.getFieldValue("y");
    // TODO: Assemble JavaScript into code variable.
    var code = '<div id="' + text_id + '" style="position: fixed; background-color: ' + text_color + 'top:' + text_y + '%;' + 'left:' + text_x + '%;">' + statements_html + '</div>'
    return code;
};
Blockly.JavaScript["i"] = function (block) {
    var text_text = block.getFieldValue("text");
    var text_id = block.getFieldValue("id");
    // TODO: Assemble JavaScript into code variable.
    var code = '<i id="' + text_id + '">' + text_text + '</i>'
    return code;
};

Blockly.JavaScript["i_xy"] = function (block) {
    var text_text = block.getFieldValue("text");
    var text_id = block.getFieldValue("id");
    var text_x = block.getFieldValue("x");
    var text_y = block.getFieldValue("y");
    // TODO: Assemble JavaScript into code variable.
    var code = '<i id="' + text_id + '" style="position: fixed; ' + 'top:' + text_y + '%;' + 'left:' + text_x + '%;">' + text_text + '</i>'
    return code;
};

Blockly.JavaScript["u"] = function (block) {
    var text_text = block.getFieldValue("text");
    var text_id = block.getFieldValue("id");
    // TODO: Assemble JavaScript into code variable.
    var code = '<u id="' + text_id + '">' + text_text + '</u>'
    return code;
};

Blockly.JavaScript["u_xy"] = function (block) {
    var text_text = block.getFieldValue("text");
    var text_id = block.getFieldValue("id");
    var text_x = block.getFieldValue("x");
    var text_y = block.getFieldValue("y");
    // TODO: Assemble JavaScript into code variable.
    var code = '<u id="' + text_id + '" style="position: fixed; ' + 'top:' + text_y + '%;' + 'left:' + text_x + '%;">' + text_text + '</u>'
    return code;
};

Blockly.JavaScript["s"] = function (block) {
    var text_text = block.getFieldValue("text");
    var text_id = block.getFieldValue("id");
    // TODO: Assemble JavaScript into code variable.
    var code = '<s id="' + text_id + '">' + text_text + '</s>'
    return code;
};

Blockly.JavaScript["s_xy"] = function (block) {
    var text_text = block.getFieldValue("text");
    var text_id = block.getFieldValue("id");
    var text_x = block.getFieldValue("x");
    var text_y = block.getFieldValue("y");
    // TODO: Assemble JavaScript into code variable.
    var code = '<s id="' + text_id + '" style="position: fixed; ' + 'top:' + text_y + '%;' + 'left:' + text_x + '%;">' + text_text + '</s>'
    return code;
};
Blockly.JavaScript["table"] = function (block) {
    var statements_table = Blockly.JavaScript.statementToCode(block, "table");
    var text_id = block.getFieldValue("id");
    // TODO: Assemble JavaScript into code variable.
    var code = '<s-table id="' + text_id + '">' + statements_table + '</s-table>'
    return code;
};
Blockly.JavaScript["tr_head"] = function (block) {
    var statements_tr = Blockly.JavaScript.statementToCode(block, "tr");
    var text_id = block.getFieldValue("id");
    // TODO: Assemble JavaScript into code variable.
    var code = ' <s-thead><s-tr id="' + text_id + '">' + statements_tr + '</s-tr> </s-thead>\n'
    return code;
};
Blockly.JavaScript["tr"] = function (block) {
    var statements_tr = Blockly.JavaScript.statementToCode(block, "tr");
    var text_id = block.getFieldValue("id");
    // TODO: Assemble JavaScript into code variable.
    var code = ' <s-tbody><s-tr id="' + text_id + '">' + statements_tr + '</s-tr></s-tbody>\n'
    return code;
};

Blockly.JavaScript["th"] = function (block) {
    var text_text = block.getFieldValue("text");
    var text_id = block.getFieldValue("id");
    // TODO: Assemble JavaScript into code variable.
    var code = '<s-th id="' + text_id + '">' + text_text + '</s-th>\n'
    return code;
};

Blockly.JavaScript["td"] = function (block) {
    var text_text = block.getFieldValue("text");
    var text_id = block.getFieldValue("id");
    // TODO: Assemble JavaScript into code variable.
    var code = '<s-td id="' + text_id + '">' + text_text + '</s-td>\n'
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

Blockly.JavaScript['text_size'] = function (block) {
    var text_size = block.getFieldValue('size');
    // TODO: Assemble JavaScript into code variable.
    var code = 'font-size:' + text_size + 'px;\n';
    return code;
};

Blockly.JavaScript['js'] = function (block) {
    var statements_js = Blockly.JavaScript.statementToCode(block, 'js');
    // TODO: Assemble JavaScript into code variable.
    var code = '<script>\n' + statements_js + '</script>\n';
    return code;
};

Blockly.JavaScript['alert'] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'alert(' + value_text + ');\n';
    return code;
};

Blockly.JavaScript['line'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '<hr />\n';
    return code;
};

Blockly.JavaScript['center_go'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '<center>\n';
    return code;
};

Blockly.JavaScript['center_end'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '</center>\n';
    return code;
};

Blockly.JavaScript['link'] = function (block) {
    var text_text = block.getFieldValue('text');
    var text_link = block.getFieldValue('link');
    // TODO: Assemble JavaScript into code variable.
    var code = '<a href="' + text_link + '">' + text_text + '</a>\n';
    return code;
};

Blockly.JavaScript['image'] = function (block) {
    var text_img = block.getFieldValue('img');
    var text_height = block.getFieldValue('height');
    var text_width = block.getFieldValue('width');
    // TODO: Assemble JavaScript into code variable.
    var code = '<img src="' + text_img + '" width="' + text_width + 'px" height="' + text_height + 'px " />\n';
    return code;
};

Blockly.JavaScript['button'] = function (block) {
    var text_text = block.getFieldValue('text');
    var text_link = block.getFieldValue('link');
    // TODO: Assemble JavaScript into code variable.
    var code = '<a href="' + text_link + '">\n<button>' + text_text + '</button>\n</a>\n';
    return code;
};

Blockly.JavaScript['dom_get_value'] = function (block) {
    var text_id = block.getFieldValue('id');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementById("' + text_id + '").value';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['input'] = function (block) {
    var text_id = block.getFieldValue('id');
    var dropdown_type = block.getFieldValue('type');
    // TODO: Assemble JavaScript into code variable.
    var code = '<input type="' + dropdown_type + '" id="' + text_id + '" />\n';
    return code;
};

Blockly.JavaScript['button_onclick'] = function (block) {
    var text_id = block.getFieldValue('id');
    var statements_onclick = Blockly.JavaScript.statementToCode(block, 'onclick');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementById("' + text_id + '").onclick=function(){\n' + statements_onclick + '\n};\n';
    return code;
};

Blockly.JavaScript['radius'] = function (block) {
    var text_r = block.getFieldValue('r');
    // TODO: Assemble JavaScript into code variable.
    var code = 'border-radius: ' + text_r + 'px;\n';
    return code;
};
Blockly.JavaScript['shadow'] = function (block) {
    var text_x = block.getFieldValue('x');
    var text_y = block.getFieldValue('y');
    var text_m = block.getFieldValue('m');
    var text_c = block.getFieldValue('c');
    // TODO: Assemble JavaScript into code variable.
    var code = 'box-shadow: ' + text_x + 'px ' + text_y + 'px ' + text_m + 'px ' + text_c + '\n';
    return code;
};
Blockly.JavaScript['bg_color'] = function (block) {
    var text_color = block.getFieldValue('color');
    // TODO: Assemble JavaScript into code variable.
    var code = 'background-color: ' + text_color + ';\n';
    return code;
};

Blockly.JavaScript['css_width'] = function (block) {
    var text_width = block.getFieldValue('width');
    // TODO: Assemble JavaScript into code variable.
    var code = 'width: ' + text_width + 'px;\n';
    return code;
};

Blockly.JavaScript['css_height'] = function (block) {
    var text_height = block.getFieldValue('height');
    // TODO: Assemble JavaScript into code variable.
    var code = 'height: ' + text_height + 'px;\n';
    return code;
};

Blockly.JavaScript['z-index'] = function (block) {
    var text_c = block.getFieldValue('c');
    // TODO: Assemble JavaScript into code variable.
    var code = 'z-index: ' + text_c + ';\n';
    return code;
};

Blockly.JavaScript['br'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '<br>\n';
    return code;
};

Blockly.JavaScript['h1_xy'] = function (block) {
    var text_text = block.getFieldValue('text');
    var text_id = block.getFieldValue('id');
    var text_x = block.getFieldValue('x');
    var text_y = block.getFieldValue('y');
    // TODO: Assemble JavaScript into code variable.
    var code =
        '<h1 id="' +
        text_id +
        '" style="position: fixed; left: ' +
        text_x + '%; top: ' +
        text_y +
        '%;">' +
        text_text +
        "</h1>\n";
    return code;
};

Blockly.JavaScript['h2_xy'] = function (block) {
    var text_text = block.getFieldValue('text');
    var text_id = block.getFieldValue('id');
    var text_x = block.getFieldValue('x');
    var text_y = block.getFieldValue('y');
    // TODO: Assemble JavaScript into code variable.
    var code =
        '<h2 id="' +
        text_id +
        '" style="position: fixed; left: ' +
        text_x + '%; top: ' +
        text_y +
        '%;">' +
        text_text +
        "</h2>";
    return code;
};


Blockly.JavaScript['h3_xy'] = function (block) {
    var text_text = block.getFieldValue('text');
    var text_id = block.getFieldValue('id');
    var text_x = block.getFieldValue('x');
    var text_y = block.getFieldValue('y');
    // TODO: Assemble JavaScript into code variable.
    var code =
        '<h3 id="' +
        text_id +
        '" style="position: fixed; left: ' +
        text_x + '%; top: ' +
        text_y +
        '%;">' +
        text_text +
        "</h3>";
    return code;
};

Blockly.JavaScript["p_xy"] = function (block) {
    var text_text = block.getFieldValue("text");
    var text_id = block.getFieldValue("id");
    var text_x = block.getFieldValue("x");
    var text_y = block.getFieldValue("y");
    // TODO: Assemble JavaScript into code variable.
    var code =
        '<p id="' +
        text_id +
        '" style="position: fixed; left: ' +
        text_x + '%; top: ' +
        text_y +
        '%;">' +
        text_text +
        "</p>\n";
    return code;
};

Blockly.JavaScript['link_xy'] = function (block) {
    var text_text = block.getFieldValue('text');
    var text_link = block.getFieldValue('link');
    var text_x = block.getFieldValue('x');
    var text_y = block.getFieldValue('y');
    // TODO: Assemble JavaScript into code variable.
    var code = '<a href="' + text_link +
        '" style="position: fixed; left: ' +
        text_x + '%; top: ' +
        text_y +
        '%;">' + text_text + '</a>\n';
    return code;
};

Blockly.JavaScript['image_xy'] = function (block) {
    var text_img = block.getFieldValue('img');
    var text_height = block.getFieldValue('height');
    var text_width = block.getFieldValue('width');
    var text_x = block.getFieldValue('x');
    var text_y = block.getFieldValue('y');
    // TODO: Assemble JavaScript into code variable.
    var code = '<img src="' + text_img + '" width="' + text_width + 'px" height="' + text_height + 'px" ' +
        ' style="position: fixed; left: ' +
        text_x + '%; top: ' +
        text_y +
        '%;" />\n';
    return code;
};

Blockly.JavaScript['button_xy'] = function (block) {
    var text_text = block.getFieldValue('text');
    var text_link = block.getFieldValue('link');
    var text_x = block.getFieldValue('x');
    var text_y = block.getFieldValue('y');
    // TODO: Assemble JavaScript into code variable.
    var code = '<a href="' + text_link + '"' +
        ' style="position: fixed; left: ' +
        text_x + '%; top: ' +
        text_y +
        '%;">' + '\n<button>' + text_text + '</button>\n</a>\n';
    return code;
};

Blockly.JavaScript['input_xy'] = function (block) {
    var text_id = block.getFieldValue('id');
    var dropdown_type = block.getFieldValue('type');
    var text_x = block.getFieldValue('x');
    var text_y = block.getFieldValue('y');
    // TODO: Assemble JavaScript into code variable.
    var code = '<input type="' + dropdown_type + '" id="' + text_id + '" ' +
        ' style="position: fixed; left: ' +
        text_x + '%; top: ' + text_y +
        '%;" />\n';
    return code;
};