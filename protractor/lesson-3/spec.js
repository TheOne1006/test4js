// spec.js
describe('Protractor Demo App', function() {
  it('should add one and two', function() {
    // 浏览器打开网页
    browser.get('http://juliemr.github.io/protractor-demo/');
    /**
     * by.model('first') 查找 ng-model="first" 的元素
     * element() 返回 ElementFinder, 用于获取 element 信息或交互
     * sendKeys(1) 键盘输入 1 到 input 里
     */
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    /**
     * by.id('gobutton')
     * 匹配到 <button id="gobutton">
     * click() 点击按钮
     */
    element(by.id('gobutton')).click();

    /**
     * by.binding('latest')
     * 匹配 {{latest}}
     */
    expect(element(by.binding('latest')).getText()).
        toEqual('5'); // This is wrong!
  });
});
