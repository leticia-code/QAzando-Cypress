/// <reference types="cypress" />

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"

const email = 'leticiacardo@gmail.com'
const password = '123456'

Given("I am on login screen", () => {
    home_page.accessLogin()
})

Given("I fill e-mail", () => {
    login_page.fillEmail(email)
})

Given("I fill my credencials", () => {
    login_page.fillEmail(email)
    login_page.fillPassword(password)
})

When("I click on Login",  () => {
     login_page.doLogin()
})

Then("I see the message {string}", (message) => {
    login_page.checkErrorMessage(message)
})

Then("I see success message",  () => {
    login_page.checkSuccessMessage(email)
})