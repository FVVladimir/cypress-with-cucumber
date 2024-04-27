Feature: Log In tests
    
    Feature Description: type correct logIn check the login done
                         type epty fields check the error massage
                         type not correct logIn check the error massage

  Scenario: Susseccfull login
    Given  I am on the login page
    When I enter my password and user name
    And I click the login button
    Then  i should be taken on main page                       
  
  Scenario: Empty login and password fields
    Given  I am on the login page
    When I do not enter login and password
    And I click the login button
    Then  i should be seen error massage                      
  
  Scenario: Not correct login and password
    Given  I am on the login page
    When I enter my password and user name
    And I click the login button
    Then  i should be taken on main page                       