describe('Schedule a Call Form', () => {
  beforeEach(() => {
      cy.visit('https://www.webstacks.com/')
  })

  it('Fills out the schedule a call form', () => {
      cy.get('#mui-13').type('lali@hi.com')
      cy.get('#mui-component-select-estimated_website_project_budget').click()
      cy.getByDataValue('$50,000 - $100,000').click()
      cy.get('#mui-16').type('This is a description')
      cy.get('#mui-17').type('Friend')
  })

  it('Gives an error message for an empty email field', () => {
      cy.get('#mui-component-select-estimated_website_project_budget').click()
      cy.getByDataValue('$50,000 - $100,000').click()
      cy.get('#mui-16').type('This is a description')
      cy.get('#mui-17').type('Friend')
      cy.get('.Rirqo > form > .iEfoRJ > .MuiButtonBase-root').click()
      cy.get(':nth-child(1) > .Form___StyledFlex-sc-55z293-1 > .jqbvDg > .Flex-sc-7nl75q-0 > .Text-sc-1y3bhyp-0')
          .should('exist')
          .contains('Please enter a valid business email address.')
  })

  it('Gives an error message for all empty required fields', () => {
      cy.get('.Rirqo > form > .iEfoRJ > .MuiButtonBase-root').click()
      cy.get(':nth-child(1) > .Form___StyledFlex-sc-55z293-1 > .jqbvDg > .Flex-sc-7nl75q-0 > .Text-sc-1y3bhyp-0')
          .should('exist')
          .contains('Please enter a valid business email address.')
      cy.get('.dVONFz > .Text-sc-1y3bhyp-0')
          .should('exist')
          .contains('Please complete this required field.')
      cy.get(':nth-child(4) > .Form___StyledFlex-sc-55z293-1 > .jqbvDg > .Flex-sc-7nl75q-0 > .Text-sc-1y3bhyp-0')
          .should('exist')
          .contains('Please complete this required field.')
  })
})