import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { SignupPage } from '../pages/signup';
import { sign } from 'crypto';

test('register user', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const signupPage = new SignupPage(page);

  await homePage.goto();
  await homePage.navigateToLogin();

  await loginPage.enterNewUserInformation("Dave", "coolguydave2@test.com");
  await loginPage.clickNewUserSignupButton();

  await expect(signupPage.enterAccountInfoHeader).toBeVisible();
  await signupPage.selectTitleMr();
  await signupPage.enterDetails("name", "password");
  await signupPage.enterDob("3", "April", "2000");
  await signupPage.checkNewsletterCheckbox();
  await signupPage.checkSpecialOfferCheckbox();
  await signupPage.enterAddressInformation("first", "last", "company", "123 4th Street", "apartment 1a", "United States", "state", "city", "zip", "phone");
  await signupPage.clickCreateAccountButton();
  await expect(signupPage.accountCreationConfirmationText).toBeVisible();
  await signupPage.clickContinueButton();

  await expect(homePage.loggedInUserText).toBeVisible();
  await homePage.clickDeleteAccountButton();
  await expect(homePage.accountDeletedConfirmationText).toBeVisible();
  await homePage.clickContinueButton();
});

test('login with valid credentials', async ({ page }) => {

});

test('login with invalid credentials', async ({ page }) => {
    
});

test('logout', async ({ page }) => {
    
});

test('register with existing email', async ({ page }) => {
    
});