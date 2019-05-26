const { Builder } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox")
const options = new firefox.Options();

options.setPreference("browser.download.dir", "D:\\AUTOMATION");
options.setPreference("browser.download.folderList", 2);
options.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/octet-stream");

const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();

driver.get("http://insight.dev.schoolwires.com/HelpAssets/C2Assets/C2Files/C2ImportCalEventSample.csv");