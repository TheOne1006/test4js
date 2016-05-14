# TEST FOR JS
js 测试之路  
环境均为_Node.js_  

以下为测试工具的简介:  

1. **Jasmine**:一个行为驱动测试JavaScript代码的开发框架,不依赖任何js框架.不需要DOM.
2. **Karma**: 让测试代码跑在真正的浏览器,支持多个浏览器
3. **Protractor**:
4. **mocha**: Tj大神之作



## 测试风格
1. 风格区别
  - TDD(测试驱动开发)
  - BDD(行为驱动开发)
2. TDD 与 BDD 的差异
  - 关注点不同:
    1. TDD 关注 **所有功能是否被正确实现**, 每个功能都具备对应的测试用例
    2. BDD 关注 **整体行为是否符合预期**, 合适自顶向下的设计方式
  - 表达方式不同:
    1. TDD的表述方式偏向于 **功能说明书** 的风格
    2. BDD 偏向于 **自然语言**
3. BDD 测试
  - 采用describe 和 it 进行组织
  - 提供钩子方法: `before`, `after`, `beforeEach` 和 `afterEach`



## 说明

个人学习js测试学习欢迎指正,英语仅停留在阅读url水平


### 个人学习顺序

1. jasemine_base
2. karma_base
3. angular_test
4. mocha_base

- - - - -

## Jasmine

- Jasmine 茉莉花
- 官网地址:<http://jasmine.github.io>
- GITHUB地址: <https://github.com/jasmine/jasmine>
- 当前使用版本: 2.3

### Karma

- Karma 因果报应(佛)
- 官网地址: <https://karma-runner.github.io/>
- GITHUB地址: <https://github.com/karma-runner/karma>
- 当前版本: 0.13.15

### Angular_test

- AngularJS
- 官网

### mocha
mocha - simple, flexible, fun javascript test framework for node.js & the browser

- 抹茶
- 官网地址: <http://mochajs.org/>
- GITHUB 地址 <https://github.com/mochajs/mocha>

### demo
单元测试实战
