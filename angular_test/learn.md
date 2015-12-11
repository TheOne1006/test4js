### 前置指示

#### angular-mocks

`ngMock`模块提供支持注入和模拟Angular的单元测试,`ngMock`也扩展各种核心服务,这样他们可以检查和控制以同步的方式在测试代码.

安装  
```
bower install angular-mocks --save-dev
```


#### angular_test 目录结构

lesson* 
| -app (模拟项目目录)
| -test (测试代码目录)



#### fist demo

目录:'lesson0'  

新增 两个方法`module` And `inject`  

- `module` 用来初始化模块。这个方法的功能类似于 `ng-app` 指定，指示要为指定的模块创建好 $injector ，模块中的服务应该准备好。
  你可以在一个测试用例中，调用多次 module 方法，之后，所有模块中的 service、value 和 constant 都可以通过 $injector 获取。

- inject 注入服务.
  我们这里使用__带有头尾下划线__对的服务名称来注入相应的服务。这是因为 $injector 会先剥去收尾的下划线对，然后使用服务名来接受注入的服务。这是很有用的小窍门，因为我们可以保存没有下划线的服务变量。
  

#### second demo

目录: 'lesson1'  
使用`angular.mock.module` And `angular.mock.inject`  

#### third demo

目录: 'lesson2'  
查看[phonecat](https://github.com/angular/angular-phonecat) 代码,使用 全局的`module` 和 `inject` 所以试着使用 `module` 和 `inject`  


```
scope = $rootScope.$new();  // 通过创建一个新的作用域


 $controller('itemCtrl', {$scope: scope}); // 创建一个 itemCtrl 的controller 使用 scope 作为作用域

```

#### fourth demo

目录: 'lesson3'  
使用spy方式测试代码

```
// 添加 sype,正常执行
spyOn(ItemService, 'list' ).and.callThrough();
```



#### fifth demo

目标: 'lesson4'  
使用angular-mocks 中AngularJs就会让调用 $httpService 时,并不真正的发生服务器调用.所有服务器调用都被拦截.  

```
// 模拟 http返回的前置信息
beforeEach(inject(function ($httpBackend) {

  mockBackend = $httpBackend;

  mockBackend
    .expectGET( './data/user.json' )
    .respond( '返回数据' );
}));


/**
 * scope.user 是存放 ajax 返回数据的地方
 * 需要使用 $httpBackend.flush() 模拟响应
 */
expect(scope.user).toBe('');
mockBackend.flush();
expect(scope.user).toEqual(mockHttpObj);

```

测试 `ng-resource`  


#### sixth demo

目标: 'lesson5'  
测试过滤器  

