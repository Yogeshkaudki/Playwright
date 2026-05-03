const {test, expect}=require('@playwright/test');
const { clear } = require('node:console');


test.only('Page playwright test',async({page})=>{

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  console.log(await page.title())
 
  const email=page.locator('input#userEmail');
  const password=page.locator('input#userPassword');
  const signbtn=page.locator('input#login');
  const cardTitles=page.locator('.card-body b');
  //await expect(page).toHaveTitle("Google");
  await email.fill("ykaudki777@gmail.com");
  await password.fill("Yogesh@123");
  await signbtn.click();

  console.log(await cardTitles.first().textContent());
  console.log(await cardTitles.nth(1).textContent());
  //console.log(await page.locator('[style*=block]').textContent());
  // expect(page.locator('[style*=block]')).toContainText("Incorrect")
  //await page.waitForLoadState('networkidle');
await page.locator('.card-body b').first().waitFor();
const allTitles= await cardTitles.allTextContents();
console.log(allTitles);
})