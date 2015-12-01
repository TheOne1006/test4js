describe('spec 失败回调函数', function(){

  var foo = function(x, cb){
    if(x) {
      cb();
    }
  };

  it('调用失败方法',function(){

    foo(false, function(){
      fail('这是一个失败回调函数');
    });

    foo(true, function(){
      /**
       * 会使得整个spec 失败
       */
      fail('这是一个失败回调函数');
    });

  });


  it('调用失败方法2',function(){

    foo(false, function(){
      fail('这是一个失败回调函数');
    });


  });



});
