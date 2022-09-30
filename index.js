const puppeteer  =require('puppeteer');
const fs = require('fs/promises');

const scrapping = async () => {
 const browser = await puppeteer.launch({headless: false});
 const page = await browser.newPage();
 await page.goto('https://www.ouedkniss.com/');
 await page.waitForSelector('#input-62');
 await page.click('span.v-btn__content');
 await page.type('#input-62','iphone 13');
 await page.click('button.v-icon.notranslate.v-icon--link.mdi.mdi-magnify.theme--dark.error--text');
 await page.waitForSelector('span.primary--text.price');
 console.log( await page.$$eval('primary--text.price', (spans)=>{
  return [...spans].map(span =>{
    return span.innerHTML;
  })
 })
 )
  
 await browser.close();
}

scrapping();