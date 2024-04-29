Feature: Home page tests

    Check the visibility icon and forms

    Scenario: icons visibility
        # Given I am on the home page
        Then All icons is visible

    Scenario: Form sign up is visible
        # Given  I am on the home page
        When I click the button sign in
        Then the form sign in should is visible

    Scenario: Form sign in is visible
        # Given  I am on the home page
        When I click the button sign up
        Then the form sign up is visible