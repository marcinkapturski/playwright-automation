const { join } = require('path');

exports.config = {
  runner: 'local',
  port: 4723,
  path: '/wd/hub',
  specs: [
    './tests/**/*.js'
  ],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      platformName: 'Android',
      'appium:platformVersion': '15.0',
      'appium:deviceName': 'emulator-5554',
      'appium:automationName': 'UIAutomator2',
      'appium:appPackage': 'com.wdiodemoapp',
      'appium:appActivity': 'com.wdiodemoapp.SplashActivity',
      'appium:app': join(process.cwd(), './apps/android/Android-NativeDemoApp-0.4.0.apk'),
      'appium:autoGrantPermissions': true
    }
  ],
  logLevel: 'info',
  bail: 0,
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  specs: [["../tests/mobile/**"]],
  services: [
    ['appium', {
      args: {
        address: 'localhost',
        port: 4723
      },
      logPath: './'
    }]
  ],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
