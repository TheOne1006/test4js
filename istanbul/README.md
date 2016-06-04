## istanbul

js 代码覆盖率 工具  


### with mocha

```bash
# 安装一个 istanbul :
$ npm i istanbul -g

# 执行
$ istanbul cover _mocha
```

> **注意**
    mocha 和 istanbul 的结合是相当无缝的，只要 mocha 跑得动，那么 istanbul 就接得进来。
    mocha 和 istanbul 版本依赖的问题,为避免全局版本问题,使用 本地版本


### 配置文件 `.istanbul.yml`




输出结果:  

```bash
test/main.test.js
  ✓ should equal 0 when n === 0
  ✓ should equal 1 when n === 1
  ✓ should equal 55 when n === 10
  ✓ should throw when n > 10
  ✓ should throw when n < 0
  ✓ should throw when n isnt Number


6 passing (14ms)

=============================================================================
Writing coverage object [/Users/theone/theone/node_data/test4js/istanbul/withMocha/coverage/coverage.json]
Writing coverage reports at [/Users/theone/theone/node_data/test4js/istanbul/withMocha/coverage]
=============================================================================

=============================== Coverage summary ===============================
Statements   : 100% ( 13/13 )
Branches     : 100% ( 10/10 )
Functions    : 100% ( 1/1 )
Lines        : 100% ( 13/13 )
================================================================================
```
























- - -
