'use strict';

var app = require('../../app');
var assert = require('assert');
var request = require('supertest');

describe('http.blog', function() {

  var post = {
    title: 'title',
    text : 'content',
    tags : ['tag1']
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

  describe('POST /blogs/', function () {
    it('测试一个文章', function (done) {
      request(app)
        .post('/api/blogs/')
        .send(post)
        .expect(201, function (err, res) {
          post.id = res.body.id;
          assert.deepEqual(post, res.body);
          done();
        });
    });
  });

  describe('PATCH /blogs/:id', function() {
    it('测试更新一个 title', function (done) {
      request(app)
        .patch('/api/blogs/'+post.id)
        .send({'title':'new title'})
        .expect(200, function (err, res) {
          if(err) {
            assert.fail(err);
          }
          assert.equal('new title', res.body.title);
          post.title = res.body.title;
          done();
        });
    });
  });

  describe('GET /blogs/:id', function () {
    it('测试是否更新成功', function (done) {
      request(app)
        .get('/api/blogs/'+post.id)
        .expect(200, function (err, res) {
          if(err) {
            assert.fail(err);
          }
          assert.deepEqual(res.body, post);
          done();
        });
    });
  });

  describe('DELETE /blogs/:id', function () {
    it('测试通过id 删除文章', function (done) {
      request(app)
        .delete('/api/blogs/'+post.id)
        .expect(200, done);
    });

    it('测试是否删除成功', function (done) {
      request(app)
        .get('/api/blogs/'+post.id)
        .expect(204, done);
    });
  })


});
