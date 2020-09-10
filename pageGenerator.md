---
sidebarDepth: 0
---
# 页面模版生成
## 项目背景
在后台管理系统中,业务页面大致相似,都拥有搜索栏和表格,开发出一个能快速生成模版的功能能极大提升开发效率。
## 使用技术
    @angular-devkit/schematics-cli  
angular-cli拥有创建模版的[指令](https://angular.cn/cli/generate),可根据angular设定好的模版快速创建组件、模块、服务、管道等文件    
将angular创建模版的功能抽离出来,自定义适用于系统的模版文件,运行命令读取配置数据即可快速创建文件完成开发。该模版生成功能适用于任何前端项目
## 示例
在vue前端项目创建自定义模版

    使用schematics编写自定义模版和处理逻辑  
![img1](https://raw.githubusercontent.com/Leemagination/projectIntroduction/master/images/generator1.png)  

    填写配置文件并运行命令生成文件  
![img2](https://raw.githubusercontent.com/Leemagination/projectIntroduction/master/images/generator2.png)     

    配置路由完成页面初步开发  
![img3](https://raw.githubusercontent.com/Leemagination/projectIntroduction/master/images/generator3.png) 