const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome'); // Import Chrome-specific modules
const assert = require('assert');

describe('One minus one', function() {
  this.timeout(30000);
  let driver;
  let vars;

  beforeEach(async function() {
    // Configure Chrome options
    const options = new chrome.Options()
      .addArguments('--headless')
      .addArguments('--no-sandbox')
      .addArguments('--disable-dev-shm-usage')
      .addArguments('--remote-debugging-port=9222'); 

    try {
      // Initialize the Chrome WebDriver
      driver = await new Builder()
        .forBrowser('chrome') // Use 'chrome' as the browser
        .setChromeOptions(options) // Set Chrome-specific options
        .build();
      vars = {};
    } catch (error) {
      console.error("Failed to initialize WebDriver:", error);
      throw error;
    }
  });

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
