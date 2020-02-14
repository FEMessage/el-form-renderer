/// <reference types="Cypress" />

describe('测试 github page 文档', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.get('li')
      .contains('basic')
      .click()
  })
  it('basic 示例', function() {
    cy.contains('basic')
    cy.contains('submit').click()
    cy.contains('miss name')
    const getInput = (label, el = 'input') =>
      cy.contains('.el-form-item', label).find(el)

    getInput('name').type('name')
    getInput('area').click()
    cy.contains('area1').click()
    getInput('date').click()
    cy.contains('此刻').click()
    cy.contains('typeA').click()
    cy.contains('resourceA').click()
    getInput('desc', 'textarea').type('desc')
    cy.contains('submit').click()
    cy.contains('submit!')
    cy.contains('reset').click()
    getInput('name').should('be.empty')
  })
})
