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

var docketNumber = "35OD-REF-6GBM0I"
//var hearingDate = "04/24/2023"

var currentDate = new Date();
var hearingDate = new Date();
hearingDate.setDate(currentDate.getDate() + 7);  //---

var month = hearingDate.getMonth() + 1;
var day = hearingDate.getDate();
var year = hearingDate.getFullYear();
hearingDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;




var sessionTime = "1PM"
var scheduleType = "Hearing"





describe("TRB AUTOMATED - Test Started", function(){




it("TRB AUTOMATED - Test Ran Successfully", async function(){

    

let driver = new Builder().forBrowser('chrome').build();
await driver.get(URL);
await driver.manage().window().maximize();


await driver.manage().setTimeouts( { implicit: 10000 } );
await driver.findElement(By.xpath("//button[normalize-space()='Sign in']")).click();
await driver.manage().setTimeouts( { implicit: 10000 } );
await driver.findElement(By.xpath("//input[@id='signInName']")).sendKeys(userName);
await driver.findElement(By.xpath("//input[@id='password']")).sendKeys(userPass);
await driver.findElement(By.xpath("//button[@id='next']")).click();





//await driver.quit();
await driver.manage().setTimeouts( { implicit: 10000 } );
await driver.findElement(By.xpath("//a[normalize-space()='Scheduler']")).click();
await driver.findElement(By.xpath("//a[normalize-space()='Scheduler']")).sendKeys(Key.TAB);
await driver.findElement(By.xpath("//a[normalize-space()='Scheduler']")).sendKeys(Key.TAB);
await driver.findElement(By.xpath("//a[normalize-space()='Scheduler']")).sendKeys(Key.TAB);
await driver.findElement(By.xpath("//div[@class='control is-large']//input[@placeholder='Type keywords']")).sendKeys(docketNumber,Key.ENTER);
await driver.manage().setTimeouts( { implicit: 10000 } );
await driver.findElement(By.xpath("//a[normalize-space()='Schedule']")).click();



await driver.manage().setTimeouts( { implicit: 10000 } );
await driver.findElement(By.xpath("//div[@class='control is-large']//input[@placeholder='MM/DD/YYYY']")).sendKeys(hearingDate);


//const sleep = (ms) => new Promise((resolve) => setTimeout (resolve, ms));
//await sleep(15000);

//click to activated that popup screen
await driver.findElement(By.xpath("//div[@class='is-flex content']")).click();





switch(scheduleType){
case"Hearing":
await driver.findElement(By.xpath("//select/option[normalize-space()='Hearing']")).click();
break;
case"DecisionOnly":
await driver.findElement(By.xpath("//select/option[normalize-space()='Decision only']")).click();
break;
case"Status":
await driver.findElement(By.xpath("//select/option[normalize-space()='Status']")).click();
break;
}


await driver.findElement(By.xpath("//button[normalize-space()='SUBMIT']")).click();
await driver.findElement(By.xpath("//label[normalize-space()='I confirm that the information above is correct.']")).click();
await driver.findElement(By.xpath("//button[normalize-space()='CONFIRM AND SUBMIT']")).click();





//await driver.findElement(By.xpath("//a[normalize-space()='petitions']")).click();
//await driver.findElement(By.xpath("//div[@class='control is-large']//input[@placeholder='Type keywords']")).sendKeys(docketNumber,Key.ENTER);










});
    
});