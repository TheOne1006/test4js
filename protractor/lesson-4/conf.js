// conf.js
/**
 * 配置通知 Protractor 测试文件 `spec.js`
 * 以及 Selenium Server 的地址 http://localhost:4444/wd/hub
 * 使用 Jasmine 测试框架
 * 其他使用默认配置
 * Chrome 属于默认浏览器
 *
 */
/**
 * 启动命令: protractor conf.js
 */
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js']
}
