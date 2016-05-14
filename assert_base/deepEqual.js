'use strict';

var assert = require('assert');

var obj1 = {
  a : 1
};

var obj2 = {
  a : 1
};

var obj3 = {
  a : {
    b : 3
  }
};

var obj4 = {
  a : {
    b : 3
  }
}

// obj5 原型为 obj1
var obj5 = Object.create(obj1);

assert.deepEqual(obj1, obj2 ,'不同对象但是相同属性的结果');
assert.deepEqual(obj3, obj4 ,'对比深度不止一层');

console.log(obj5.a); // 可以获取 a 属性

// 报错, obj5 为 {}
assert.deepEqual(obj5.__proto__, obj1);


var obj6 = {
  a: 1
};

var obj7 = {
  a: true
};

assert.deepEqual( obj6, obj7, '是否使用== 模式');






// -
