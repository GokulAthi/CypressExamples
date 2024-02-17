describe('Test suite', () => {
  it('Test 1', () => {
    cy.visit('https://www.google.com/')
    cy.get("textarea[name='q']").type("crazyautomator")
    cy.get("img[alt='Google']").click()
    cy.get("form[role='search']>div>div>div[class]:not([style]) input[value*='Google Search']").click()
  })
})