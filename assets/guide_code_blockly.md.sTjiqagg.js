import{_ as e,c as a,o,V as t}from"./chunks/framework.BbAbY5cn.js";const m=JSON.parse('{"title":"自行开发","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"guide/code/blockly.md","filePath":"guide/code/blockly.md"}'),l={name:"guide/code/blockly.md"},r=t('<h1 id="自行开发" tabindex="-1">自行开发 <a class="header-anchor" href="#自行开发" aria-label="Permalink to &quot;自行开发&quot;">​</a></h1><p>项目的需求是千变万化的，尽管有了生成器，你通常也需要手动修改。</p><p>本章将带领你在代码上修改，你可以在下面二选一：</p><ol><li>使用上一章生成的代码进行修改 <strong>（推荐，本章选择这种）</strong></li><li>使用master分支下的内容进行修改 <strong>（不推荐，工程量较大）</strong></li></ol><h2 id="新建积木三部曲" tabindex="-1">新建积木三部曲 <a class="header-anchor" href="#新建积木三部曲" aria-label="Permalink to &quot;新建积木三部曲&quot;">​</a></h2><p>本项目基于Google Blockly，因此你需要熟悉它的基本操作和架构，请先阅读官方文档后继续，本章将默认你具有基础</p><p>接下来从零开始创建一块积木</p><h3 id="添加积木创建声明" tabindex="-1">添加积木创建声明 <a class="header-anchor" href="#添加积木创建声明" aria-label="Permalink to &quot;添加积木创建声明&quot;">​</a></h3><p>你可以使用Google Blockly官方提供的 开发者人员工具 创作积木，创作好后导出</p><p>将声明积木块的部分放置于<code>blocks/get.js</code>的末尾</p><h3 id="添加积木的代码生成器" tabindex="-1">添加积木的代码生成器 <a class="header-anchor" href="#添加积木的代码生成器" aria-label="Permalink to &quot;添加积木的代码生成器&quot;">​</a></h3><p>导出你的生成器代码，放置于<code>blocks/get.js.js</code>的末尾</p><p>然后修改生成代码部分为你想要的</p><h3 id="引入到积木盒子" tabindex="-1">引入到积木盒子 <a class="header-anchor" href="#引入到积木盒子" aria-label="Permalink to &quot;引入到积木盒子&quot;">​</a></h3><p>你可以在<code>index.html</code>的<code>toolbox</code>元素里添加积木盒，并将你导出的工作区积木xml插入</p><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2><p>生成器中默认只提供了四个贡献者位置，你可以在<code>welcome.html</code>里自行添加</p><h2 id="教程" tabindex="-1">教程 <a class="header-anchor" href="#教程" aria-label="Permalink to &quot;教程&quot;">​</a></h2><p>一旦你的积木有新增或删减，你就需要调整帮助文档，因此请前往<code>help.html</code>修改</p>',19),c=[r];function d(i,h,s,n,p,_){return o(),a("div",null,c)}const b=e(l,[["render",d]]);export{m as __pageData,b as default};