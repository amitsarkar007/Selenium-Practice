const { Builder, By } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build();

async function datePickerForm() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys("Jun 6, 2019");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys("May 23, 2019 - Aug 15, 2019");
        await driver.findElement(By.id("submit")).click();
    } catch (error) {
        console.log(error);
    }
}

datePickerForm(); 