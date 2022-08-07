var faker = require('faker')

export default {

    userRegister: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {

            name: `${firstName} ${lastName}`,
            email: faker.internet.email(firstName),
            password:'Ta5896@A6'  
            
        }

        return data 
    }

}

