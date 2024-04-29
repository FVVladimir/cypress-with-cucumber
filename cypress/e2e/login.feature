Feature: Log In tests

    Feature Description: type correct logIn check the login done
    type empty fields check the error massage
    type not correct logIn check the error message

    Scenario: Susseccfull login
        Given I am click on the button Sign IN     
        When  I type email
        When I type password
        When Click button Login
        Then I should sign in

    Scenario: Empty login fields
        Given I am click on the button SignIN       
        When I click the email field
        When I click the password field        
        Then error message should be visible
    
    Scenario: Empty password fields
        Given I am click on the button SignIn       
        When I click the Password field
        When I click the Email field        
        Then Error message should be visible

    Scenario: Not correct email
        Given  I am click oN the button SignIn     
        When  I type not correct email
        When I type Password
        When I Click button login
        Then Error message not correct email
    
    Scenario: Not correct password
        Given  I am click On the button signIn
        When I type correct email
        When  I type not correct password
        When I click on the button login  
        Then  Error message not correct password 