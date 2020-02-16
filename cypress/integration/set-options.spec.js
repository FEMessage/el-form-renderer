/// <reference types="Cypress" />

describe('测试 set-options 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('set-options')
  })
  it('基础用例', function() {
    cy.$getFormItemInput('select').click()
    cy.contains('shanghai').should('be.visible')
    cy.contains('beijing').should('be.visible')
    cy.contains('guangzhou').should('not.exist')
    cy.contains('hangzhou').should('not.exist')
    cy.contains('button', 'set').click()
    cy.$getFormItemInput('select').click()
    cy.contains('shanghai').should('not.exist')
    cy.contains('beijing').should('not.exist')
    cy.contains('guangzhou').should('be.visible')
    cy.contains('hangzhou').should('be.visible')
  })
})
