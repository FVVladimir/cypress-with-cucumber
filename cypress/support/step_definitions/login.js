import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
      cy.visit(" https://qauto.forstudy.space/", {
            auth: {
                  username: "guest",
                  password: "welcome2qauto"
            },
            failOnStatusCode: false
      })            
})
Given("I am click on the button Sign IN", () => {
     
      cy.contains("Sign In").click()
})

When('I type email', () => {      
      cy.get('input#signinEmail').type('emir@ua.fm')
})
When('I type password', () => {
      cy.get('input#signinPassword').type('Qwerty12345')
})
When("Click button Login", () => {
      cy.contains('Login').click()
})
Then('I should sign in', () => {
      cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage')
})


Given("I am click on the button SignIN", () => {      
     
      cy.contains("Sign In").click()
})

When('I click the email field', () => {      
      cy.get('input#signinEmail').click()
})
When('I click the password field', () => {
      cy.get('input#signinPassword').click()
})
Then('error message should be visible', () => {
      cy.get('.invalid-feedback').should("be.visible")      
})

Given("I am click on the button SignIn", () => {      
     
      cy.contains("Sign In").click()
})

When('I click the Password field', () => {
      cy.get('input#signinPassword').click()
})

When('I click the Email field', () => {      
      cy.get('input#signinEmail').click()
})
Then('Error message should be visible', () => {
      cy.get('.invalid-feedback').should("have.text","Password required")      
})

Given("I am click oN the button SignIn", () => {      
     
      cy.contains("Sign In").click()
})

When('I type not correct email', () => {      
      cy.get('input#signinEmail').type('emir@i.ua')
})

When('I type Password', () => {
      cy.get('input#signinPassword').type('Qwerty12345')
})
When("I Click button login", () => {
      cy.contains('Login').click()
})

Then('Error message not correct email', () => {
      cy.get('.alert').should("have.text","Wrong email or password")      
})

Given("I am click On the button signIn", () => {      
     
      cy.contains("Sign In").click()
})
When('I type correct email', () => {      
      cy.get('input#signinEmail').type('emir@ua.fm')
})
When('I type not correct password', () => {
      cy.get('input#signinPassword').type('Qwerty123444')
})

When("I click on the button login", () => {
      cy.contains('Login').click()
})

Then('Error message not correct password', () => {
      cy.get('.alert').should("have.text","Wrong email or password")      
})


