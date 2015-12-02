xdescribe("A spec 这里免的测试不会被执行因为他们已经被禁止实用了", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  it("测试 xdescribe", function() {
    expect(foo).toEqual(21111);
  });
});


describe('A spec 中 xit 里的 代码也不会被执行',function () {

  it('这是一个正常的测试', function () {
    expect(1).toBe(1);
  });


  /**
   * 公开全部这是一个未解决/待解决的 spec ,在结果可以显示
   */
  xit('这是一个被关闭的测试', function () {
    expect(0).toBe(2222);
  });
});
