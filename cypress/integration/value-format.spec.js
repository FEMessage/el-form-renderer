/// <reference types="Cypress" />

describe('测试 value-format 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('value-format')
  })
  it('基础用例', function() {
    cy.contains('set value').click()
    cy.$getFormItemInput('date')
      .first()
      .should('have.value', '2019-01-01')
      .next()
      .next()
      .should('have.value', '2019-01-02')
    cy.contains('log value').click()
    cy.contains(
      `{"startDate":"2019-01-01","endDate":"2019-01-02","date":["2019-01-01","2019-01-02"]}`,
    )
  })
})
