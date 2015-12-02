/**
 * 测试双重功能称为间谍
 *
 * 1. spy 可以存储 方法和 调用参数
 * 2. spy 只存在与 describe 和 it 的作用下
 * 3. 测试两面都影响的spies
 *
 * toHaveBeenCalled() 匹配这个 spy 是否调用过
 * toHaveBeenCalledWith() 匹配这个 spy 调用过以及 以相同的参数
 *
 */

describe("A spy", function() {
  var foo, bar = null,baz;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      setBaz: function (val) {
        baz = val;
      }
    };

    // 设置 foo 的 setBar 开启spy
    spyOn(foo, 'setBar');
    spyOn(foo, 'setBaz');

    /**
     * 调用setBar,已经相关参数
     * 没有实际调用
     */
    foo.setBar(123);
    foo.setBar(456, 'another param');
  });

  it("函数/方法是否被调用过", function() {
    expect(foo.setBar).toHaveBeenCalled();
    expect(foo.setBaz).not.toHaveBeenCalled(); // 没有调用过
  });

  it("tracks all the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });

  it("stops all execution on a function", function() {
    expect(bar).toBeNull();
  });
});


describe("A spy, 配置真实调用", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, 'getBar').and.callThrough();

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it("tracks 判断是否被调用", function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not affect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(123);
  });
});



describe("A spy,真实执行 伪装一个返回值", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, "getBar").and.returnValue(745);

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it("tracks 是否调用", function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not affect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(745);
  });
});




describe("A spy,返回一个函数替代返回值", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, "getBar").and.callFake(function() {
      return 1001;
    });

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it("tracks that the spy was called", function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not affect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value,与伪装返回值做对比", function() {
    expect(fetchedBar).toEqual(1001);
  });
});


describe("A spy, when configured to throw an error", function() {
  var foo, bar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    /**
     * 伪装一个错误输出
     */
    spyOn(foo, "setBar").and.throwError("quux");
  });

  it("throws the value", function() {
    expect(function() {
      foo.setBar(123);
    }).toThrowError("quux");
  });
});


describe("A spy, 测试 spy的 stub", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar').and.callThrough();
  });

  it("can call through and then stub in the same spec", function() {
    foo.setBar(123);
    expect(bar).toEqual(123);

    // 断开与原型的链接, 之后相当与 没有增加 callThrough()
    foo.setBar.and.stub();
    bar = null;

    // 恢复至模拟的最初心态
    foo.setBar(123);
    expect(bar).toBe(null);
  });
});
