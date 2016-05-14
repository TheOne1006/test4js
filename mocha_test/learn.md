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

1. suite 组件级别
2. Test 级别





- - - -
