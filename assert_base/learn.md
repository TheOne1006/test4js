## assert 断言库

#### 基本方法

单词描述:  
- actual 实际值
- expected 期望值
- operator 分隔符
- message 实际不满足期望,会抛出 message 信息
- block 用于抛出错误

```js
assert(value[, message])
assert.ok(value[, message])
assert.deepEqual(actual, expected[, message])
assert.deepStrictEqual(actual, expected[, message])
assert.throws(block[, error][, message])
assert.doesNotThrow(block[, error][, message])
assert.equal(actual, expected[, message])
assert.fail(actual, expected, message, operator)
assert.ifError(value)
assert.notDeepEqual(actual, expected[, message])
assert.notDeepStrictEqual(actual, expected[, message])
assert.notEqual(actual, expected[, message])
assert.notStrictEqual(actual, expected[, message])
assert.strictEqual(actual, expected[, message])
```

#### assert() 等同于 assert.ok()
- 等同于 `assert.equal(true, !!value, message);`
- 检测值是否为真

### assert.deepEqual()
1. 期望对象, 实际对象,自身属性一一对比
2. 不同对象,但是相同属性, 可以通过
3. 多层对比
4. 使用`==`

### assert.deepStrictEqual()
与 `assert.deepEqual` 的差别是使用 `===` 模式

### assert.throws(block, [error], [message])

1. block 用于抛出 error
2. error 可以是一个 error 的构造函数, 也可以是正则表达式

### assert.doesNotThrow

与 `assert.throws` 相反不抛出错误

### assert.equal && assert.notEqual

- 期望对象 与 实际对象 使用`==`进行相等判断
- 与`assert.deepEqual` 差异:
  - `equal` 对比整个对象,
  - `assert.deepEqual` 对比对象的属性

### Equal 系列

- assert.deepEqual: 深度匹配测试
- assert.notDeepEqual
- assert.strictEqual: 使用 `===`
- assert.notStrictEqual: 使用`!==`














- - -
