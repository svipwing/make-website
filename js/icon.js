class CustomCategory extends Blockly.ToolboxCategory {
    constructor(categoryDef, toolbox, opt_parent) {
      super(categoryDef, toolbox, opt_parent);
    }
  
    createIconDom_() {
      // 这里新建了一个iconpark-icon元素，也可以自己修改为别的元素
      const img = document.createElement("iconpark-icon");
      // 这里的name属性获取的内容是toolbox定义的中的categorystyle，也可以是别的值/属性
      img.name = this.toolboxItemDef_.categorystyle;
      // 设置图标大小
      img.size = "22";
      // 最后返回的应是一个元素
      return img;
    }
  }
  
Blockly.registry.register(Blockly.registry.Type.TOOLBOX_ITEM, Blockly.ToolboxCategory.registrationName, CustomCategory, true);  