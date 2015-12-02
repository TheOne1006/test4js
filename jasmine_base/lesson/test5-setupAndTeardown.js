/**
 * SetUp and Teardown
 *
 * 测试数据的初始化和销毁
 * jasmine 提供 4个全局方法
 */


describe('setUp and Teardown', function () {

  var galfoo = 0;

  it('前 - 外层galfoo', function () {
    expect(galfoo).toBe(0);
  });


  describe('useing beforeEach and afterEach', function () {
    /**
     * describe内 每个 it 前执行 优先执行 beforeEach
     */
    beforeEach(function () {
      galfoo++;
    });

    /**
     *  describe内 所有spec执行完成之后执行 afterEach
     */
    afterEach(function(){
      galfoo = 0;
    });

    it('内层galfoo', function () {
      expect(galfoo).toBe(1);
    });

  });

  it('后 - 外层galfoo', function () {
    expect(galfoo).toBe(0);
  });


  /**
   * beforeAll/afterAll 所有 之前都会执行
   */

  var galbar;

  beforeAll(function () {
    galbar = 1;
  });

  afterAll(function(){
    galbar = 0;
  });


  it('外 所有断言之前都执行了beforeAll', function () {
    expect(galbar).toBe(1);
  });

  describe('using beforeAll and afterAll', function () {

    it('内 所有断言之前都执行了beforeAll', function () {
      expect(galbar).toBe(1);
    });

  });



});


