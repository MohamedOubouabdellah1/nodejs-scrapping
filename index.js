const puppeteer  =require('puppeteer');

const start = async () => {
 const browser = await puppeteer.launch();
 const page = await browser.newPage();
 await page.goto("https://learnwebcode.github.io/practice-requests/");
 await page.screenshot({path: "img.png"});
 await browser.close();
}

start();