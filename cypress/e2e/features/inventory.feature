Feature: Add to cart

Background: User is Logged In
	Given User opens the website
    When User enters username "standard_user" and password "secret_sauce"
    And User clicks the login button
    Then User should be logged in

Scenario: Add to cart
    When User adds "Sauce Labs Backpack" to the cart
    Then Cart icon should count "1"
    And User adds "Sauce Labs Onesie" to the cart
    Then Cart icon should count "2"
    When User opens cart
    Then User is in cart page
    And Product "Sauce Labs Backpack" is in the cart
    And Product "Sauce Labs Onesie" is in the cart