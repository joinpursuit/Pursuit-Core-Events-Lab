describe('My First Test', () => {
  it('Adds a new to-do to the list', () => {
    cy.visit('./index.html')
    cy.get("#todo-input").type("Wash dishes")
    cy.contains("Add to list").click()
    cy.get("li").should(($li) => {
      expect($li).to.have.length(1)
      expect($li.first()).to.contain('Wash dishes')
    })
  })
})
