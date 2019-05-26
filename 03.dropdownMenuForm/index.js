const { Builder, By } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build();

async function dropdownForm() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form");
        const select1 = await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button"));
        await select1.click();
        await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
        await driver.findElement(By.xpath("//nb-option[@value='2']")).click();
        await select1.click();
        await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="0: 'volvo'"]`)).click();
        await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="2: 'opel'"]`)).click();
        await driver.findElement(By.xpath("//nb-select[@formcontrolname='select3']/button")).click();
        await driver.findElement(By.xpath("//nb-option[@value='2']")).click();
        await driver.findElement(By.xpath("//select[@formcontrolname='select4']")).click();
        await driver.findElement(By.xpath("//select[@formcontrolname='select4']/option[@value='opel']")).click();
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        console.log(error);
    }
}

dropdownForm(); 