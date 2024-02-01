/// <reference types="cypress" />

import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import register_user_page from "../pages/register_user_page"

const name = 'Leticia Cardoso'
const email = 'leticiacardo@gmail.com'
const password = '123456'

Given("I am on register screen", () => {
    home_page.accessRegister()
})

Given("I fill name", () => {
    register_user_page.nameRegister(name)
})

Given("I fill an invalid e-mail {string}", () => {
    register_user_page.emailRegister('invalidEmail')
})

Given("I fill a valid e-mail {string}", () => {
    register_user_page.emailRegister(email)
})

Given("I fill password {string}", () => {
    register_user_page.passwordRegister('123')
})

Given("I fill my datas of register", () => {
    register_user_page.nameRegister(name)
    register_user_page.emailRegister(email)
    register_user_page.passwordRegister(password)
})

When("I click on Register", () => {
    register_user_page.doRegister()
})

Then("I see the message {string} on register", (message) => {
    register_user_page.checkErrorMessageRegister(message)
})

Then("I see success message on register",  () => {
    register_user_page.checkSuccessMessage(name)
})



