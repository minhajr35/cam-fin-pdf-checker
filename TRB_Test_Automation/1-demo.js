const {Builder, By, Key, until, WebElement} = require('selenium-webdriver');
//var webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const o = new chrome.Options();
//var should = require("chai").should();

o.addArguments("user-data-dir=C:/Users/Minhaj.rahman/AppData/Local/Google/Chrome/User Data/");
const driver = new Builder().forBrowser("chrome").setChromeOptions(o).build();

//declaring variables so it will be easier to manipulate data later on:


var URL ="https://tax-review-board-test.phila.gov/"

//Individual | Business
var customerType = "Individual" 

//Interest and penalty | Merit | Refund
var caseType = "Merit"

//Refuse | Real estate | Owner occupied | Water revenue | Business tax | License and inspections | Water | Airport | Parking
var taxCategory = "Refuse"

var firstName = "MR"
var lastName = "Test"
var ssn = 123456780
var emailAdd = "minhajmrahman@gmail.com"
var mailingAddress = "1234 Market St"


var city = "Philadelphia"

//Pennsylvania | New York | New Jersey
var stateName = "Pennsylvania"

var ZipCode = 19107
var effectiveDate = "12/12/2022"

//L&I | Revenue | Airport | PPA | PWD | Water Revenue Bureau
var departmentName = "Water Revenue Bureau"

var accNumber = 12345
var initialBillDate = "01/01/2022"
var disputedPeriodStart = "January 2021"
var disputedPeriodEnd = "December 2022"
var principalamt = 40000
var interestamt = 9000
var penaltyamt = 5000
var commentTest = "Testing"
var businessName = "Business Name Test"

//Spanish | English | French
var InterpreterLang ="French"

//Approve_Case | Deny_Case | Save_as_Incomplete | Save_as_nunc_pro_tunc
var caseDecision ="Approve_Case"







//describe block
describe("Test Started", function(){

    //it block

    it("Test Ran Successfully", async function(){

    
    // launch the chrome browser and navigate to TRB

      

    await driver.get(URL);

    //signing in using city credentials. 

    await driver.findElement(By.xpath("//button[normalize-space()='Sign in']")).click();

    
    //needed use implicit wait in order to give DOM certain duration to load to find element

    await driver.manage().setTimeouts( { implicit: 10000 } );
    await driver.findElement(By.xpath("//button[@id='AzureADPhilaExchange']")).click();
        
 

    //after logging in - entering text or keywords
    await driver.manage().setTimeouts( { implicit: 10000 } );  
    //await driver.findElement(By.xpath("//div/input")).sendKeys('Hello',Key.RETURN);


    //click on add new case
    await driver.findElement(By.xpath("//span[normalize-space()='ADD NEW CASE']")).click();

 
//----------------------------------------------------------------------------------------------------   
    //Click on individual or business
    
     switch(customerType){

            case "Individual":
              await driver.findElement(By.xpath("//label[normalize-space()='Individual']")).click();
              break;
              case"Business":
              await driver.findElement(By.xpath("//label[normalize-space()='Business']")).click();
              
              break;
          }

  
//----------------------------------------------------------------------------------------------------
    
    await driver.findElement(By.xpath("//div/select[1][@name='caseTypeId']")).click();


   
//----------------------------------------------------------------------------------------------------   
      switch(caseType){
        case"Interest and penalty":
        await driver.findElement(By.xpath("//*[contains(text(),'Interest and penalty')]")).click();
        break;
        case"Merit":
        await driver.findElement(By.xpath("//*[contains(text(),'Merit')]")).click();
        break;
        case"Refund":
        await driver.findElement(By.xpath("//*[contains(text(),'Refund')]")).click();

        break;
      }

  
//----------------------------------------------------------------------------------------------------      
    //await driver.findElement(By.xpath("//*[contains(text(),'Interest and penalty')]")).click();

    
    
//----------------------------------------------------------------------------------------------------
    
    switch(taxCategory){
      case"Refuse":
      await driver.findElement(By.xpath("//*[contains(text(),'Refuse')]")).click();
      break;
      case"Real estate":
      await driver.findElement(By.xpath("//select/option[normalize-space()='Real estate']")).click();
      break;
      case"Owner occupied":
      await driver.findElement(By.xpath("//select/option[normalize-space()='Owner occupied']")).click();
      break;
      case"Water revenue":
      await driver.findElement(By.xpath("//select/option[normalize-space()='Water revenue']")).click();
      break;
      case"Business tax":
      await driver.findElement(By.xpath("//select/option[normalize-space()='Business tax']")).click();
      break;
      case"License and inspections":
      await driver.findElement(By.xpath("//select/option[normalize-space()='Licenses and inspections']")).click();
      break;
      case"Water":
      await driver.findElement(By.xpath("//select/option[normalize-space()='Water']")).click();
      break;
      case"Airport":
      await driver.findElement(By.xpath("//select/option[normalize-space()='Airport']")).click();
      break;
      case"Parking":
      await driver.findElement(By.xpath("//select/option[normalize-space()='Parking']")).click();
      break;

    }

//----------------------------------------------------------------------------------------------------




      //taxType


      if (taxCategory = "Refuse"){
        await driver.findElement(By.xpath("//select/option[normalize-space()='Refuse collection']")).click();}

    //await driver.findElement(By.xpath("//*[contains(text(),'Real estate lien')]")).click();
    
    await driver.findElement(By.xpath("*//button[normalize-space()='SAVE AND CONTINUE']")).click();

    
    



//----------------------------------------------------------------------------------------------------
    //first name     
    await driver.findElement(By.xpath("//input[@name='firstName']")).sendKeys(firstName);
    //lastname
    await driver.findElement(By.xpath("//input[@name='lastName']")).sendKeys(lastName);
    //ssn
    await driver.findElement(By.xpath("//input[@name='customerNumber']")).sendKeys(ssn);

//----------------------------------------------------------------------------------------------------



      switch(customerType){
      case"Business":
      await driver.findElement(By.xpath("//input[@name='businessName']")).sendKeys(businessName);
      break;}


   



//----------------------------------------------------------------------------------------------------
    //interpreter selection
    await driver.findElement(By.xpath("//label[normalize-space()='Interpreter requested']")).click();
   
    switch(InterpreterLang){

      case "Spanish":
        await driver.findElement(By.xpath("//*[contains(text(),'Spanish')]")).click();
        break;
        case"English":
        await driver.findElement(By.xpath("//*[contains(text(),'English')]")).click();
        break;
        case"French":
        await driver.findElement(By.xpath("//*[contains(text(),'French')]")).click();
        break;
    }


//----------------------------------------------------------------------------------------------------









    //email 
    await driver.findElement(By.xpath("//label[normalize-space()='Email']")).click();


    await driver.findElement(By.xpath("//input[@name='emailAddress']")).sendKeys(emailAdd);


    //mailing address

    await driver.findElement(By.xpath("//input[@name='streetAddress1']")).sendKeys(mailingAddress);

    //city

    
    await driver.findElement(By.xpath("//input[@name='city']")).sendKeys(city);

    
//state




//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

   
  switch(stateName){

  case "Pennsylvania":
    await driver.findElement(By.xpath("//option[@value='PA']")).click();
    break;
    case"New York":
    await driver.findElement(By.xpath("//option[@value='NY']")).click();
    break;
    case"New Jersey":
    await driver.findElement(By.xpath("//option[@value='NJ']")).click();
    break;
}

//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

  
    await driver.findElement(By.xpath("//input[@name='zipCode']")).sendKeys(ZipCode);




    //petetion description

    await driver.findElement(By.xpath("//input[@name='effectiveDate']")).sendKeys(effectiveDate);




    //----------------------------------------------------------------------------------------------------

    switch(departmentName){

      case "L&I":
        await driver.findElement(By.xpath("//*[contains(text(),'Licenses and Inspections')]")).click();
        break;
        case"Revenue":
        await driver.findElement(By.xpath("//*[contains(text(),'Revenue')][1]")).click();
        break;
        case"Airport":
        await driver.findElement(By.xpath("//*[contains(text(),'Airport')]")).click();
        break;
        case"PPA":
        await driver.findElement(By.xpath("//*[contains(text(),'Philadelphia Parking Authority')]")).click();
        break;
        case"PWD":
        await driver.findElement(By.xpath("//*[contains(text(),'Philadelphia Water Department')]")).click();
        break;
        case"Water Revenue Bureau":
        await driver.findElement(By.xpath("//*[contains(text(),'Water Revenue Bureau')]")).click();
        break;
                          }
//----------------------------------------------------------------------------------------------------




    await driver.findElement(By.xpath("//input[@name='accountNumber']")).sendKeys(accNumber);


    await driver.findElement(By.xpath("//input[@id='tb-property-search']")).sendKeys(mailingAddress);

    await driver.findElement(By.xpath("//button[@name='verify']")).click();

      //veryfying address:
    await driver.findElement(By.xpath("//button[normalize-space()='USE THIS ADDRESS']")).click();


    
    await driver.findElement(By.xpath("//input[@name='initialBillDate']")).sendKeys(initialBillDate,Key.RETURN);

    await driver.findElement(By.xpath("//button[@class='button is-secondary has-icon add-disputeperiod']")).click();


    await driver.findElement(By.xpath("//input[@name='disputedPeriodStart']")).sendKeys(disputedPeriodStart);

    await driver.findElement(By.xpath("//input[@name='disputedPeriodEnd']")).sendKeys(disputedPeriodEnd);


    
    await driver.findElement(By.xpath("//input[@name='principal']")).sendKeys(Key.BACK_SPACE);
    await driver.findElement(By.xpath("//input[@name='principal']")).sendKeys(principalamt);

    await driver.findElement(By.xpath("//input[@name='interest']")).sendKeys(Key.BACK_SPACE);
    await driver.findElement(By.xpath("//input[@name='interest']")).sendKeys(interestamt);

    await driver.findElement(By.xpath("//input[@name='penalty']")).sendKeys(Key.BACK_SPACE);
    await driver.findElement(By.xpath("//input[@name='penalty']")).sendKeys(penaltyamt);

    
    console.log(principalamt+interestamt+penaltyamt);



//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
    if (principalamt+interestamt+penaltyamt >= 50000){
      await driver.findElement(By.xpath("//label[normalize-space()='Board']")).click();}
      else{
        await driver.findElement(By.xpath("//div[normalize-space()='Department']")).click();
      }
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
    
 

    


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



    //case decision action

    

    switch(caseDecision){

        case "Approve_Case":
        await driver.findElement(By.xpath("*//option[normalize-space()='Approve case']")).click();
        break;
        case"Deny_Case":
        await driver.findElement(By.xpath("*//option[normalize-space()='Deny case']")).click();
        break;
        case"Save_as_Incomplete":
        await driver.findElement(By.xpath("*//option[normalize-space()='Save as incomplete']")).click();
        break;
        case"Save_as_nunc_pro_tunc":
        await driver.findElement(By.xpath("*//option[normalize-space()='Save as nunc pro tunc']")).click();
        break;

    }





    




    
   //then Logout + closing the browser ending automation
   await driver.findElement(By.xpath("//button[@class='navbar-link']")).click();

   await driver.findElement(By.xpath("//a[normalize-space()='Logout']")).click();

   
  
    //await driver.quit();


//done
    });
    
});





    


