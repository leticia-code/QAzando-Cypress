/// <reference types="cypress" />

export default {

    doRegister() {
        cy.get('#btnRegister')
            .should('be.visible')
            .click()
    },


    checkErrorMessageRegister(message) {
        cy.get('#errorMessageFirstName')
            .should('have.text', message)

    },

    nameRegister(name) {
        cy.get('#user')
            .type(name)
    },

    emailRegister(email){
        cy.get('#email')
            .type(email)
    },

    passwordRegister(password){
        cy.get('#password')
            .type(password)
    },

    checkSuccessMessage(name) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${name}`)
    },

}