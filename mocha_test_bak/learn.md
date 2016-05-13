## mocha 基础 FOR NODE

1. `assertion`模块


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


### Pending Tests

```js
describe('Array', function() {
  describe('#indexOf()', function() {
    /**
     * 测试结果会展示和统计
     * 这是一个待测试的信息
     */
    it('should return -1 when the value is not present');
  });
});
```


- - - -
