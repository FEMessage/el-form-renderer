/// <reference types="Cypress" />

describe('测试 disabled 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('disabled')
  })
  it('禁用全部', function() {
    cy.contains('disabled')
    cy.$getFormItemInput('name').should('be.enabled')
    cy.contains('禁用全部').click()
    cy.$getFormItemInput('name').should('be.disabled')
  })
})
