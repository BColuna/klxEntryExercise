# Exercise

· The exercise should be done using CYPRESS
· The candidate should use any good practice they think is relevant
· should be made available in a git repository

Scenario: Test the functionality of login, adding products to the cart, and completing the purchase, including:
· Verification of behavior with valid login credentials.
· Adding products to the cart.
· Verification of items in the cart.
· Completing the purchase process.

1.             Login with Valid Credentials:

    · Visit the page. Https://www.saucedemo.com/
    · Enter a valid username and password (standard_user / secret_sauce).
    · Verify that the login was successful and the products page is displayed.

2.             Adding Products to Cart:

    · Add two products to the cart.
    · Verify that the products were added correctly to the cart.

3.             Complete the Purchase:
    · Complete the purchase by filling in the necessary information.
    · Verify that the purchase was successfully completed.

# TO RUN

1. using GUI:
   - npx cypress open
2. terminal:
   - npx cypress run --browser chrome
