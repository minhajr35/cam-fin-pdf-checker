require('dotenv').config();
const { assert } = require('assert').strict;
const { fstat } = require('fs');
const { resolve } = require('path');
const {Builder, By, Key, until, WebElement, WebDriver} = require('selenium-webdriver');
//const driver = new Builder().forBrowser("chrome").build();




//declaring variables so it will be easier to manipulate data later on:

//---------------------Login Process-------------------------------
const URL =process.env.TEST_URL
const userName = process.env.AD_USER_NAME;
const userPass = process.env.AD_USER_PASSWORD;
//-----------------------------------------------------------------

var docketNumber = "12DB-REF-S9VDFE"
var hearingDate = "01/27/2023"
var sessionTime = "1PM"
var scheduleType = "Hearing"





async function example(){


let driver = await new Builder().forBrowser('chrome').build();

try {
    await driver.get(URL);
    await driver.manage().window().maximize();

    while (true) {
        await driver.manage().setTimeouts( { implicit: 10000 } );
await driver.findElement(By.xpath("//button[normalize-space()='Sign in']")).click();
await driver.manage().setTimeouts( { implicit: 10000 } );
await driver.findElement(By.xpath("//input[@id='signInName']")).sendKeys(userName);
await driver.findElement(By.xpath("//input[@id='password']")).sendKeys(userPass);
await driver.findElement(By.xpath("//button[@id='next']")).click();
    }
    
} finally {
    await driver.quit();
}
}

example();