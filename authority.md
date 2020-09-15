---
sidebarDepth: 0
---
# 权限控制
后台管理系统都应具有权限控制功能,根据用户分配的角色权限来决定拥有的菜单和按钮的权限。权限控制应以后端为主，前端为辅，前端页面通过用户的角色权限决定菜单或按钮的显示与否。后端根据权限来限制请求的成功与否。
## 权限控制台
权限控制最重要的就是角色的配置,控制台可以针对角色进行增删改查和分配角色的菜单、按钮权限以及用户角色的分配  
![img1](https://raw.githubusercontent.com/Leemagination/projectIntroduction/master/images/authority4.png)  
![img1](https://raw.githubusercontent.com/Leemagination/projectIntroduction/master/images/authority5.png)
## 菜单权限
用户登录系统时向后端请求权限的相关数据,根据用户角色的权限来进行菜单栏的显示与系统路由的限制  

    管理者权限
![img1](https://raw.githubusercontent.com/Leemagination/projectIntroduction/master/images/authority6.png)  

    部分菜单权限用户
![img1](https://raw.githubusercontent.com/Leemagination/projectIntroduction/master/images/authority7.png)
## 按钮权限
用户登录系统时向后端请求权限的相关数据,根据用户角色的权限来针对页面按钮进行显示

    按钮正常显示
![img1](https://raw.githubusercontent.com/Leemagination/projectIntroduction/master/images/authority1.jpg)  
    
    取消按钮权限
![img1](https://raw.githubusercontent.com/Leemagination/projectIntroduction/master/images/authority3.png)  
![img1](https://raw.githubusercontent.com/Leemagination/projectIntroduction/master/images/authority7.jpg)