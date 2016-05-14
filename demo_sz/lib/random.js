'use strict';

/**
 * random utilities
 * @module random
 */


/**
 * 根据 len 生成指定整数随机数
 */
exports.digits = function (len) {
  if(typeof len !== 'number') {
    throw new Error('invalid arguments');
  }

  var bufs = [];
  var collection = '0123456789';

  for (var i = 0; i < len; i++) {
    bufs.push(
      collection.charAt(Number( Math.random() * collection.length ))
    );
  }

  return bufs.join('');
}
