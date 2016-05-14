'use strict';

var app = require('../../app');
var assert = require('assert');
var request = require('supertest');

describe('http.blog', function() {

  var post = {
    title: 'title',
    text : 'content',
    tags : 'tag1'
  };

  describe('GET /blogs/', function() {
    it('初始访问返回一个空对象', function (done) {
      request(app)
        .get('/api/blogs/')
        .expect(200, function (err, res) {
          assert.deepEqual(res.body, {});
          done(err);
        });
    });
  });

});
