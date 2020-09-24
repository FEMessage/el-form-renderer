/// <reference types="Cypress" />

describe('测试 disabled 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('disabled')
  })
  it('禁用全部', function() {
    cy.contains('disabled')
    cy.$getFormItemInput('desc', 'textarea').should('be.disabled') // 测试 el.disabled
    cy.$getFormItemInput('name').should('be.enabled')
    cy.contains('禁用全部').click() // 测试全局 disabled
    cy.$getFormItemInput('name').should('be.disabled')
    cy.contains('禁用全部').click()
    cy.$getFormItemInput('name').should('be.enabled')
    cy.contains('禁用 area').click()
    cy.$getFormItemInput('name').should('be.enabled')
    cy.$getFormItemInput('area').should('be.disabled')
  })
})
