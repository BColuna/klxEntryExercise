Feature: Login to a website
  Scenario: Successful login
    Given User opens the website
    When User enters username "standard_user" and password "secret_sauce"
    And User clicks the login button
    Then User should be logged in