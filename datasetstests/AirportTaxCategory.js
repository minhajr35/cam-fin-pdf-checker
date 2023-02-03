
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
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------

//Interest_and_penalty | Merit | Refund
var caseType = "Merit"
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------

//Refuse | Real_estate| Owner_occupied | Water_revenue | Business_tax | Licenses_and_inspections | Water | Airport | Parking
var taxCategory = "Airport"

//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
        //--> Refuse: Refuse_collection

        //--> Real_estate: Realty_transfer | Real_estate | Real_estate_lien

        //--> Owner_occupied: Senior_citizen_forgiveness | Real_estate_LOOP_program | Owner_occupied_payment

        //--> Water_revenue: Shut_off | TAP | Water_revenue | Occupancy_dispute

        //--> Business_tax: Business_income_and_receipts | Commercial_Development | Outdoor_advertisement_tax | Amusement_tax |
        //              Billboard_tax | Corporate_net_income_tax | Hospital_tax | Hotel_room_tax | Outdoor_advertisement_tax |
        //              Liquor_sales_tax | Parking_lot_tax | Philly_beverage_tax | Valet_parking_tax | Wage_tax_monthly |
        //              Wage_tax_quarterly | Wage_tax_weekly | Business_tax | Earnings_tax | Use_and_occupancy_tax | School_income_tax 


        //--> Licenses_and_inspections: Housing_and_Commerical_development | Building_permit | Clean_and_seal | Demolition |
        //                          License_fee | Nuisance_abate | License_and_inspection


        //--> Water: Water_department | Meter | Pipes | Storm_water | Help_loan

        //--> Airport: Airport

        //--> Parking: Disable_parking | Dirt_bike | ATV

      var taxType = "Airport" 
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------

var firstName = taxCategory  //requiredField
var lastName = "A.Test"  //requiredField
var phoneNumber = 1234567890
//var ssn = 657278101
var emailAdd = "trb.qatesting@gmail.com"
var mailingAddress = "100 s broad st"  //requiredField
// mail | email
var preferredCorrespondence = "mail"

var city = "New York"  //requiredField

//Pennsylvania | New_York | New_Jersey
var stateName = "Pennsylvania"  //requiredField

var ZipCode = 19102 //requiredField
var effectiveDate = "10/10/2022"

//Licenses_and_inspections | Revenue | Airport | PPA | PWD | Water_Revenue_Bureau
var departmentName = "PPA"

var accNumber = 55555
var initialBillDate = "03/01/2022"
var disputedPeriodStart = "August 2010"
var disputedPeriodEnd = "December 2022"
var principalamt = 89000
var interestamt = 14000
var penaltyamt = 7300
var commentTest = "Testing Testing Testing Comment "
var businessName = "Business Name Test"
var caseDescription = 'Case Description Text Test'

//Spanish | English | French  (need to add none for no interpreter)
var InterpreterLang ="French"

//Approve_Case | Deny_Case | Save_as_Incomplete | Save_as_nunc_pro_tunc
var caseDecision ="Approve_Case"



//MicrosoftEdge | chrome
var browserSelect = "chrome"







//----------------------------------------------------------------------------------------------------  
//-------------------------------------TRB AUTOMATION CODE--------------------------------------------  
//----------------------------------------------------------------------------------------------------  

//describe block
describe("TRB AUTOMATED - Test Started", function(){


  

    //it block

    it("TRB AUTOMATED - Test Ran Successfully", async function(){

    
    // launch the chrome browser and navigate to TRB

    let driver = await new Builder().forBrowser(browserSelect).build();

    await driver.manage().window().maximize();

    await driver.get(URL);
    

    //signing in using city credentials. 
    await driver.manage().setTimeouts( { implicit: 10000 } );
  
    await driver.findElement(By.xpath("//button[normalize-space()='Sign in']")).click();

    
    //needed use implicit wait in order to give DOM certain duration to load to find element
    await driver.manage().setTimeouts( { implicit: 10000 } );

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
        case"Interest_and_penalty":
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
//----------------------------------------------------------------------------------------------------
    
    switch(taxCategory){
      case"Refuse":
      await driver.findElement(By.xpath("//*[contains(text(),'Refuse')]")).click();
      break;


      case"Real_estate":
      await driver.findElement(By.xpath("//select/option[normalize-space()='Real estate']")).click();
      break;

      case"Owner_occupied":
      await driver.findElement(By.xpath("//select/option[normalize-space()='Owner occupied']")).click();
      break;

      case"Water_revenue":
      await driver.findElement(By.xpath("//select/option[normalize-space()='Water revenue']")).click();
      break;

      case"Business_tax":
      await driver.findElement(By.xpath("//select/option[normalize-space()='Business tax']")).click();
      break;

      case"Licenses_and_inspections":
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
//-----------------------------------Refuse Tax Type--------------------------------------------------
//----------------------------------------------------------------------------------------------------

      switch(taxType)
      { 
        //refuse tax type
        case"Refuse_collection":
        await driver.findElement(By.xpath("//select/option[normalize-space()='Refuse collection']")).click();
        break;


//----------------------------------------------------------------------------------------------------
//----------------------------------Real Estate Tax Type----------------------------------------------
//----------------------------------------------------------------------------------------------------

        //real estate tax type
        case"Realty_transfer":
        await driver.findElement(By.xpath("//select/option[normalize-space()='Realty transfer']")).click();
        break;
  
        case"Real_estate": 
        //sibiling xpath type***************************************************************
        await driver.findElement(By.xpath("//select[@name='taxTypeId']/option[3]")).click();
        break;
  
        case"Real_estate_lien":
        await driver.findElement(By.xpath("//*[contains(text(),'Real estate lien')]")).click();
        break;

//----------------------------------------------------------------------------------------------------
//----------------------------------Owner Occupied Tax Type-------------------------------------------
//----------------------------------------------------------------------------------------------------
      
        case"Senior_citizen_forgiveness":
        await driver.findElement(By.xpath("//select/option[normalize-space()='Senior citizen forgiveness']")).click();
        break;
  
  
        case"Real_estate_LOOP_program": 
        //sibiling xpath type***************************************************************
        await driver.findElement(By.xpath("//select/option[normalize-space()='Real estate LOOP program']")).click();
        break;
  
        case"Owner_occupied_payment":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Owner occupied payment']")).click();
        break;


//----------------------------------------------------------------------------------------------------
//----------------------------------WATER REVENUE TAX TYPE--------------------------------------------
//----------------------------------------------------------------------------------------------------

        case"Shut_off":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Shut off']")).click();
        break;
      
        case"TAP":
        await driver.findElement(By.xpath("//select/option[normalize-space()='TAP']")).click();
        break;
  
  
        case"Water_revenue": 
        //sibiling xpath type***************************************************************
        await driver.findElement(By.xpath("//select/option[normalize-space()='Water revenue']")).click();
        break;
  
        case"Occupancy_dispute":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Occupancy dispute']")).click();
        break;

//----------------------------------------------------------------------------------------------------
//--------------------------------------------Business Tax Type---------------------------------------
//----------------------------------------------------------------------------------------------------
        case"Business_income_and_receipts":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Business income and receipts']")).click();
        break;
      
        case"Commercial_Development":
        await driver.findElement(By.xpath("//select/option[normalize-space()='Commercial Development']")).click();
        break;
  
  
        case"Outdoor_advertisement_tax": 
        //sibiling xpath type***************************************************************
        await driver.findElement(By.xpath("//select/option[normalize-space()='Outdoor advertisement tax']")).click();
        break;
  
        case"Amusement_tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Amusement tax']")).click();
        break;

        case"Billboard_tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Billboard tax']")).click();
        break;


        case"Corporate_net_income_tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Corporate net income tax']")).click();
        break;


        case"Hospital_tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Hospital tax']")).click();
        break;
      
        case"Hotel_room_tax":
        await driver.findElement(By.xpath("//select/option[normalize-space()='Hotel room tax']")).click();
        break;
  
  
        case"Outdoor_advertisement_tax": 
        //sibiling xpath type***************************************************************
        await driver.findElement(By.xpath("//select/option[normalize-space()='Outdoor advertisement tax']")).click();
        break;
  
        case"Liquor_sales_tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Liquor sales tax']")).click();
        break;

        case"Parking_lot_tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Parking lot tax']")).click();
        break;


        case"Philly_beverage_tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Philly beverage tax']")).click();
        break;



        
        case"Valet_parking_tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Valet parking tax']")).click();
        break;

        

        case"Wage_tax_monthly":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Wage tax monthly']")).click();
        break;
        

        case"Wage_tax_quarterly":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Wage tax quarterly']")).click();
        break;
        

        case"Wage_tax_weekly":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Wage tax weekly']")).click();
        break;
        

        case"Business_tax":
        
        await driver.findElement(By.xpath("//select[@name='taxTypeId']/option[normalize-space()='Business tax']")).click();
        break;
        

        case"Earnings_tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Earnings tax']")).click();
        break;
        

        case"Use_and_occupancy_tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Use and occupancy tax']")).click();
        break;
        

        case"School_income_tax":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='School income tax']")).click();
        break;

//----------------------------------------------------------------------------------------------------
//----------------------------------Licenses and Inspections Tax--------------------------------------
//----------------------------------------------------------------------------------------------------
        case"Housing_and_Commerical_development":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Use and Occupancy tax']")).click();
        break;

        case"Building_permit":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Building permit']")).click();
        break;


        case"Clean_and_seal":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Clean and seal']")).click();
        break;

        case"Demolition":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Demolition']")).click();
        break;


        case"License_fee":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='License fee']")).click();
        break;


        case"Nuisance_abate":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Nuisance abate']")).click();
        break;

        case"License_and_inspection":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='License and inspection']")).click();
        break;
        //L&I tax type ends

//----------------------------------------------------------------------------------------------------
//----------------------------------Water Tax Type----------------------------------------------------
//----------------------------------------------------------------------------------------------------


        case"Water_department":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Water department']")).click();
        break;

        case"Meter":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Meter']")).click();
        break;


        case"Pipes":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Pipes']")).click();
        break;


        case"Storm_water":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Storm water']")).click();
        break;

        case"Help_loan":
        
        await driver.findElement(By.xpath("//select/option[normalize-space()='Help loan']")).click();
        break;
        //water tax type ENDS here


//----------------------------------------------------------------------------------------------------
//----------------------------------Airport Tax Type--------------------------------------------------
//----------------------------------------------------------------------------------------------------
        case"Airport":
        
        await driver.findElement(By.xpath("//select[@name='taxTypeId']/option[normalize-space()='Airport']")).click();
        break;
        //Airport tax type ENDS here

//----------------------------------------------------------------------------------------------------
//----------------------------------Parking Tax Type--------------------------------------------------
//----------------------------------------------------------------------------------------------------
        case"Disable_parking":
        
        await driver.findElement(By.xpath("//select[@name='taxTypeId']/option[normalize-space()='Disable parking']")).click();
        break;

        case"Dirt_bike":
        
        await driver.findElement(By.xpath("//select[@name='taxTypeId']/option[normalize-space()='Dirt bike']")).click();
        break;

        case"ATV":
        
        await driver.findElement(By.xpath("//select[@name='taxTypeId']/option[normalize-space()='ATV']")).click();
        break;
      //Parking tax type ENDS here

      }
//----------------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------


    
    //await driver.findElement(By.xpath("*//button[normalize-space()='SAVE AND CONTINUE']")).click();

//----------------------------------------------------------------------------------------------------
    //first name     
    await driver.findElement(By.xpath("//input[@name='firstName']")).sendKeys(firstName);
    //lastname
    await driver.findElement(By.xpath("//input[@name='lastName']")).sendKeys(lastName);
    //phoneNumber
    await driver.manage().setTimeouts( { implicit: 10000 } );
    await driver.findElement(By.xpath("//input[@name='phoneNumber[0]']")).click();
    await driver.findElement(By.xpath("//input[@name='phoneNumber[0]']")).sendKeys(phoneNumber);
    await driver.findElement(By.xpath("//option[@value='Mobile']")).click();

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

    


//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

   
  switch(stateName){

  case "Pennsylvania":
    await driver.findElement(By.xpath("//option[@value='PA']")).click();
    break;
    case"New_York":
    await driver.findElement(By.xpath("//option[@value='NY']")).click();
    break;
    case"New_Jersey":
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

      case "Licenses_and_inspections":
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
        case"Water_Revenue_Bureau":
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
    
    await driver.sleep(5000);
      await driver.quit();


    //----------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------
    /*Case History tab
    await driver.manage().setTimeouts( { implicit: 10000 } );
    await driver.findElement(By.xpath("//a[normalize-space()='Case history']")).click();
    await driver.manage().setTimeouts( { implicit: 10000 } );
    var docketnumber = await driver.findElement(By.css("div[class='column border-bottom-medium-grey'] p:nth-child(2)")).getText();
    console.log(docketnumber);*/













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





    


