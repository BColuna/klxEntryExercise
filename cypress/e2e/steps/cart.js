import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

When("User clicks checkout", () => {
  cy.get("#checkout").click();
});

When(
  "User inputs {string}, {string} and {string}",
  (firstname, lastname, postalcode) => {
    cy.get("#first-name").type(firstname);
    cy.get("#last-name").type(lastname);
    cy.get("#postal-code").type(postalcode);
  }
);

When("User clicks continue", () => {
  cy.get("#continue").click();
});

When("User clicks finish", () => {
  cy.get("#finish").click();
});

Then("User is in cart page", () => {
  cy.url().should("eq", "https://www.saucedemo.com/cart.html");

  cy.get("#checkout").should("be.visible");
});

Then("User is in step one page", () => {
  cy.url().should("eq", "https://www.saucedemo.com/checkout-step-one.html");

  cy.get("#continue").should("be.visible");
});

Then("User is in step two page", () => {
  cy.url().should("eq", "https://www.saucedemo.com/checkout-step-two.html");

  cy.get("#finish").should("be.visible");
});

Then("User is in checkout complete page", () => {
  cy.url().should("eq", "https://www.saucedemo.com/checkout-complete.html");

  cy.get("#back-to-products").should("be.visible");
});

Then("Product {string} is in the cart", (product) => {
  cy.get(".cart_item").contains(product).should("be.visible");
});

Then("Product {string} is listed", (product) => {
  cy.get(".inventory_item_name").contains(product).should("be.visible");
});

Then("Total is {string}", (total) => {
  cy.get(".summary_total_label").contains(total).should("be.visible");
});
