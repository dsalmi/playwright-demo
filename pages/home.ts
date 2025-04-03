import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly signupLoginLink: Locator;
  readonly deleteAccountButton: Locator;
  readonly accountDeletedConfirmationText: Locator;
  readonly continueButton: Locator;
  readonly loggedInUserText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLoginLink = page.getByRole("link").getByText("Signup / Login");
    this.deleteAccountButton = page.getByRole("link").getByText("Delete Account");
    this.accountDeletedConfirmationText = page.getByText("Account Deleted!");
    this.continueButton = page.getByRole("link").getByText("Continue");
    this.loggedInUserText = page.getByText("Logged in as");
  }

  async goto() {
    await this.page.goto('https://www.automationexercise.com');
  }

  async navigateToLogin() {
    await this.signupLoginLink.click()
  }

  async clickDeleteAccountButton() {
    await this.deleteAccountButton.click();
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }
}