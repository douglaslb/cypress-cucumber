class LoginElements {
  loginButton = () => cy.findByRole('link', { name: /Sign in/i })
  forgotPasswordButton = () =>
    cy.findByRole('button', { name: /Forgot password?/ })
}

export default LoginElements
