/// <reference types="Cypress" />

describe('测试 basic 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('basic')
  })
  it('基础用例', function() {
    cy.contains('basic')
    cy.contains('submit').click()
    cy.contains('miss name')
    cy.$getFormItemInput('name').type('name')
    cy.$getFormItemInput('area').click()
    cy.contains('area1').click()
    cy.$getFormItemInput('date').click()
    cy.contains('此刻').click()
    cy.contains('typeA').click()
    cy.contains('resourceA').click()
    cy.$getFormItemInput('desc', 'textarea').type('desc')
    cy.contains('submit').click()
    cy.contains('submit!')
    cy.contains('reset').click()
    cy.$getFormItemInput('name').should('have.value', '')
  })
})
