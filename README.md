# react 后台管理系统
> react-后台管理系统

[Home 主页](https://github.com/Jasonzhi123/management-system)
[Demo 示例](https://system.jasonzhi.cn)

  欢迎使用后台管理系统解决方案
  本项目是针对(后台人员)or(外包人员)or前端快速搭建后台管理系统而创建
- [GitHub地址](https://github.com/Jasonzhi123/management-system)

### 最近更新
```jsn
22  添加了echats 图标功能
23  修改echats列表的主题以及内容，填充首页文字内容
```

## 特点
+ 使用React-Router最新4.0路由
+ 灵活使用React和AntD，实现产品后台的数据管理问题
+ Echarts图表功能实现数据可视化
+ 

### 功能模块
<span style="color: rgb(184,49,47);">备注：项目只引入了ant-design的部分组件，其他的组件antd官网有源码，可以直接复制到项目中使用😁</span>
<!--more-->
### 代码目录
```js
+-- build/                                  ---打包的文件目录
+-- config/                                 ---npm run eject 后的配置文件目录
+-- src/                                    ---核心代码目录
|   +-- axios                               ---axios请求
|   |    --- index.js                          ---axios 
|   +-- components                          ---各式各样的组件存放目录
|   +-- config                              --- 配置文件
|   |    --- menuConfig                        ---路由配置文件
|   +-- styles                              ---项目的样式存放目录
|   --- App.js                              ---组件入口文件
|   --- index.js                            ---项目的整体js入口文件
--- package.json                            ---依赖 and 配置文件 
```
### 安装运行

##### 1.克隆项目
```js
git clone https://github.com/Jasonzhi123/management-system.git
```
##### 2.yarn安装相关包文件
```js
yarn 
```
##### 3.启动项目
```js
yarn start
```
##### 4.打包项目
```js
yarn run build
```
### 结尾
该项目会不定时更新，后续时间会添加更多的模块

当然后续也会添加封装的UI组件
