/// <reference types="Cypress" />

describe('测试 component 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('component')
  })
  it('基础用例', function() {
    cy.contains('component')
    cy.get('.el-form-renderer input')
      .type('1')
      .should('have.value', 'v1') // 不能用 contains，这里取属性
      .blur()
      .should('have.value', 'v1.0.0')
  })
})
