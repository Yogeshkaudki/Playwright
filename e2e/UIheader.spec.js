import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://learn-staging.brightchamps.com/book-trial-class?courseId=1&fmt=51');
  
  await expect(page.locator('#topCompanyLogo')).toBeVisible();
  await page.locator('#topCompanyLogo').click();

  await expect(page.getByText('Curriculum', { exact: true })).toBeVisible();
  await expect(page.getByText('Community')).toBeVisible();
  await expect(page.getByText('Educators', { exact: true })).toBeVisible();
  await expect(page.getByText('FAQs')).toBeVisible();
  await expect(page.getByText('Book Now', { exact: true })).toBeVisible();
  await page.getByText('Curriculum', { exact: true }).click();
  await page.getByText('Community').click();

  await expect(page.getByRole('heading', { name: 'BrightCHAMPS Parents Speak Up' })).toBeVisible();
  await page.getByText('Educators', { exact: true }).click();

  await expect(page.getByRole('heading', { name: 'Meet the team of global' })).toBeVisible();
  await page.getByText('FAQs').click();

  await expect(page.getByRole('heading', { name: 'Explore more of BrightCHAMPS' })).toBeVisible();
  await page.getByText('Book Now', { exact: true }).click();

  await expect(page.getByText('Code Fun, Code Future')).toBeVisible();
  await expect(page.getByText('Coding for Kids')).toBeVisible();
  await expect(page.getByText('Make your child a tech')).toBeVisible();

  await expect(page.getByText('Get an expert certification')).toBeVisible();
  await expect(page.getByText('Flexible class schedule')).toBeVisible();
  await expect(page.getByText('Preparation for school')).toBeVisible();
  await expect(page.getByText('For ages 6-')).toBeVisible();
  await expect(page.getByRole('img', { name: 'start' })).toBeVisible();
  

await expect(page.getByText('Trustpilot', { exact: true })).toBeVisible();

await expect(page.getByRole('img', { name: 'star', exact: true })).toBeVisible();
await expect(page.getByText('TrustScore 4.7 500+ reviews')).toBeVisible();

});