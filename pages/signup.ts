import { expect, type Locator, type Page } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly enterAccountInfoHeader: Locator;
  readonly titleMrInput: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly dobDayInput: Locator;
  readonly dobMonthInput: Locator;
  readonly dobYearInput: Locator;
  readonly newsletterCheckbox: Locator;
  readonly specialOfferCheckbox: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly addressInput: Locator;
  readonly address2Input: Locator;
  readonly countryInput: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreationConfirmationText: Locator;
  readonly continueButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.enterAccountInfoHeader = page.getByRole("heading").getByText("Enter Account Information");
    this.titleMrInput = page.getByRole('radio', { name: 'Mr.' });
    this.nameInput = page.getByRole("textbox", { name: /Name/ });
    this.emailInput = page.getByRole("textbox", { name: /Email/ });
    this.passwordInput = page.getByRole("textbox", { name: /Password/ });
    this.dobDayInput = page.locator("#days");
    this.dobMonthInput = page.locator("#months");
    this.dobYearInput = page.locator("#years");
    this.newsletterCheckbox = page.getByRole("checkbox", { name: "newsletter"});
    this.specialOfferCheckbox = page.getByRole("checkbox", { name: "offer"});
    this.firstNameInput = page.getByRole("textbox", { name: /First name/ });
    this.lastNameInput = page.getByRole("textbox", { name: /Last name/ });
    this.companyInput = page.getByRole("textbox", { name: "Company", exact: true });
    this.addressInput = page.getByRole("textbox", { name: /Address \*/ });
    this.address2Input = page.getByRole("textbox", { name: /Address 2/ });
    this.countryInput = page.getByRole("combobox", { name: /Country/ });
    this.stateInput = page.getByRole("textbox", { name: /State/ });
    this.cityInput = page.getByRole("textbox", { name: /City/ });
    this.zipcodeInput = page.locator("#zipcode");
    this.mobileNumberInput = page.getByRole("textbox", { name: /Mobile Number/ });
    this.createAccountButton = page.getByRole("button").getByText("Create Account");
    this.accountCreationConfirmationText = page.getByText("Account Created!");
    this.continueButton = page.getByRole("link").getByText("Continue");
  }

  async selectTitleMr() {
    await this.titleMrInput.check();
  }

  async enterDetails(name: string, password: string) {
    await this.nameInput.fill(name);
    await this.passwordInput.fill(password);
  }

  async enterDob(day: string, month: string, year: string) {
    await this.dobDayInput.selectOption(day);
    await this.dobMonthInput.selectOption(month);
    await this.dobYearInput.selectOption(year);
  }

  async checkNewsletterCheckbox() {
    await this.newsletterCheckbox.check();
  }

  async checkSpecialOfferCheckbox() {
    await this.specialOfferCheckbox.check();
  }

  async enterAddressInformation(firstName: string, lastName: string, company: string, address: string, address2: string, country: string, state: string, city: string, zipcode: string, mobileNumber: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.companyInput.fill(company);
    await this.addressInput.fill(address);
    await this.address2Input.fill(address2);
    await this.countryInput.selectOption(country);
    await this.stateInput.fill(state);
    await this.cityInput.fill(city);
    await this.zipcodeInput.fill(zipcode);
    await this.mobileNumberInput.fill(mobileNumber);
  }
  
  async clickCreateAccountButton() {
    await this.createAccountButton.click();
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }
}