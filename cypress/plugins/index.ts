/// <reference types="cypress" />
import cucumber from 'cypress-cucumber-preprocessor'
import { defaultOptions } from '@cypress/browserify-preprocessor'
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on) => {
  const options = {
    defaultOptions,
    typescript: require.resolve('typescript'),
  }

  on('file:preprocessor', cucumber(options))
}
