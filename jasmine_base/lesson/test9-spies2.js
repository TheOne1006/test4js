describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar');
  });

  it("追踪 方法是否在任何情况下调用过", function() {
      //  foo.setBar 没有以任何方式调用过
      expect(foo.setBar.calls.any()).toEqual(false);

      foo.setBar();

      // foo.setBar() 调用一次后返回 true
      expect(foo.setBar.calls.any()).toEqual(true);
    });

  it("追踪函数调用次数", function() {
     expect(foo.setBar.calls.count()).toEqual(0);

     foo.setBar();
     foo.setBar();

     expect(foo.setBar.calls.count()).toEqual(2);
   });


  it("追踪调用参数", function() {
    foo.setBar(456, "baz");
    foo.setBar(123);

    // 对应 calls.argsFor(0) => foo.setBar(456, "baz");
    expect(foo.setBar.calls.argsFor(0)).toEqual([456, "baz"]);
    expect(foo.setBar.calls.argsFor(1)).toEqual([123]);
  });

});
