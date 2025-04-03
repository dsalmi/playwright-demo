import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly newUserSignupHeader: Locator;
  readonly newUserNameInput: Locator;
  readonly newUserEmailInput: Locator;
  readonly newUserSignupButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newUserSignupHeader = page.getByText("New User Signup!");
    this.newUserNameInput = page.getByTestId("signup-name");
    this.newUserEmailInput = page.getByTestId("signup-email");
    this.newUserSignupButton = page.getByRole("button").getByText("Signup");
  }

  async enterNewUserInformation(name, email) {
    await this.newUserNameInput.fill(name)
    await this.newUserEmailInput.fill(email)
  }

  async clickNewUserSignupButton() {
    await this.newUserSignupButton.click()
  }
}