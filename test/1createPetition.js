
require('dotenv').config();
const { assert } = require('assert').strict;
const { fstat } = require('fs');
const {Builder, By, Key, until, WebElement} = require('selenium-webdriver');
//const driver = new Builder().forBrowser("chrome").build();




//declaring variables so it will be easier to manipulate data later on:

//---------------------Login Process-------------------------------
const URL =process.env.TEST_URL
const userName = process.env.AD_USER_NAME;
const userPass = process.env.AD_USER_PASSWORD;
//-----------------------------------------------------------------



//---------------------After Login Process------------------------------
//Individual | Business
var customerType = "Individual" 

//Interest and penalty | Merit | Refund
var caseType = "Refund"

//Refuse | Real estate | Owner occupied | Water revenue | Business tax | Licenses and inspections | Water | Airport | Parking
var taxCategory = "Water revenue"

var taxType = "Shut off"



var firstName = "Automated"  //requiredField
var lastName = "Test"  //requiredField
var ssn = 0987654321
var emailAdd = "trb.qatesting@gmail.com"
var mailingAddress = "100 s broad st"  //requiredField
var preferredCorrespondence = "mail"

var city = "Philadelphia"  //requiredField

//Pennsylvania | New York | New Jersey
var stateName = "Pennsylvania"  //requiredField

var ZipCode = 19102 //requiredField
var effectiveDate = "12/10/2022"

//Licenses and inspections | Revenue | Airport | PPA | PWD | Water Revenue Bureau
var departmentName = "Airport"

var accNumber = 09876
var initialBillDate = "01/01/2022"
var disputedPeriodStart = "August 2010"
var disputedPeriodEnd = "December 2022"
var principalamt = 44501
var interestamt = 5000
var penaltyamt = 499
var commentTest = "Testing Testing Testing Comment "
var businessName = "Business Name Test"
var caseDescription = 'Case Description Text Test'

//Spanish | English | French  (need to add none for no interpreter)
var InterpreterLang ="Spanish"

//Approve_Case | Deny_Case | Save_as_Incomplete | Save_as_nunc_pro_tunc
var caseDecision ="Approve_Case"







//----------------------------------------------------------------------------------------------------  
//----------------------------------------------------------------------------------------------------  
//----------------------------------------------------------------------------------------------------  

//describe block
describe("TRB AUTOMATED - Test Started", function(){


  

    //it block

    it("TRB AUTOMATED - Test Ran Successfully", async function(){

    
    // launch the chrome browser and navigate to TRB

    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get(URL);

    //signing in using city credentials. 

    await driver.findElement(By.xpath("//button[normalize-space()='Sign in']")).click();

    
    //needed use implicit wait in order to give DOM certain duration to load to find element

    await driver.manage().setTimeouts( { implicit: 10000 } );
    //await driver.findElement(By.xpath("//button[@id='AzureADPhilaExchange']")).click();

    await driver.findElement(By.xpath("//input[@id='signInName']")).sendKeys(userName);
    await driver.findElement(By.xpath("//input[@id='password']")).sendKeys(userPass);

    await driver.findElement(By.xpath("//button[@id='next']")).click();
 

    //after logging in - entering text or keywords
    await driver.manage().setTimeouts( { implicit: 7000 } );  


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
            break;}

  
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
      await driver.findElement(By.xpath("//select/option[normalize-space()='Refuse collection']")).click()
      break;


      case"Real estate":
      await driver.findElement(By.xpath("//select/option[normalize-space()='Real estate']")).click();

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
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

      switch(taxType)
      {
        case"Realty transfer":
        await driver.findElement(By.xpath("//select/option[normalize-space()='Realty transfer']")).click();
        break;
  
  
        case"Real estate": 
        //sibiling xpath type***************************************************************
        await driver.findElement(By.xpath("//select[@name='taxTypeId']/option[3]")).click();
        break;
  
        case"Real estate lien":
        
        await driver.findElement(By.xpath("//*[contains(text(),'Real estate lien')]")).click();
        break;
      
        case"Senior citizen forgiveness":
        await driver.findElement(By.xpath("//select/option[normalize-space()='Senior citizen forgiveness']")).click();
        break;
  
  
        case"Real estate LOOP program": 
        //sibiling xpath type***************************************************************
        await driver.findElement(By.xpath("//select/option[normalize-space()='Real estate LOOP program']")).click();
        break;
  
        case"Owner occupied payment":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Owner occupied payment']")).click();
        break;


//----------------------------------------------------------------------------------------------------
//----------------------------------WATER REVENUE-----------------------------------------------------
//----------------------------------------------------------------------------------------------------

        case"Shut off":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Shut off']")).click();
        break;
      
        case"TAP":
        await driver.findElement(By.xpath("//select/option[normalize-space()='TAP']")).click();
        break;
  
  
        case"Water revenue": 
        //sibiling xpath type***************************************************************
        await driver.findElement(By.xpath("//select/option[normalize-space()='Water revenue']")).click();
        break;
  
        case"Occupancy dispute":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Occupancy dispute']")).click();
        break;

      

//----------------------------------------------------------------------------------------------------
//--------------------------------------------BUSINESS--TAX-------------------------------------------
//----------------------------------------------------------------------------------------------------
        case"Business income and receipts":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Business income and receipts']")).click();
        break;
      
        case"Commercial Development":
        await driver.findElement(By.xpath("//select/option[normalize-space()='Commercial Development']")).click();
        break;
  
  
        case"Outdoor advertisement tax": 
        //sibiling xpath type***************************************************************
        await driver.findElement(By.xpath("//select/option[normalize-space()='Outdoor advertisement tax']")).click();
        break;
  
        case"Amusement tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Amusement tax']")).click();
        break;

        case"Billboard tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Billboard tax']")).click();
        break;


        case"Corporate net income tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Corporate net income tax']")).click();
        break;


        case"Hospital tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Hospital tax']")).click();
        break;
      
        case"Hotel room tax":
        await driver.findElement(By.xpath("//select/option[normalize-space()='Hotel room tax']")).click();
        break;
  
  
        case"Outdoor advertisement tax": 
        //sibiling xpath type***************************************************************
        await driver.findElement(By.xpath("//select/option[normalize-space()='Outdoor advertisement tax']")).click();
        break;
  
        case"Liquor sales tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Liquor sales tax']")).click();
        break;

        case"Parking lot tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Parking lot tax']")).click();
        break;


        case"Philly beverage tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Philly beverage tax']")).click();
        break;



        
        case"Valet parking tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Valet parking tax']")).click();
        break;

        

        case"Wage tax monthly":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Wage tax monthly']")).click();
        break;
        

        case"Wage tax quarterly":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Wage tax quarterly']")).click();
        break;
        

        case"Wage tax weekly":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Wage tax weekly']")).click();
        break;
        

        case"Business tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Business tax']")).click();
        break;
        

        case"Earnings tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Earnings tax']")).click();
        break;
        

        case"Use and occupancy tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Use and occupancy tax']")).click();
        break;
        

        case"School income tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='School income tax']")).click();
        break;
        

        case"Use and Occupancy tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Use and Occupancy tax']")).click();
        break;



      }
        //----------------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------------


    
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



      



    switch(preferredCorrespondence){
      case "mail":
      //MAIL or EMAIL option
      await driver.findElement(By.xpath("//label[normalize-space()='Mail']")).click();
      break;
      case "email":
      await driver.findElement(By.xpath("//label[normalize-space()='Email']")).click();
      await driver.findElement(By.xpath("//input[@name='emailAddress']")).sendKeys(emailAdd);
      break;
      }

    

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

      case "Licenses and inspections":
        await driver.findElement(By.xpath("//*[contains(text(),'Licenses and Inspections')]")).click();
        break;
        case"Revenue":
        await driver.findElement(By.xpath("//*[contains(text(),'Revenue')][1]")).click();
        break;
        case"Airport":
        await driver.findElement(By.xpath("//select[@name='departmentId']/option[2]")).click();
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

                          /*driver.sleep(10000);
    const element = driver.findElement(By.xpath("//div/p[@class='mt-4 is-size-2']"));
    const elementText = await element.getText();
    const elementTexts= elementText.replace("$", "");

    console.log("amount: "+elementTexts);

    if ((principalamt+interestamt+penaltyamt) === elementTexts ) {
      console.log('correct amount');
    } else {
      console.log('wrong');
    }

*/
  
    



//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
    if (principalamt+interestamt+penaltyamt >= 50000){
      await driver.findElement(By.xpath("//label[normalize-space()='Board']")).click();}
      else{
        await driver.findElement(By.xpath("//div[normalize-space()='Department']")).click();
      }
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
    
    await driver.findElement(By.xpath("//textarea[@name='caseDescription']")).sendKeys(caseDescription);

    await driver.findElement(By.xpath("//button[normalize-space()='SAVE AND CONTINUE']")).click();


    //fileuploading 
    await driver.findElement(By.xpath("//input[@name='inputPaperPetitionFile']")).sendKeys(__dirname+"\\testfile.docx");
    await driver.findElement(By.xpath("//input[@name='inputBillFile']")).sendKeys(__dirname+"\\testfile.docx");


    await driver.findElement(By.xpath("//button[normalize-space()='SAVE AND CONTINUE']")).click();


    //Clicking on My options 
    await driver.findElement(By.xpath("*//input[@name='petitionNotetitle']")).sendKeys(commentTest);

     
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

    //Clicking on submit should create a new petition:

    await driver.findElement(By.xpath("//button[normalize-space()='SUBMIT']")).click();
    




    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------
    //Case History tab
    await driver.manage().setTimeouts( { implicit: 10000 } );
    await driver.findElement(By.xpath("//a[normalize-space()='Case history']")).click();
    await driver.manage().setTimeouts( { implicit: 10000 } );
    var docketnumber = await driver.findElement(By.css("div[class='column border-bottom-medium-grey'] p:nth-child(2)")).getText();
    console.log(docketnumber);













    //Documents tab

    /* await driver.findElement(By.xpath("//a[normalize-space()='Documents']")).click();

    //Case contact tab

    await driver.findElement(By.xpath("//a[normalize-space()='Case contact']")).click();

    //Case notes tab

    await driver.findElement(By.xpath("//a[normalize-space()='Case notes']")).click();

    //Correspondence tab

    await driver.findElement(By.xpath("//a[normalize-space()='Correspondence']")).click();

    //Case details tab

    await driver.findElement(By.xpath("//a[normalize-space()='Case details']")).click();
    */

//----------------------------------------------------------------------------------
//Screenshot
    //const fs = require('fs');
   // let screenshot = await driver.takeScreenshot();
    //let timestamp = new Date().toISOString().slice(0, -5).replace(/:/g, '-');
    //fs.writeFileSync(`screenshot-${timestamp}.png`, screenshot, {encoding: 'base64'});
//----------------------------------------------------------------------------------

    
   //then Logout + closing the browser ending automation
   //await driver.findElement(By.xpath("//button[@class='navbar-link']")).click();

   //await driver.findElement(By.xpath("//a[normalize-space()='Logout']")).click();

   
    //driver.findElement(By.xpath("//button[normalize-space()='CANCEL']")).click();
    //await driver.quit();



    });
    
});





    


