import {selectors} from "./selectors";

Cypress.Commands.add('login', (arg)=>{
    cy.get(selectors().acceptCookies).click()
    cy.get(selectors().loginWithPLayerID).click()
    cy.get(selectors().playerIDField).type(arg)
    cy.get(selectors().loginBtn).click()
})

