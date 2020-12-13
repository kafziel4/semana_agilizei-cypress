// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Background login
Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0uTexK9y%2BJX3K3fWO%2B%2B3FBjE2cXritPx7tVRiA1TgAABGm8TTKygLeiSmCO49afmXBms0Vx9Dj7Gcd5MaJa1RxTSmvbb9JHpKA4yMUO9V%2BqCk9kbywugABGAW53btj6f7eJAEs2lBMllotHkvbxKu5uzktYEkUW3x1zj0ZPEAHDgaQuiA1uIHuLsrLE7vEI%2FZtCRrMbgExqEtZ%2B65TzfggQbC7z4u5a9VIdOH%2B%2BmM2UsVu9zixRllXzqx1LOKo38sTHPlThcV58a1e9eJwR4ZAyhv9bcSJ5qQ6fWL0AmiuQWqcBrqiDr6EXquThIhQGfAjcihu9DSdBvkUpP8%2BybBbPgwXAsH8RCbVRTJ6DeIgTQT6VL5r6DYKCv5glaXZk0q0lsAz3VoMaVUNXgYh8x94o05CxgOOtEj%2BfI3b%2FLpWTI000330'
    );
})     