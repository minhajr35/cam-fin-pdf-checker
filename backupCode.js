const {Builder, By, Key, until, WebElement} = require('selenium-webdriver');
//var webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const o = new chrome.Options();
//var should = require("chai").should();

o.addArguments("user-data-dir=C:/Users/Minhaj.rahman/AppData/Local/Google/Chrome/User Data/");
const driver = new Builder().forBrowser("chrome").setChromeOptions(o).build();

//declaring variables so it will be easier to manipulate later on:

var firstName = "Minhaj"
var lastName = "Rahman"
var ssn = 123456780
var emailAdd = "minhajmrahman@gmail.com"
var mailingAddress = "1234 Market St"
var city = "Philadelphia"
var ZipCode = 19107
var effectiveDate = "12/12/2022"
var accNumber = 12345
var initialBillDate = "01/01/2022"
var disputedPeriodStart = "January 2021"
var disputedPeriodEnd = "December 2022"
var principalamt = 50000
var interestamt = 8600
var penaltyamt = 500
var commentTest = "Testing"





//describe block
describe("Test Started", function(){

    //it block

    it("Test Ran Successfully", async function(){

      // launch the chrome browser and navigate to TRB

      

    await driver.get("https://tax-review-board-test.phila.gov/");





    //

    await driver.findElement(By.xpath("//button[normalize-space()='Sign in']")).click();

    
    //needed use implicit wait in order to give DOM certain duration to load to find element

    await driver.manage().setTimeouts( { implicit: 10000 } );
    await driver.findElement(By.xpath("//button[@id='AzureADPhilaExchange']")).click();
        
    
    



    //after logging in - entering text or keywords
    await driver.manage().setTimeouts( { implicit: 10000 } );  
    //await driver.findElement(By.xpath("//div/input")).sendKeys('Hello',Key.RETURN);


    //click on add new case
    await driver.findElement(By.xpath("//span[normalize-space()='ADD NEW CASE']")).click();

    //Click on individual
    await driver.manage().setTimeouts( { implicit: 10000 } ); 
    await driver.findElement(By.xpath("//label[normalize-space()='Individual']")).click();



    await driver.findElement(By.xpath("//div/select[1][@name='caseTypeId']")).click();
        
    await driver.findElement(By.xpath("//*[contains(text(),'Interest and penalty')]")).click();

    await driver.findElement(By.xpath("//*[contains(text(),'Real estate')]")).click();
    
    await driver.findElement(By.xpath("*//button[normalize-space()='SAVE AND CONTINUE']")).click();

    await driver.findElement(By.xpath("//*[contains(text(),'Real estate lien')]")).click();
    
//-----



    await driver.findElement(By.xpath("//input[@name='firstName']")).sendKeys(firstName);
    
    await driver.findElement(By.xpath("//input[@name='lastName']")).sendKeys(lastName);
    
    await driver.findElement(By.xpath("//input[@name='customerNumber']")).sendKeys(ssn);



    //interpreter

    await driver.findElement(By.xpath("//label[normalize-space()='Interpreter requested']")).click();

    await driver.findElement(By.xpath("//*[contains(text(),'Spanish')]")).click();


      //email 
    await driver.findElement(By.xpath("//label[normalize-space()='Email']")).click();


    await driver.findElement(By.xpath("//input[@name='emailAddress']")).sendKeys(emailAdd);


    //mailing address

    await driver.findElement(By.xpath("//input[@name='streetAddress1']")).sendKeys(mailingAddress);

    //city

    
    await driver.findElement(By.xpath("//input[@name='city']")).sendKeys(city);

    

    await driver.findElement(By.xpath("//option[@value='PA']")).click();

    await driver.findElement(By.xpath("//input[@name='zipCode']")).sendKeys(ZipCode);




    //petetion description

    await driver.findElement(By.xpath("//input[@name='effectiveDate']")).sendKeys(effectiveDate);

    await driver.findElement(By.xpath("//*[contains(text(),'Licenses and Inspections')]")).click();


    await driver.findElement(By.xpath("//input[@name='accountNumber']")).sendKeys(accNumber);


    await driver.findElement(By.xpath("//input[@id='tb-property-search']")).sendKeys(mailingAddress);

    await driver.findElement(By.xpath("//button[@name='verify']")).click();

      //veryfying address:
    await driver.findElement(By.xpath("//button[normalize-space()='USE THIS ADDRESS']")).click();


    
    await driver.findElement(By.xpath("//input[@name='initialBillDate']")).sendKeys(initialBillDate,Key.RETURN);

    



    //await driver.manage().setTimeouts( { implicit: 10000 } );  

    await driver.findElement(By.xpath("//button[@class='button is-secondary has-icon add-disputeperiod']")).click();


    await driver.findElement(By.xpath("//input[@name='disputedPeriodStart']")).sendKeys(disputedPeriodStart);

    await driver.findElement(By.xpath("//input[@name='disputedPeriodEnd']")).sendKeys(disputedPeriodEnd);


    
    await driver.findElement(By.xpath("//input[@name='principal']")).sendKeys(Key.BACK_SPACE);
    await driver.findElement(By.xpath("//input[@name='principal']")).sendKeys(principalamt);

    await driver.findElement(By.xpath("//input[@name='interest']")).sendKeys(Key.BACK_SPACE);
    await driver.findElement(By.xpath("//input[@name='interest']")).sendKeys(interestamt);

    await driver.findElement(By.xpath("//input[@name='penalty']")).sendKeys(Key.BACK_SPACE);
    await driver.findElement(By.xpath("//input[@name='penalty']")).sendKeys(penaltyamt);

    //var el = driver.findElement(By.xpath("*//p/span[@xpath=1]")).getText();
    //console.log(el);
    
     /* function validate() 
      {
        if ((principalamt) + (interestamt) + (penaltyamt)) == el;
      
        {
        return true;
        }

        alert("wrong")
        return false

      } */

    






    await driver.findElement(By.xpath("//label[normalize-space()='Board']")).click();


    await driver.findElement(By.xpath("//textarea[@name='caseDescription']")).sendKeys("TEST");

    await driver.findElement(By.xpath("//button[normalize-space()='SAVE AND CONTINUE']")).click();


    //fileuploading 
    await driver.findElement(By.xpath("//input[@name='inputPaperPetitionFile']")).sendKeys(__dirname+"\\testfile.docx");

    await driver.findElement(By.xpath("//input[@name='inputBillFile']")).sendKeys(__dirname+"\\testfile.docx");


    await driver.findElement(By.xpath("//button[normalize-space()='SAVE AND CONTINUE']")).click();


    //Clicking on My options 
    await driver.findElement(By.xpath("*//input[@name='petitionNotetitle']")).sendKeys(commentTest);

      //timeout
    //await driver.wait(until.elementLocated(By.xpath("*//input[@name='petitionNotetext']")), 10000).sendKeys(commentTest);


    await driver.findElement(By.xpath("*//textarea[@name='petitionNotetext']")).sendKeys(commentTest);



    //approving action

    await driver.findElement(By.xpath("*//option[normalize-space()='Approve case']")).click();




    
   //then Logout + closing the browser ending automation
    //await driver.findElement(By.xpath("//a[normalize-space()='Logout']")).click();
  
    //await driver.quit();



    });
    
});





    


