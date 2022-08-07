class HomePage {

    visit()
    {
        cy.visit('/')
        cy.viewport(1000, 600)
        cy.wait(3000)
        cy.get('#onetrust-accept-btn-handler').should('be.visible').click()
          
    }
    submit(){
        
       
        cy.contains('Conectamos developers validados às empresas')
        cy.get ('#header-nav-bar > ul > li.nav-item.u-header__nav-last-item.nav-item > a > button').should('be.visible').click()  

    }
}

export default new HomePage();