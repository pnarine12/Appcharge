import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import {selectors} from "../../support/selectors";

const player_id = 123456
const errorMsg = 'Not able to authenticate you at the moment'


Given(/^User is already on Appcharge store login page$/, ()=> {
    cy.visit('/')
});


Given(/^Click on 'Login with player ID' button on login page$/, function () {
    cy.get(selectors().acceptCookies).click()
    cy.get(selectors().loginWithPLayerID).click()
});


Given(/^Fill in player ID$/, function () {
    cy.get(selectors().playerIDField).type(player_id)
});


When(/^Click on 'Login' button$/, function () {
    cy.get(selectors().loginBtn).click()
});


Then(/^Assert that user is navigated to Appcharge store homepage$/, function () {
    cy.url().should('contain', '/shop')
});

Given(/^Fill space in player ID field$/, function () {
    cy.get(selectors().playerIDField).type(" ")
});

Then(/^Assert that user authentication failed$/, function () {
    cy.url().should('contain', 'failed')
    cy.get(selectors().errorMsg).should('contain', errorMsg)
});

Given(/^Login as Appcharge store user$/, function () {
    cy.login(player_id)
});

Given(/^Click on Appcharge smaller logo$/, function () {
    cy.get(selectors().logoIcon).click()
});

When(/^Click on 'Logout'$/, function () {
    cy.get(selectors().logoutModal).should("exist")
    cy.get(selectors().logoutBtn).click()
});

Then(/^Assert that user is successfully logged out from the store$/, function () {
    cy.url().should('contain', 'login')
});