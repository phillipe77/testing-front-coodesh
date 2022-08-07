class CadastroPage {
    fillForm(userRegister) {
        
        //Usuario deve preencher o formulario de cadastro 
        cy.get('#displayName').type(userRegister.name)
        cy.get('#email').type(userRegister.email)
        cy.get('#password').type(userRegister.password)
        cy.get('#content > div > div > div > div:nth-child(2) > form > div:nth-child(4) > div > label > span').click()
    }
          
    submit() {

        //Usuario deve finalizar o cadastro
        cy.get('#content > div > div > div > div:nth-child(2) > form > div:nth-child(5) > div > button').click()

    }

    alertMessageShouldBe(expectedMessage) {  
            
        cy.contains('.invalid-feedback',expectedMessage).should('be.visible')

    }

}

export default new CadastroPage ();