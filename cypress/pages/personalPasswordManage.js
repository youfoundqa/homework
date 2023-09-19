class personalPasswordManage {
    startFreeTrialButton() {
        return  cy.get('a[href*="/try-premium/"]').first()
    }
}
export default personalPasswordManage