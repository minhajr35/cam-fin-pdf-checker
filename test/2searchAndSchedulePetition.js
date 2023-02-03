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

var docketNumber = "28SW-MER-XK87IU"
var hearingDate = "02/13/2023"
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




const pageTitle = await driver.getTitle();
    console.log(pageTitle);

if ( pageTitle === "Tax Review Board"){
     console.log("right page")
} else {
    console.log("wrong page")
}
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





switch(sessionTime){
case"9AM":
await driver.findElement(By.xpath("(//div[@class='control'])[3]")).click();
break;
case"10AM":
await driver.findElement(By.xpath("(//div[@class='control'])[4]")).click();
break;
case"1PM":
await driver.findElement(By.xpath("(//div[@class='control'])[5]")).click();
break;
case"2PM":
await driver.findElement(By.xpath("(//div[@class='control'])[6]")).click();
break;

}
//(//div[@class='control'])[3]
//div[@class='control']//input[@type='radio' and @value='09:00:00']



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




await driver.findElement(By.xpath("//textarea[@name='Details']")).click();
await driver.findElement(By.xpath("//textarea[@name='Details']")).sendKeys("Commenting");
await driver.findElement(By.xpath("//button[normalize-space()='SUBMIT']")).click();
await driver.findElement(By.xpath("//label[normalize-space()='I confirm that the information above is correct.']")).click();
await driver.findElement(By.xpath("//button[normalize-space()='CONFIRM AND SUBMIT']")).click();





await driver.findElement(By.xpath("//a[normalize-space()='petitions']")).click();
await driver.findElement(By.xpath("//div[@class='control is-large']//input[@placeholder='Type keywords']")).sendKeys(zdocketNumber,Key.ENTER);










});
    
});