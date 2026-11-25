const { Builder, By } = require('selenium-webdriver');
const path = require('path');

(async () => {
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.get('file:///' + path.join(__dirname, 'RF.html'));

    await driver.findElement(By.id('name')).sendKeys('Student');
    await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
    await driver.findElement(By.id('phone')).sendKeys('9876543210');
    await driver.findElement(By.id('gender')).sendKeys('Male');
    await driver.findElement(By.id('event')).sendKeys('Hackathon');
    await driver.findElement(By.css('button')).click();

    console.log(await driver.findElement(By.id('message')).getText());
    await driver.quit();
})();