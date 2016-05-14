'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var random = require('./lib/random');
var app = express();
var prefix = '/api'; // 前缀
var tables = {};

/**
* createModel 函数, 模拟定义模型, 模拟数据库交互
*/
function createModel( name ) {
  // 加载对应 model
  var model = require('./models/' + name + '.js');
  var createValide = function (inputs, output) {
      return function valid(key) {
        // inputs[key] 不继承与 Model 指定的数据类型 或 值的 typeof 与 设置的 type 一不致
        // 并且不为空
        if( !(inputs[key] instanceof model[key] ||
          typeof inputs[key] === model[key].name.toLowerCase()) &&
          inputs[key]) {
            return new Error('invalid type on: ' + key);
          } else if(inputs[key]){
            output[key] = inputs[key];
          }
      }
  };

  var createRespondor = function (errs, input) {
    if(errs.length > 0) {
      return function badRequest( res ) {
        res.status(422).end(errs.join(', '));
      }
    } else {
      return function ok(res, code) {
        if( !input.id) {
          input.id = random.digits(10);
        }
        tables[name][input.id] = input;
        res.status(code || 200).json(input);
      }
    }
  };


  tables[name] = [];

  app.get(prefix + '/' + name + 's', function (req, res) {
    res.send(tables[name]);
  });
  app.post(prefix + '/' + name + 's', function (req, res) {
    var data = {};
    var errs = Object
      .keys(model)
      .map(createValide(req.body, data))
      .filter(function(item){ return !!item; });

    createRespondor(errs, data)(res, 201);
  });

  app.get(prefix+'/'+name+'s/:id', function (req, res) {
    var record = tables[name][req.params.id];
    if(record) {
      res.status(200).json(record);
    } else {
      res.status(204).end();
    }
  });

  app.patch(
    prefix+'/'+name+'s/:id',
    function (req, res) {
      var record = tables[name][req.params.id];
      if(record) {
        var errs = Object
          .keys(model)
          .filter(createValide(req.body, record));

        createRespondor(errs , record)(res, 200);
      } else {
        res.status(404).end();
      }
    }
  );

  app.delete(
    prefix+'/'+name+'s/:id',
    function (req, res) {
      delete tables[name][req.params.id];
      res.status(200).end();
    }
  );

}

app.use(bodyParser.json());


createModel('blog');




var port = process.env.PORT || 3000;

/**
 * module.parent 判断文件是否被引用,被引用则导出 app 已供测试
 */
if(process.env.NODE_ENV === 'test' && module.parent) {
  module.exports = app;
} else {
  app.listen(port, function () {
    console.log('app start at port: %s', port);
  });
}
