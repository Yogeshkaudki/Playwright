const {test,expect} = require("@playwright/test");

test("dialogs and hover validation", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForLoadState("networkidle");

//    await page.goto("https://google.com/");

//    await  page.goBack();
//     await page.goForward();

    await page.locator("#displayed-text").isVisible();
    await page.locator("#hide-textbox").click();
    await page.locator("#displayed-text").isHidden();

   // page.pause();
    await page.on("dialog", dialog=>dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.waitForTimeout(500);
    
    //await page.locator("#mouseover").waitFor({state: 'visible'});
    await page.locator("#mouseover").hover();
const framePages= page.frameLocator("course-iframe");
await framePages.locator("li a[href*='lifetime-access']:visible").click();

const textcheck=await framePages.locator("text.h2").textContent();
console.log(textcheck.split(" ")[1]);


})
