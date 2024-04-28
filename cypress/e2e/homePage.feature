Feature: Home page tests

    Check the visibility icon and forms

    Scenario: icons visibility
        Given i am on te home page
        Then All icons is visible

    Scenario: Form sign up is visible
        Given  I am on the home page
        Then the form sign up is visible

    Scenario: Form sign in is visible
        Given  I am on the home page
        Then the form sign in is visible