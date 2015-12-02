/**
 * toBe 相当  ===
 */

describe('测试匹配方法', function () {


  /**
   * 在控制台整个 it 是一个结果
   * 算一个spec
   */
  it("toBe的匹配是 === ", function() {
    var num = 1;
    var stringOne = '1';
    expect(num).not.toBe(stringOne);

    var match = (num == stringOne);
    expect(match).toBe(true);
  });


  it("也可以对比对象", function() {
    var foo = {
      a: 12,
      b: 34
    };
    var bar = {
      a: 12,
      b: 34
    };
    expect(foo).toEqual(bar);
  });


  it('测试正则表达式', function(){

    var message = "foo bar baz";

    /**
     * 匹配 支持正则,支持字符串
     */
    expect(message).toMatch(/bar/);
    expect(message).toMatch("bar");
    expect(message).not.toMatch("barl");
  });


  it('toBeDefined是否被定义', function(){

    var a = {
      foo:'foo'
    };

    // a.foo 已经定义
    expect(a.foo).toBeDefined();

    // a.bar 未定义
    expect(a.bar).not.toBeDefined();
  });


  it('toBeUndefined是否为undefined', function(){

    var a = {
      foo:"foo"
    };

    expect(a.bar).toBeUndefined();
  });



  it('toBeNull 判断是否为 null', function(){

    var a = null;
    var foo = 'foo';

    expect(a).toBeNull();
    expect(foo).not.toBeNull();
  });



  it("toBeTruthy 判断是否为真", function(){

    var a, foo = "foo";

    expect(foo).toBeTruthy();
    expect(a).not.toBeTruthy();
  });

  it("toBeFalsy 判断是否为假", function(){
    var a, foo ="foo";

    expect(a).toBeFalsy();
    expect(foo).not.toBeFalsy();
  });


  it("toContain 判断是否包含某值", function(){
    var arr = ["foo","bar","baz"];

    expect(arr).toContain("foo");
    expect(arr).not.toContain("fo1");
  });

  it("toBeLessThan 判断是否小于某值", function(){
    var pi = 3.14,
      e = 2.78;
    expect(e).toBeLessThan(pi);
    expect(pi).not.toBeLessThan(e);
  });

  it("toBeGreaterThan 判断是否大于某值", function() {
      var pi = 3.1415926,
        e = 2.78;

      expect(pi).toBeGreaterThan(e);
      expect(e).not.toBeGreaterThan(pi);
  });

  // 没看懂
  it("The 'toBeCloseTo' matcher is for precision math comparison", function() {
    var pi = 3.1415926,
      e = 2.78;

    expect(pi).not.toBeCloseTo(e, 2);
    expect(pi).toBeCloseTo(e, 0);
  });

  it("toThrow 判断是否有 异常抛出 exception throw", function(){
    var foo = function (){
      return 1+2;
    };

    var bar = function (){
      return a+b;
    };

    expect(foo).not.toThrow();
    expect(bar).toThrow();
  });


  it("The 'toThrowError' matcher is for testing a specific(具体) thrown exception", function() {
     var foo = function() {
       throw new TypeError("foo bar baz");
     };

     expect(foo).toThrowError("foo bar baz");
     expect(foo).toThrowError(/bar/);
     expect(foo).toThrowError(TypeError);
     expect(foo).toThrowError(TypeError, "foo bar baz");
   });






});
