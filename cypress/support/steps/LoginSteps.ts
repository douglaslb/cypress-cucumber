import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps'

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage()

Given('I access to Twitter website', () => {
  loginPage.accessWebsite()
})

And('I go to the login page', () => {
  loginPage.clickLoginButton()
})

Then('I should see the forgot password option.', () => {
  loginPage.findForgotPasswordButton()
})
