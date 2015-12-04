## karma 基础 FOR NODE

一个可以让测试代码跑在真实浏览器的工具  
karma 不是一个测试框架,也不包含断言库  
karma 只是提供了一个http server,以及让测试代码跑在HTML上展现出来.

### karma 能够做什么?

1. 让测试代码跑在真实浏览器
2. 让测试代码跑在多个浏览器
3. 在本地执行测试在开发过程中
4. 持续集成服务器上执行测试
5. 每次保存都执行测试
6. 在终端执行


### Installation 安装

```bash
npm install karma --save-dev

\# 安装对应插件
npm install karma-jasmine karma-chrome-launcher --save-dev
```

### 命令行接口

可以使用 `./node_modules/karma/bin/karma start` 启动,也可以全局安装 `karma-cli` 


```bash
karma <command>
```

### Configuration 配置

karma 需要知道项目的测试顺序,需要通过一个配置文件.  

生成配置文件  
```
karma init <configName.js/coffess>
```

#### 配置文件描述

具体描述,通过 node.js 的模块形式配置 module.exports

```
module.exports = function(config){
  config.set({
    // 配置信息
  })
};
```




### Starting Karma

开启karma 通过指定配置文件
```
karma start
```


#### lesson-1

```
config.set({
   basePath: './', // 指定basePath 目录
   files:[
    // 需要监听和验证的文件
   ],
   exclude:[
    // 排除文件
   ]
})
```
