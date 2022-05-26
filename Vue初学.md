# Vue初学

## 1、前期准备

### 1. nodejs安装

![image-20220526144542758](https://www.milho.top/blog/image-20220526144542758.png)

node.js官方网址：https://nodejs.org/zh-cn/ 这里选择下载稳定版本

安装时建议更改nodejs的安装路径，直接将C:\Program Files\nodejs改为D:\NodeJS，然后点击Next。

安装完成后验证 nodejs 和 npm 包管理器是否安装成功，输入cmd，然后依次输入如下两个命令：

node -v：查看nodejs的版本号
npm -v：查看npm的版本号

![image-20220526144749603](https://www.milho.top/blog/image-20220526144749603.png)

<!-- more -->

npm换源以及更改全局模块和缓存位置（E盘新建一个node文件，新建node_cache和node_global文件夹）
nodejs
![](https://www.milho.top/blog/image-20220523235648005.png)

```shell
npm config set cache "E:\node\node_cache"
npm config set prefix "E:\node\node_global"

// 官方镜像
npm config set registry http://registry.npmjs.org

// 最好换成淘宝镜像
npm config set registry http://registry.npm.taobao.org
```
将node_global文件夹加入到Windows的系统环境变量里面

![image-20220526144910154](https://www.milho.top/blog/image-20220526144910154.png)



### 2. 安装vue和相关插件
[安装@vue/gil](https://cli.vuejs.org/zh/)

cmd界面下 `npm install -g @vue/cli`

![image-20220526145137805](https://www.milho.top/blog/image-20220526145137805.png)

cmd下输入vue -V验证是否安装成功

![image-20220526145359210](https://www.milho.top/blog/image-20220526145359210.png)

找到项目路径创建项目`vue create 项目名`

![image-20220526150055147](https://www.milho.top/blog/image-20220526150055147.png)

选择manually select features

![image-20220526150149655](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220526150149655.png)

<kbd>Enter</kbd>进入下一步选择Babel、Router和Vuex，使用<kbd> </kbd>（即空格键）选择，<kbd>Enter</kbd>进入下一步

![image-20220526150838451](https://www.milho.top/blog/image-20220526150838451.png)

跟着图片选择<kbd>Enter</kbd>

![image-20220526150945033](https://www.milho.top/blog/image-20220526150945033.png)

安装完成后输入`cd vue-demo`进入到项目根目录下 `npm run serve`运行vue项目即可

![image-20220526151025563](https://www.milho.top/blog/image-20220526151025563.png)

浏览器中访问http://localhost:8080/可见下图页面即说明vue项目安装启动成功

![image-20220526151215764](https://www.milho.top/blog/image-20220526151215764.png)

安装[Element-plus](https://element-plus.gitee.io/zh-CN/guide/installation.html)，一定要在项目根目录下安装

```shell
# NPM环境下
$ npm install element-plus --save
```

![image-20220526151756176](https://www.milho.top/blog/image-20220526151756176.png)

全局安装anywhere插件 

`npm install anywhere -g`

之后vue项目完成打包后，可以进入到dist文件夹中

`anywhere -p vue 项目端口号`运行项目



## 2、完成vue项目

- [ ] 有视频就不赘述了

完成详情参照最后的视频链接 

### 项目布局如下

![image-20220526152501865](https://www.milho.top/blog/image-20220526152501865.png)

最终效果图

### 登录页面

![image-20220526152635986](https://www.milho.top/blog/image-20220526152635986.png)

### 主页

![image-20220526152851401](https://www.milho.top/blog/image-20220526152851401.png)

### 个人信息页

![](https://www.milho.top/blog/image-20220526152957551.png)

- [ ] 项目有待完善，将会持续更新该项目，后端部分另开篇章

## 3、vue参考文档和视频

在处理前端访问后端的跨域请求时会出错

此时在项目根目录的src下建一个utils工具类文件夹并创建request.js文件处理跨域请求

项目目录下创建vue.config.js配置文件

上面两个文件的源码可在[程序员青戈的blog中获取](https://blog.csdn.net/xqnode/article/details/118325868?spm=1001.2014.3001.5501)

[视频参考链接地址](https://www.bilibili.com/video/BV14y4y1M7Nc?p=1)

