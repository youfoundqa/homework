import { newMail } from "../functions/mainFunctions"
import homePage from "../pages/homePage"
import personalPasswordManage from "../pages/personalPasswordManage"
import tryPremium from "../pages/tryPremium"

const home = new homePage();
const personalPass = new personalPasswordManage();
const premium = new tryPremium();

describe('template spec', () => {

  beforeEach(() => {
    cy.viewport(1000, 660)
    cy.visit('https://nordpass.com')
    cy.contains('Accept all').click() // Click on first el containing 'Accept all'
  })

  it('Download program', () => {
    home.personalButton().click()
    personalPass.startFreeTrialButton().click()
    premium.emailField().type(newMail())
    premium.submitButton().submit()
    cy.window().then((win) => {
      win.fbq = () => {}; 
    });
});

  
  it('LOGIN', () => {
    home.menu().click()
    home.login().click()
    home.loginNordAccount().invoke("removeAttr", "target")
    home.loginNordAccount().click()
    cy.url().should('include', 'login');
  })
})

