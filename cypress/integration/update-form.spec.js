/// <reference types="Cypress" />

describe('测试 update-form 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('update-form')
  })
  it('基础用例', function() {
    cy.$getFormItemInput('name').should('have.value', '')
    cy.contains('button', 'set name as alvin').click()
    cy.$getFormItemInput('name').should('have.value', 'alvin')
  })
})
