// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const { Builder } = require('selenium-webdriver');



describe('Click equal with an empty screen', function() {
  this.timeout(30000)
  let vars

  let driver = new Builder()
    .forBrowser('chrome')
    .setChromeService(new chrome.ServiceBuilder('/usr/local/bin/chromedriver'))
    .build();

  afterEach(async function() {
    await driver.quit();
  })
  it('Click equal with an empty screen', async function() {
    await driver.get("http://localhost:8000/")
    await driver.manage().window().setRect(1051, 797)
    await driver.findElement(By.linkText("src/")).click()
    await driver.findElement(By.css("body")).click()
    await driver.findElement(By.css("button:nth-child(2)")).click()
  })
})
