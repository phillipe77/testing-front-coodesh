

class PreenchimentoDePerfilPage {

    fillForm(userPerfil){
        
        cy.get('#onetrust-accept-btn-handler').click()
        cy.wait(3000)
        cy.get('#displayName')
        .should('be.visible')

       //Usuario deve marcar a carreira que está buscando ( selecionar até 3 oções)
        cy.get('#__next > div.container.space-bottom-3.space-top-2.container > div > div > div > div > div.fade.p-0.tab-pane.active.show > form > div.row.mx-gutters-2.mt-2.row > div:nth-child(7) > div > div').click()  
       
        //Usuario deve selecionar suas habilidades
        cy.get('#__next > div.container.space-bottom-3.space-top-2.container > div > div > div > div > div.fade.p-0.tab-pane.active.show > form > div:nth-child(5) > div.form-group.col-md-12.col-sm-6.col-12 > div.form-text.text-muted > div > span:nth-child(1)').click()
        cy.get('#__next > div.container.space-bottom-3.space-top-2.container > div > div > div > div > div.fade.p-0.tab-pane.active.show > form > div:nth-child(5) > div.form-group.col-md-12.col-sm-6.col-12 > div.form-text.text-muted > div > span:nth-child(1)').click()
        cy.get('#__next > div.container.space-bottom-3.space-top-2.container > div > div > div > div > div.fade.p-0.tab-pane.active.show > form > div:nth-child(5) > div.form-group.col-md-12.col-sm-6.col-12 > div.form-text.text-muted > div > span:nth-child(1)').click()
        cy.get('#__next > div.container.space-bottom-3.space-top-2.container > div > div > div > div > div.fade.p-0.tab-pane.active.show > form > div:nth-child(5) > div.form-group.col-md-12.col-sm-6.col-12 > div.form-text.text-muted > div > span:nth-child(4)').click()
       
        //Usuario deve informar seu tempo de experiência na área
        cy.get('#years_experience').select ('2-3').should('have.value','2-3')
        
        //Usuario deve informar seu número do celular
        cy.get('#__next > div.container.space-bottom-3.space-top-2.container > div > div > div > div > div.fade.p-0.tab-pane.active.show > form > div:nth-child(6) > div:nth-child(2) > div:nth-child(2) > div').type(userPerfil.number)       

        //Usuario deve informar sua cidade
        cy.get('#__next > div.container.space-bottom-3.space-top-2.container > div > div > div > div > div.fade.p-0.tab-pane.active.show > form > div:nth-child(6) > div:nth-child(3) > div:nth-child(2)').type(userPerfil.city)

        //Usuario deve prosseguir para a próxima aba
        cy.get('#footer-portal > div > div > button').click()

        //Usuario deve informar a comunidade que faz parte e sua relação
        cy.get('#__next > div.container.space-bottom-3.space-top-2.container > div > div > div > div > div.fade.tab-pane.active.show > form > div.mt-3.row > div.col-12.mt-3.form-group.col > div > div:nth-child(3) > span:nth-child(1)').click()
        cy.get('#communities-0-relation').select ('studying').should('have.value', 'studying')

        //Usuario deve indicar uma causa social que lhe interessa
        cy.get('#__next > div.container.space-bottom-3.space-top-2.container > div > div > div > div > div.fade.tab-pane.active.show > form > div.mt-3.row > div.col-12.mt-3.form-group.col-lg-12.col-12 > div > div.css-yk16xz-control > div.css-13tza3w > div.css-1wa3eu0-placeholder').type('Educação {enter}')
        
        //Usuario deve indicar sua raça/cor
        cy.get('#race').select('white').should('have.value', 'white')
        //Usuario deve indicar seu gênero
        cy.get('#gender').select('male').should('have.value', 'male')
        //Usuario deve indicar sua oriêntação sexual
        cy.get('#sexual_orientation').select('heterosexual').should('have.value', 'heterosexual')
        //Usuario odeve proseguir para próxima aba
        cy.get('#footer-portal > div > div > button.w-100.btn-wide.d-flex.align-items-center.justify-content-center.btn.btn-primary.btn-wide').click()
        
        //Usuario deve responder questionário do ScoreCard
        cy.get('#footer-portal > div > div > a').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(1) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(2) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(3) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(4) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(5) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(6) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(7) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(8) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(9) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(10) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#footer-portal > div > div > button.w-100.d-flex.align-items-center.justify-content-center.btn-wide.btn.btn-primary').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(1) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(2) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(3) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(4) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(5) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(6) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(7) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(8) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(9) > td > div > div.rc-slider-step > span:nth-child(3)').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr:nth-child(10) > td > div > div.rc-slider-step > span:nth-child(3)').click() 
        cy.get('#footer-portal > div > div > button.w-100.d-flex.align-items-center.justify-content-center.btn-wide.btn.btn-primary').click()
        cy.get('#__next > div:nth-child(4) > div > div > form > table > tbody > tr > td > div > div.rc-slider-step > span:nth-child(3)').click()
        
        //Usuario deve confirmar finalização do questiońario e preenchimento do perfil
        cy.get('#footer-portal > div > div > button.w-100.btn.btn-primary').click()
        cy.get('#footer-portal > div > div > a').click()


    }   
    
    submit(){

           
        //Usuario deve navegar até a pagina de vagas, buscar por uma empresa e verificar as vagas disponiveis
        cy.get('#onetrust-accept-btn-handler').click()
        cy.wait(3000)
        cy.get('#header-nav-bar > ul > li:nth-child(1) > a').click()
        cy.get('#content > div > div.bg-primary > form > div > div.mb-4.mb-lg-0.col-lg-7 > div > input').type('PiedPiper')
        cy.get('#content > div > div.bg-primary > form > div > div.align-self-lg-end.col-lg-2 > button').click()


    }
               
}
    
    


//}

export default new PreenchimentoDePerfilPage();