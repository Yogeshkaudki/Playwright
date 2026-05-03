const {test, expect}=require('@playwright/test');
const { clear } = require('node:console');

test('Browser context playwright',async({browser})=>{

  const context= await browser.newContext();
    const page =await context.newPage();
  await page.goto('https://rahulshettyacademy.com/');

})

test.only('Page playwright test',async({page})=>{

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log(await page.title())
 
  const username=page.locator('input#username');
  const password=page.locator('input#password');
  const signbtn=page.locator('input#signInBtn')
  const cardTitles=page.locator('.card-title a');
  //await expect(page).toHaveTitle("Google");
  await page.locator('input#username').fill("rahulsheetty");
  await username.fill("rahulshettyacademy");
  await password.fill("Learning@830$3mK2");
  await signbtn.click();

  console.log(await cardTitles.first().textContent());
  console.log(await cardTitles.nth(1).textContent());
  //console.log(await page.locator('[style*=block]').textContent());
  // expect(page.locator('[style*=block]')).toContainText("Incorrect")

const allTitles= await cardTitles.allTextContents();
console.log(allTitles);

})