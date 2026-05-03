import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://learn-staging.brightchamps.com/book-trial-class?courseId=1');
  await page.getByText('Coding for Kids').click();
  await page.getByRole('img', { name: 'star', exact: true }).click();
  await page.getByRole('img', { name: 'copa' }).click();
  await page.getByRole('img', { name: 'harvard' }).click();
  await page.getByRole('button', { name: 'logo View Curriculum' }).click();
  await page.getByRole('button', { name: 'X' }).click();
  await page.getByRole('button', { name: 'Schedule a Free Class' }).click();
  await page.getByRole('img', { name: 'Financial Literacy' }).click();
  await expect(page.getByRole('heading', { name: 'Book Now & Get Certified' })).toBeVisible();
  await expect(page.locator('#submitButton1')).toContainText('Book a Free Trial Class');
});