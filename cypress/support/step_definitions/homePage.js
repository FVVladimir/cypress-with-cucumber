import { When, Then} from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
    cy.visit(" https://qauto.forstudy.space/", {
        auth: {
            username: "guest",
            password: "welcome2qauto"
        }
    })
})

Then("All icons is visible", () => {
    cy.get(".icon-facebook").should("be.visible")
    cy.get(".icon-telegram").should("be.visible")
    cy.get(".icon-youtube").should("be.visible")
    cy.get(".icon-instagram").should("be.visible")
    cy.get(".icon-linkedin").should("be.visible")
})

When("I click the button sign in", () => {
    cy.get('.header_signin').click()
})

Then("the form sign in should is visible", () => {
    cy.get(".modal-content").should("be.visible")
})

When("I click the button sign up", () => {
    cy.get('.hero-descriptor_btn').click()
})
Then("the form sign up is visible", () => {
    cy.get(".modal-title").should("have.text", "Registration")
})