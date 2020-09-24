/// <reference types="Cypress" />

describe('测试 get-form-value 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('get-form-value')
  })
  it('基础用例', function() {
    cy.get('pre').contains('{}')
    cy.contains('print').click()
    cy.get('pre').contains('"name": "alvin"')
  })
})
