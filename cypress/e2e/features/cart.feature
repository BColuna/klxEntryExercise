Feature: Complete purchase

Background: User is Logged In and has products in cart
	Given User opens the website
    When User enters username "standard_user" and password "secret_sauce"
    And User clicks the login button
    Then User should be logged in
    When User adds "Sauce Labs Backpack" to the cart
    And User adds "Sauce Labs Onesie" to the cart
    And User opens cart
    Then User is in cart page

Scenario: Complete purchase
    When User clicks checkout
    Then User is in step one page
    When User inputs "First Name", "Last Name" and "Zip code"
    And User clicks continue
    Then User is in step two page
    And Product "Sauce Labs Backpack" is listed
    And Product "Sauce Labs Onesie" is listed
    And Total is "41.02"
    When User clicks finish
    Then User is in checkout complete page