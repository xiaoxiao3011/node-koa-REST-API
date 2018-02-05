# koa

### 简易koa项目工程
 
***


封装了路由、模板、静态文件加载、mvc、restAPI、cookie/session、sql、测试等模块

## 1、使用

    $ git clone 

    $ cd koa

    $ npm install

    $ npm run start

## 2、目录结构

* controlls  ---该目录下放置控制器文件
* server     ---服务
* view    	 ---该目录下放置html模板
* data       ---该目录下放置数据库查询（模拟数据）
* test		 ---该目录下放置测试文件
* static	 ---该目录下放置静态文件		
* app.js		  ---node启动文件
* controlls.js	  ---所有控制器加载到路由
* templating.js   ---模板文件编译
* rest.js 		  ---restAPI配置
* static-file.js  ---静态文件加载


## 3、使用介绍：http://www.cnblogs.com/pangys/p/7280793.html