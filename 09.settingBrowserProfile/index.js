const { Builder } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox")
const options = new firefox.Options();

options.setProfile("./SeleniumTutorial");

const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();

driver.get("https://www.google.com");