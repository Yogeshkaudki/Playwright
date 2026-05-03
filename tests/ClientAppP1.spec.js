const {test, expect}=require('@playwright/test');
const { clear } = require('node:console');


test.only('Page playwright test',async({page})=>{

  const productName="ZARA COAT 3";
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

const count = await cardTitles.count();
for (let i = 0; i < count; i++) {
  if ((await cardTitles.nth(i).textContent()) === productName) {
    await page.locator('.card-body', { hasText: productName }).locator('button:has-text("Add To Cart")').click();
    break;
  }
}

await page.locator("[routerlink='/dashboard/cart']").click();
await page.locator("div li").first().waitFor();
const bool=await page.locator('h3:has-text("ZARA COAT 3")').isVisible();
expect(bool).toBeTruthy();
await page.locator("text=Checkout").click();
await page.locator("[placeholder='Select Country']").pressSequentially("ind");
const dropdown=await page.locator(".ta-results");
await dropdown.waitFor();
const optioncount=await dropdown.locator("button").count();

for (let i = 0; i < optioncount; i++) {
  const text = await dropdown.locator("button").nth(i).textContent();
  if (text.trim() === "India") {
    await dropdown.locator("button").nth(i).click();
    break;
  }
}

await expect(page.locator('label[type="text"]')).toHaveText("ykaudki777@gmail.com");
await page.locator(".btnn.action__submit.ng-star-inserted").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order.");
const orderID= await page.locator("label[class='ng-star-inserted']").textContent();
console.log(orderID)
await page.locator('button[routerlink="/dashboard/myorders"]').click();
await page.locator("tbody").waitFor();
const rows= await page.locator("tbody tr");
const rowCount=await rows.count();
for(let i=0;i<rowCount;i++){
  const orderId=await rows.nth(i).locator("th").textContent();
  if(orderId.includes(orderID))
  {
    await rows.nth(i).locator("button").first().click();
    break;
  }
}
const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderID.includes(orderIdDetails.trim())).toBeTruthy();
})