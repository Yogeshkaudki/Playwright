import { test, expect } from '@playwright/test';

test('playwright special locators',async({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.locator("div[class='form-group'] input[name='name']").fill("Yogesh");
    await page.getByLabel("Employed").check();
await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Gender").selectOption("Male");
await page.getByPlaceholder("Password").fill("Yogesh@123");
await page.getByRole("button",{name :"submit"}).click();
await page.getByText("Success ! The Form has been submitted successfully!.").isVisible();
await page.getByRole("link",{name :"Shop"}).click();
await page.locator("app-card").filter({hasText:"iphone X"}).getByRole("button").click();
})