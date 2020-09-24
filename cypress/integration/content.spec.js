/// <reference types="Cypress" />

describe('测试 content 示例', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.$goto('content')
  })
  it('基础用例', function() {
    cy.contains('禁用第一项').click()
    cy.$getFormItemInput('name').should('be.disabled')
    cy.contains('requestRemoteCount: 1')
    cy.$getFormItemInput('region')
      .first()
      .click()
    cy.contains('shanghai').should('be.visible')
    cy.contains('广州').should('not.exist')
    cy.contains('更新 region 的 options').click()
    cy.contains('shanghai').should('not.exist')
    cy.contains('广州').should('be.visible')
    cy.contains('requestRemoteCount: 1') // 更改 content 配置不应重复请求 remote
    cy.contains('随机插入表单项').click()
    cy.contains('表单项1')
    cy.contains('requestRemoteCount: 1') // 更改 content 配置不应重复请求 remote
  })
})
