/// <reference types="Cypress" />

describe('测试 next-tick 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('next-tick')
  })
  it('在 dialog 中的情况', function() {
    cy.contains('点击打开 Dialog（带数据）').click()
    cy.$getFormItemInput('姓名').should('have.value', '小明')
    cy.get('.el-dialog__headerbtn').click()
    cy.contains(/^点击打开 Dialog$/).click()
    cy.$getFormItemInput('姓名').should('have.value', '')
  })
})
