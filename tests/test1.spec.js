// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Test1', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('edge').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Test1', async function() {
    await driver.get("http://localhost:8000/src/")
    await driver.manage().window().setRect(1061, 812)
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("1")
    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("1")
    await driver.findElement(By.css("button:nth-child(1)")).click()
  })
})
