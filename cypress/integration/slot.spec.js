/// <reference types="Cypress" />

describe('测试 slot 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('slot')
  })
  it('基础用例', function() {
    cy.get('.el-form-item')
      .first()
      .should('contain', 'name')
      .next()
      .should('match', 'button')
      .should('contain', 'a button insert before age')
      .next()
      .should('contain', 'age')
      .next()
      .should('contain', 'default slot is at the bottom')
  })
})
