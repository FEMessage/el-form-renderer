/// <reference types="Cypress" />

describe('测试 remote 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('remote')
  })
  it('测试所有 remote 配置', function() {
    cy.get('.el-select')
      .first()
      .click()
      .type('input')
    cy.contains('area1').click()
    cy.contains('resourceA')
    cy.contains('typeA')
    cy.$getFormItemInput('cascader').click()
    cy.contains('hello').click()
    cy.contains('world').click()
    cy.$getFormItemInput('cascader').should('have.value', 'hello / world')
  })
})
