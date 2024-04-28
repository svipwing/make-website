# 网页开发助手 - <b>云端版</b>

<hr />
<img src="./image/cover.png" width="400px" height="300px" />
<hr />
<img src="./image/help2.png" width="400px" height="300px" />

#### 介绍

网页开发助手云端版，支持保存代码和拉取代码，同时能够实现团队协作，具备后台系统

#### 软件架构

前端架构与普通版一致，采用PHP7.1+Mysql架构开发

#### 安装教程

1. 在服务器上配置PHP7.1和MySQL环境，新建MySQL数据库
2. 下载发行版，解压到服务器的网站目录
3. 填写`config.php`，说明如下：
```php
<?php
    //此文件为配置文件
    //不要删除本文件!!!!!!!
    //请务必在运行api/new_db.php之前填写完毕，请按照readme.md说明填写
    $dbhost = 'MySQL服务器主机地址';
    $dbuser = 'MySQL用户名';
    $dbpass = 'MySQL密码';
    $dbname = 'MySQL数据库名称';
    $adminPassword = md5('后台登录密码');
?>
```
4. 打开`api/new_db.php`，等待数据库创建完成
5. 删除`api/new_db.php`，安装完成！

#### 使用说明

1. 使用：拖拽积木进行编程
2. 预览：点击“运行代码”，查看效果，进行调整
3. 云储存：写完之后，点击“保存”，保存到云端
4. 云获取：点击“打开”，获取项目代码，继续编辑
5. 团队协作：保存项目，把项目名称发给伙伴，伙伴通过“打开”功能获取代码，开发好后保存，轮到你继续开发，一起在云端协作

#### 注意事项

1. 首次使用或遇到问题，请查看“新手指引”，或加q群：135452025

#### 贡献人员

1. 技术云，领导者、开发者
2. king2022，后端开发者

#### github仓库状态

[![Stargazers repo roster for @svipwing/make-website](https://reporoster.com/stars/svipwing/make-website)](https://github.com/svipwing/make-website/stargazers)
[![Forkers repo roster for @svipwing/make-website](https://reporoster.com/forks/svipwing/make-website)](https://github.com/svipwing/make-website/network/members)

#### 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request