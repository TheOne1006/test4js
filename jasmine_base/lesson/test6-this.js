/**
 * 关键字 this
 * 还有一种方式分享变量,就是 在 beforeEach , it , afterEach 通过 this 关键字访问
 * beforeEach, it, afterEach 可以像实用空对象一样实用 this 对象
 */


describe('use this in beforeEach, it, afterEach ', function () {

  // share var
  beforeEach(function () {
    this.myvar = '1';
  });

  afterEach(function(){
    this.myvar = '0';
  });


  it('测试this 分享变量', function () {
    expect(this.myvar).toEqual('1');
  });
});

