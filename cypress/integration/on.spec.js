/// <reference types="Cypress" />

describe('测试 on 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('on')
  })
  it('测试所有事件', function() {
    cy.$getFormItemInput('fullName').focus()
    cy.$getFormItemInput('display').should(
      'have.value',
      'focus: [object FocusEvent]',
    )
    cy.$getFormItemInput('fullName').type(1)
    cy.$getFormItemInput('display').should('have.value', 'input: 1')
    cy.$getFormItemInput('fullName').blur()
    cy.$getFormItemInput('display').should(
      'have.value',
      'blur: [object FocusEvent]',
    )
  })
})
