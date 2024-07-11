import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

When("User adds {string} to the cart", (product) => {
  cy.get(".inventory_item").contains(product).click();
  cy.get("#add-to-cart").click();
  cy.get("#back-to-products").click();
});

When("User opens cart", (product) => {
  cy.get("#shopping_cart_container").click();
});

Then("Cart icon should count {string}", (count) => {
  cy.get("#shopping_cart_container").contains(count);
});
