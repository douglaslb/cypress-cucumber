/// <reference path="index.d.ts" />
import '@testing-library/cypress/add-commands'

Cypress.Commands.add('google', () => cy.visit('https://google.com'))
