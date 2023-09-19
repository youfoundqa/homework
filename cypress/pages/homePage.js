class homePage {
    personalButton() {
        return cy.contains('Personal')
    }
    menu(){
        return cy.get('[data-testid="header-nav-burger"]')
    }
    login(){
        return cy.get('[data-testid="header-nav-login-btn"]')
    }
    loginNordAccount(){
        return cy.get('[data-testid="header-nav-login-nord-account"]')
    }
}
export default homePage