## mocha 基础 FOR NODE
提供一套测试框架,可用于 Node.js 和 浏览器

目的:  
1. 熟悉使用mocha测试 Node.js
2. gulp 结合
3. 实践
4. koa 中使用 co-mocha

### 灵活性

1. `assertion`模块
2. 允许 `should.js`, `chai.js` 等扩展

### Installation 安装


```bash
# 全局安装
$ npm install -g mocha
```

## start 官网demo

项目地址:  
<rootPath>/mocha_test/lesson-1

```bash
# 完成代码后在　<rootPath>/mocha_test/lesson-1　目录下执行
mocha
```

## TDD / BDD 风格


### 生成测试 报告

```bash
$ mocha --reporters

$ mocha -R <reporter> > 目标地址
```

### 异步测试



### Hooks 钩子 lesson-3
1. `before` ,`beforeEach`
2. 钩子中的延迟测试方法
3. 根组件的延长执行 - `run`


### Pending Tests 待测试 lesson-4

标记一个待测试的 任务

### Exclusive Tests 独家测试 lesson-4

```js
it.only('独家测试', function(){
    // 独家测试执行 相同层级的测试将不会执行
});
```

### Inclusive Tests 包容测试 lesson-4

```js
it.skip('描述', function() {});
```

### Retry Tests 重复测试 lesson-4

```
this.retries(4);
```


### Test duration  测试期限 lesson-5

结果会提示 较为缓慢的 测试组件, 通过 `this.slow( 毫秒)`这是缓慢的范围

### Timeout 超时 lesson-5
`this.timeout(毫秒)` 设置超时标识

1. suite 组件级别
2. Test 级别

### Diff 差异对比




### Mocha command arguments

`mocha` 命令参数:  

1. `--recursive` 递归
  - Mocha默认只执行test子目录下面第一层的测试用例
  - 就必须加上`--recursive`参数, 这时test子目录下面所有的测试用例 (不管在哪一层都会执行)
2. `--help` 或 `-h` 帮助
  - 查看Mocha的所有命令行参数
3. `--reporter` 或 `-R`
  - 指定测试报告的格式，默认是spec格式
  - 更多格式 <http://mochajs.org/#reporters>
  - `JSONCov`, `HTMLCov` 需要  node-jscoverage 库
  - `mochawesome` 额外安装 相关库
4. `--growl, -G`
  - 将测试结果在桌面显示 ??
5. `--watch，-w`
  - 只要测试脚本有变化，就会自动运行Mocha
6. `--bail, -b`
  - 只要有一个测试用例没有通过，就停止执行后面的测试用例
  - 对持续集成很有用
7. `--grep, -g`
  - 搜索测试用例的名称(即it块的第一个参数), 然后只执行匹配的测试用例
8. `--invert, -i`
  - 必须与`--grep`参数配合使用
  - 只运行不符合条件的测试脚本
9. `--timeout, -t`
  - 超时时间
10. `-slow, -s`
  - 显示超过 slow 的测试案例事件

## ES6

需要先用Babel转码  

```bash
npm install babel-core babel-preset-es2015 --save-dev
```

新建一个`.babelrc`配置文件  

```json
新建一个.babelrc配置文件
```

使用 `--compilers` 参数指定测试脚本的转码器

```bash
$ ../node_modules/mocha/bin/mocha --compilers js:babel-core/register
```
上面代码表示，运行测试之前，先用babel-core/register模块，处理一下.js文件

- `--compilers`参数后面紧跟一个用冒号分隔的字符串  
  - 冒号左边是文件的后缀名 , 案例( js )
  - 右边是用来处理这一类文件的模块名, 案例(babel-core/register)











- - -


- - - -
