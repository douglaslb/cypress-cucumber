/// <reference types="cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements()

const url = Cypress.config('baseUrl')

class LoginPage {
  //Access the website that is going to be tested
  accessWebsite() {
    cy.visit(url)
  }

  //Click on the login button
  clickLoginButton() {
    loginElements.loginButton().click()
  }

  // Check if there is a button named "Esqueceu a senha?"
  findForgotPasswordButton() {
    loginElements.forgotPasswordButton().should('exist')
  }
}

export default LoginPage
