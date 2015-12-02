describe('测试分组', function () {

  /**
   * 通过describe 进行分组
   */
  describe('测试A组', function () {

    it('测试A-1',function(){
      expect(true).toBe(true);
    });
  });


  describe('测试B组', function () {

    it('测试B-1',function(){
      expect(true).toBe(true);
    });
  });
});
