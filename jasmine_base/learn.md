## jasemine 基础 FOR NODE

### Installation 安装

```
npm install -g jasmine
```


### Initializing 初始化

初始化一个jasmine项目  

```bash
jasmine init
```

当前目录以下创建了  

```path
|- spec (翻译: 规格/说明)
  |- support (翻译:支持)
     |- jasmine.json (配置文件)
```


##### jasmine.json 简介 ??

```json
{
  "spec_dir": "spec", // 规格路径,支持相对路径使用
  "spec_files": [     // 执行的文件
    "**/*[sS]pec.js"
  ],
  "helpers": [        // 暂时没懂??
    "helpers/**/*.js"
  ]
}
```

在当前目录下执行`jasmine`,会自动找到 `./spec/support/jasmine.json`.然后执行配置  
当然也可以直接通过 `jasmine path/to/test.js`  


创造一些案例  

```bash
jasmine examples
``` 

当前目录下创建了一些案例




##### 语法

一个简单的案例
```
// 一个测试套件的开始是由全局函数
describe('套件的名称或标题', function(){
    /*测试代码块*/
    规格中还定义了全局方法,类似与describe方法 
    it('string', function(){
       /*期望*/
       expect(matcherValue).toBe(期望值);
    })

});

describe("功能描述", function() {
  it("contains spec with an expectation", function() {

    expect(true).toBe(true);
  });
});
```

具体语法参照lesson1/*

##### spy
1. spy 还是不太懂是用来干嘛的
