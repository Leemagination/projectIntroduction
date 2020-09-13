---
sidebarDepth: 0
---
# 打印项目
仓库作业中需要在货物贴上各种条码，在打印相关方面摸索出如下3种方案
## [Lodop](http://www.lodop.net/)方案
在需要打印的电脑上安装lodop插件，前端项目中引入相关js文件，由前端绘制需打印的条码。
:::tip 优点
* lodop方案成熟
* api文档较完善
:::
:::danger 缺点
* 商用需要金钱支持
* 打印内容需由前端绘制,打印数据需从后端获取
* 用户需要安装lodop才能完成打印流程
:::
![img1](https://raw.githubusercontent.com/Leemagination/projectIntroduction/master/images/print1.png) 
## 浏览器方案
现代浏览器都自带有打印功能且自动解析预览PDF文件，获取后端生成的PDF在浏览器进行打印  
:::tip 优点
* 无需任何插件即可预览打印
* 无兼容性问题
* 可自定义参数让后端生成对应pdf
:::
:::danger 缺点
* 浏览器安全问题,打印时会弹出打印对话框无法避免
* 浏览器打印弹框没有用户点击确认或取消的回调函数
:::
![img2](https://raw.githubusercontent.com/Leemagination/projectIntroduction/master/images/print2.png) 
## 自制插件方案
因浏览器方案需要额外一步的打印确认操作，为提升仓库作业人员效率，后端同事开发一款打印插件可直接打印pdf文件
:::tip 优点
* 提升仓库人员打印作业的效率
* 免费
:::
:::danger 缺点
* 自研插件不够完善,偶尔遇到预期外错误
* 用户需要安装打印插件
:::