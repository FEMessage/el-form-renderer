/// <reference types="Cypress" />

describe('测试 deprecated 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('deprecated')
  })
  it('基础用例', function() {
    cy.contains('getFormValue').click()
    cy.contains('{}')
    cy.contains('resourceA').click()
    cy.contains('getFormValue').click()
    cy.contains('{"resource":"resourceA"}')
  })
})
