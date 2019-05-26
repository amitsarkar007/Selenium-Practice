const { Builder, By } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build();

async function radioButtonForm() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
        await driver.findElement(By.css("#title")).sendKeys("Title Title Title Title");
        await driver.findElement(By.css("#description")).sendKeys("Description Description");
        await driver.findElement(By.css("div:nth-child(2) > label > span.custom-control-indicator")).click();
        await driver.findElement(By.css("#submit")).click();
    } catch (error) {
        console.log(error);
    }
}

radioButtonForm();