/// <reference types="Cypress" />

describe('测试 hidden 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('hidden')
  })
  it('切换 hidden', function() {
    cy.contains('idol').should('not.be.visible') // 不是 not.exist 哦
    cy.$getFormItemInput('hobby').click()
    cy.contains('basketball').click()
    cy.contains('idol').should('be.visible') // invisible 也是 contains
  })
})
