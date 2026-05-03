const {test, expect}=require('@playwright/test');
const { clear } = require('node:console');
const { setUncaughtExceptionCaptureCallback } = require('node:process');


test('Page playwright test',async({page})=>{


  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   const username=page.locator('input#username');
 const password=page.locator('input#password');
 await username.fill("rahulshettyacademy");
await password.fill("Learning@830$3mK2");

 const dropdown= await page.locator('.form-control');

  await dropdown.selectOption('consult');

  
  await page.locator('.radiotextsty').last().click();
  await page.locator('#okayBtn').click();
  console.log(await page.locator('.radiotextsty').last().isChecked());
  expect(await page.locator('.radiotextsty').last()).toBeChecked();

  await page.locator('#terms').click();
    await page.locator('#terms').toBeChecked();
      await page.locator('#terms').uncheck();

  expect(page.locator('#terms').isChecked()).toBeFalsy();
  const link= page.locator("a[href*='documents-request']");
  expect(await link).toHaveAttribute('class','blinkingText');
  
})

test.only('Handling child windows',async({browser})=>{
    const context=await browser.newContext();
   const page= await context.newPage();
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   const Documentlink=page.locator("a[href*='documents-request']");

   const [newPage]=await Promise.all([
    context.waitForEvent('page'),
    Documentlink.click()
   ])

   const text=await newPage.locator('.red').textContent();
   console.log(text);
   const ArrayText=text.split("@");
   const domain=ArrayText[1].split(' ')[0];
   //console.log(domain);

   await page.locator('#username').fill(domain);
  // await page.pause();
  // console.log(await page.locator('username').textContent());
   console.log(await page.locator('#username').inputValue());


})