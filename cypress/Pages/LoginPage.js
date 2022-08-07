class LoginPage {

    submit(){
    
    //Usuario deve navegar para a tela de realizar cadastro
     cy.get('#content > div > div > div > div > form > div.align-items-center.mb-5.mt-3.col > div > div.text-center.m-auto > div > a').should('be.visible').click()
    }
}

export default new LoginPage ();