# Protractor

Protractor 是 AngularJS 团队构建的一个端对端的测试运行工具，模拟用户交互，帮助你验证你的Angular应用的运行状况  
使用 Jasmine 测试框架

经典案例: <https://github.com/angular/angular-phonecat>


## 安装

- 1. 全局安装 Protractor

```bash
npm install -g protractor
```

将安装了两个命令行工具 `protractor` 和 `webdriver-manager`.  
尝试使用 `protractor --version` 确定是否正常工作,
`webdriver-manager` 是一个辅助工具用来执行一个 Selenium 服务的实例.  

- 2. webdriver-manager 更新与启动

使用下面命令下载相关的文件:  

```bash
# 下载 更新 软件
webdriver-manager update
# 启动服务
webdriver-manager start
# 这将启动一个Selenium服务器和将输出一串信息日志,
# Protractor 测试将请求发送到该服务器控制本地浏览器
# 你可以看到在服务器的状态信息在 <http://localhost:4444/wd/hub.>
```

- 3. java 环境

启动本地 Selenium Server, 需要 jdk, 使用 `java -verison` 命令行检测条件

## configuration


lesson
=============

- lesson-1: 基础案例

> 命令 `protractor conf.js`

- lesson-2: 官方 tutorial step 0

>  有 **jasmine** 框架提供 `describe` 和 `it`
> 全局 `boweser` 对象由 **Protractor** 创建, 用于创建浏览器级别的命令如 `browser.get`

- lesson-3: 官方 tutorial step 1 与元素的互动

> `element` 和 `by` 由 Protractor 创建,
>> `element` 方法用于在页面查找 html 元素,它将返回一个 ElementFinder 对象,它可以用来与 元素 交互或者从它得到的信息.  

- lesson-4: tutorial step 2 多场景
- lesson-5: 元素列表















- - -
