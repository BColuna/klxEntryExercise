import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("User opens the website", () => {
  cy.visit("https://www.saucedemo.com/");
});

When(
  "User enters username {string} and password {string}",
  (username, password) => {
    cy.get("#user-name").type(username);

    cy.get("#password").type(password);
  }
);

And("User clicks the login button", () => {
  cy.get("#login-button").click();
});

Then("User should be logged in", () => {
  cy.url().should("eq", "https://www.saucedemo.com/inventory.html");

  cy.get("#inventory_container").should("be.visible");
});
