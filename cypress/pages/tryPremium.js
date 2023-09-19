class tryPremium {
    emailField() {
        return cy.get('*[id^="input-label-"]').last()
    }
    submitButton() {
        return cy.get('form').last()
    }
}
export default tryPremium