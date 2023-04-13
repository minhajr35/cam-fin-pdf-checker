const assert = require('assert');
const {Builder, By, Key, until, WebElement} = require('selenium-webdriver');
const fs = require('fs')
const URL = "https://campaign-finance.phila.gov/search/report";
const browserSelect = "chrome"

describe("PDF Checker | Test Started", function(){


  

  

  it("Campaign Finance - Reports | PDF Checker", async function()

  {


//---------------------------------------------------------------------- 
 //------------------------HEADLESS-------------------------------------    
//----------------------------------------------------------------------

              /*const chrome = require('selenium-webdriver/chrome');
              const options = new chrome.Options();
              options.addArguments('--headless');
              options.addArguments('--disable-gpu');
              options.addArguments('--no-sandbox');
              options.addArguments('--disable-dev-shm-usage');
              options.windowSize({ width: 1920, height: 1080 });

              let driver = await new Builder()
              .forBrowser(browserSelect)
              .setChromeOptions(options)
              .setChromeService(new chrome.ServiceBuilder(browserSelect.path))
              .build();*/
//----------------------------------------------------------------------   
//----------------------------------------------------------------------


   
//----------------------------------------------------------------------
//--------------------------NON-HEADLESS--------------------------------    
//----------------------------------------------------------------------
  const driver = await new Builder().forBrowser(browserSelect).build();
    await driver.manage().window().maximize();
    
//----------------------------------------------------------------------


    await driver.get(URL);
    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    //await driver.findElement(By.xpath("//a[normalize-space()='Find a Campaign Financial Report']")).click();
    await driver.findElement(By.xpath("//select/option[normalize-space()='2023']")).click();
    await driver.findElement(By.xpath("//button[normalize-space()='Search']")).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//option[normalize-space()='50']")).click();
      await driver.manage().setTimeouts( { implicit: 10000 } );  
      await driver.sleep(5000);
  



    const recordsNumber = await driver.findElement(By.xpath("//p[@class='VuePagination__count text-center column cell medium-24']"));
    const recordNumberText = await recordsNumber.getText();
      //console.log(recordNumberText);


     const str =recordNumberText;
     const match = str.match(/\d+/g);
     const number = match ? match[match.length -1] : null;
     console.log(number + " - total records");  //records number


     const recordsPerPage = 50;

     const totalPages = Math.ceil(number / recordsPerPage);
     console.log(totalPages + " - pages"); //page number




     for (let page = 1; page <= totalPages; page++){


      await driver.get(URL);
      await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
      //await driver.findElement(By.xpath("//a[normalize-space()='Find a Campaign Financial Report']")).click();
      await driver.findElement(By.xpath("//select/option[normalize-space()='2023']")).click();
      await driver.sleep(2000); 
      await driver.findElement(By.xpath("//button[normalize-space()='Search']")).click();
      await driver.sleep(3000); 
      //await driver.findElement(By.xpath("//option[normalize-space()='50']")).click();
      await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
      await driver.findElement(By.xpath(`//a[normalize-space()='${page}']`)).click(); 
      await driver.sleep(3000);
            //row counts
    const rows = await driver.findElements(By.xpath("//*[@class='VueTables__row ']"));
    const rowCount = rows.length;
    console.log('Test is currently running on page - ' + page)
    console.log(rowCount + " - rows on this page");



     
    
    
      
     for (let i = 1; i <= rowCount; i++)   ///pagination
    
    
        
    {
      

        await driver.sleep(4000);

        

       // launch the chrome browser and navigate to website
      //await driver.get(URL);
      await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
      //await driver.findElement(By.xpath("//a[normalize-space()='Find a Campaign Financial Report']")).click();
      await driver.findElement(By.xpath("//select/option[normalize-space()='2023']")).click();
      await driver.sleep(2000);
      await driver.findElement(By.xpath("//button[normalize-space()='Search']")).click();
      await driver.manage().setTimeouts( { implicit: 10000 } );  
      await driver.sleep(2000);
      //await driver.findElement(By.xpath("//option[normalize-space()='50']")).click();
      await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
      
      

      await driver.sleep(3000);
      await driver.manage().setTimeouts( { implicit: 7000 } ); 
      


      await driver.findElement(By.xpath(`//a[normalize-space()='${page}']`)).click(); 
      await driver.sleep(3000);
   


      

      await driver.manage().setTimeouts( { implicit: 7000 } );
      let xpathexpression = `(//tr[@class='VueTables__row '])[${i}]`;
        


        //after logging in - entering text or keywords
        await driver.manage().setTimeouts( { implicit: 7000 } );  
        console.log(xpathexpression);

try {
        const element = await driver.wait(until.elementLocated(By.xpath(xpathexpression)), 1000); //==
        await driver.executeScript('arguments[0].scrollIntoView()', element);
        await driver.executeScript('arguments[0].scrollIntoView()', element);

        
        
        //var campaignText = await driver.findElement(By.xpath(xpathexpression));
       // var nameOfCampaign = campaignText.getText();
         //console.log('Campaign Name -' +nameOfCampaign);

         await driver.sleep(2000);

        await element.click();

       

  
        
        

        await driver.manage().setTimeouts( { implicit: 7000 } ); 
        await driver.findElement(By.xpath("//button[normalize-space()='Yes!']")).click();
        await driver.sleep(5000);

        
        let handles = await driver.getAllWindowHandles();
        await driver.switchTo().window(handles[1]);
        await driver.manage().setTimeouts( { implicit: 7000 } ); 
     
        //await driver.navigate().refresh();

        await driver.switchTo().window(handles[0]);
        await driver.close();

        handles = await driver.getAllWindowHandles();
        await driver.switchTo().window(handles[0]);

        } catch (error) {
          console.error(error);
        }

        let errorArray = [];
        //let errorArray2 = [];
      
        try {


        const titleName = driver.findElement(By.xpath("//h3[@class='no-margin']"));
        await titleName.getText().then(function(text){
          console.log('Title Name is - '+text);
        });

        
        const iframeElement = await driver.findElement(By.xpath("//*[@id='iframe']"));
        await driver.switchTo().frame(iframeElement);

       

        const idnumber= driver.findElement(By.xpath("//*[@id='viewer']/div[1]/div[2]/span[6]"));
        await idnumber.getText().then(function(text) {
          //console.log('ID number is *' +text);
         });
        
         await driver.manage().setTimeouts( { implicit: 20000 } ); 
         await driver.findElement(By.xpath("(//*[normalize-space()='AFFIDA'])[1]")).getText().then(actualText => {
          const expectedText = 'AFFIDA';
          assert.equal(actualText, expectedText);
          assert.equal(actualText, expectedText, `actual text "${actualText}"  does not match "${idnumber}"` )
        });


        let pdfMonth =  driver.findElement(By.xpath("//*[@id='viewer']/div[1]/div[2]/span[80]"));
        await pdfMonth.getText().then(function(text) {
          //console.log('month is ' +text);
         });

        let pdfDay = driver.findElement(By.xpath("//*[@id='viewer']/div[1]/div[2]/span[81]"));
        await pdfDay.getText().then(function(text) {
          //console.log('day is ' +text);
         });

        let pdfYear = driver.findElement(By.xpath("//*[@id='viewer']/div[1]/div[2]/span[82]"))
        await pdfYear.getText().then(function(text) {
          //console.log('year is ' +text);
         });

        // console.log (`${pdfMonth} / ${pdfDay} / ${pdfYear}`);

        /*if (pdfMonth.toString() === 5 || pdfDay.toString() === 16 || pdfYear.toString() === 2023){

          console.log ("Date is good")
        } else  {
          let badDate = await driver.getCurrentUrl();
          let timestamps = new Date().toISOString().slice(0, -5).replace(/:/g, '-');

          fs.appendFileSync(`dateissue-${timestamps}.txt`, badDate + '\n');

        }*/



        await driver.switchTo().defaultContent();
        
        await driver.findElement(By.xpath("//a[normalize-space()='Search Campaign Finance System']")).click();
        await driver.findElement(By.xpath("//a[normalize-space()='Find a Campaign Financial Report']")).click();




      } catch (error){

        await driver.sleep(1000);
        let brokenPDFlink = await driver.getCurrentUrl();
        let cutURL = brokenPDFlink.substring(brokenPDFlink.indexOf("v2/")+ 3);
        const buffer = Buffer.from(cutURL, 'base64');
        const deocodedfor = Buffer.from(cutURL, 'base64').toString("ascii");
        console.log(deocodedfor);
        
        await driver.sleep(2000);

        let screenshot = await driver.takeScreenshot();
        let timestamp = new Date().toISOString().slice(0, -5).replace(/:/g, '-');
        fs.writeFileSync(`screenshot-${timestamp}.png`, screenshot, {encoding: 'base64'});

        
        //errorArray2.push(deocodedfor)
        errorArray.push(brokenPDFlink);

        /*let timestamp = new Date().toISOString().slice(0, -5).replace(/:/g, '-');
        //fs.appendFileSync(`decoded-${timestamp}.txt`, deocodedfor + '\n');*/
        fs.appendFileSync('URLs-Decoded.txt', `Page number - ${page} | - ${xpathexpression} ` + '\n');
        fs.appendFileSync('URLs-Decoded.txt', deocodedfor + '\n');

        console.log("Broken PDF Link----"+brokenPDFlink);
        
      
        //fs.appendFileSync('BrokenPDFLinks.txt', brokenPDFlink + '\n');

        await driver.sleep(2000);

        try {

        await driver.switchTo().defaultContent();
        await driver.findElement(By.xpath("//a[normalize-space()='Search Campaign Finance System']")).click();
        await driver.sleep(1000);
        await driver.findElement(By.xpath("//a[normalize-space()='Find a Campaign Financial Report']")).click();}
        catch (error) {

        }

        


      } 


       continue;
      } //--for loop first page

      continue;
    }



      await driver.quit();


});
});
