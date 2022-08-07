//
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage'
import CadastroPage from '../Pages/CadastroPage'
import cadastroFactory from '../factories/CadastroFactory'
import perfilFactory from '../factories/PerfilFactory'
import PreenchimentoDePerfilPage from '../Pages/PreenchimentoDePerfilPage'

describe ('Cadastro de Usuário', ()=>{
    
    it ('Usuario deve criar uma conta', function(){
       
        var userRegister = cadastroFactory.userRegister()    

        HomePage.visit()
        HomePage.submit()    
        LoginPage.submit()
        CadastroPage.fillForm(userRegister)
        CadastroPage.submit()

    })

describe ('Preenchimento do perfil', ()=>{

    it('Usuario deve preencher o perfil corretamente', function(){

         var userPerfil = perfilFactory.userPerfil()

        PreenchimentoDePerfilPage.fillForm(userPerfil)
      

    })


describe('Busca por vagas', ()=>{


    it('Usuario deve buscar por vagas', function(){

        PreenchimentoDePerfilPage.submit()


    })


describe('Erros', ()=>{


    it('Deve retornar email invalido', function(){

        var userRegister = cadastroFactory.userRegister()
        userRegister.email = 'cypress.com.br'

        HomePage.visit()
        HomePage.submit()    
        LoginPage.submit()
        CadastroPage.fillForm(userRegister)
        CadastroPage.alertMessageShouldBe('email deve ser um email válido')

    })

    it('Deve retornar senha invalida', function(){


        var userRegister = cadastroFactory.userRegister()
        userRegister.password = '12345678'

        HomePage.visit()
        HomePage.submit()    
        LoginPage.submit()
        CadastroPage.fillForm(userRegister)
        CadastroPage.alertMessageShouldBe('Deve conter no mínimo 8 caracteres, 1 número, 1 maiúscula e 1 caractere especial')
    
    })

   


})


})
   

})

})


