const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome'); // Import Chrome-specific modules
const assert = require('assert');
const { Builder } = require('selenium-webdriver');



describe('One minus one', function() {
  this.timeout(30000);
  let vars;

  let driver = new Builder()
    .forBrowser('chrome')
    .setChromeService(new chrome.ServiceBuilder('/usr/local/bin/chromedriver'))
    .build();

  afterEach(async function() {
    // Quit the WebDriver after each test
    if (driver) {
      await driver.quit();
    }
  });

  it('One minus one', async function() {
    await driver.get("http://localhost:8000/src/");
    await driver.manage().window().setRect({ width: 1552, height: 832 });
    await driver.findElement(By.id("num1")).click();
    await driver.findElement(By.id("num1")).sendKeys("1");
    await driver.findElement(By.id("num2")).click();
    await driver.findElement(By.id("num2")).sendKeys("1");
    await driver.findElement(By.css("button:nth-child(2)")).click();
  });
});