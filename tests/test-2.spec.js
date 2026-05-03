import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://learn-staging.brightchamps.com/');
  await page.getByRole('spinbutton', { name: 'Mobile Number' }).click();
  await page.getByRole('spinbutton', { name: 'Mobile Number' }).fill('5432112345');
  await page.getByRole('radio', { name: 'Grade 6' }).check();
  await page.getByRole('img', { name: 'drop-down' }).click();
  await page.getByRole('textbox', { name: 'Country Code' }).fill('un');
  await page.getByText('United States of America (+1)').click();
  await page.getByRole('radio', { name: 'No' }).check();
  await page.getByText('x Uh-oh! To ensure a great').click();
  await page.getByText('x', { exact: true }).click();
  await page.getByRole('radio', { name: 'Yes' }).check();
  await page.getByRole('button', { name: 'calender icon Book a Free' }).click();
  await page.getByText('Select Time Zone').click();
  await page.getByText('Eastern Standard Time (').click();
  await page.locator('#date-1').nth(1).check();
  await page.getByRole('radio', { name: '9:30 AM' }).check();
  await page.getByRole('button', { name: 'Confirm Class Time' }).click();
  await page.getByRole('textbox', { name: 'Child\'s Name' }).click();
  await page.getByRole('textbox', { name: 'Child\'s Name' }).fill('TestChild');
});