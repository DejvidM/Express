const express = require('express');
const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
const { faker } = require('@faker-js/faker');


const userDetails = () => {
    const user = { 
        password : faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number(),
        lastName : faker.person.lastName(),
        firstName : faker.person.firstName(),
        _id : faker.number.int()
    }
    return user;
}

const companyDetails = () => {
    const company = {
        _id : faker.number.int(),
        name : faker.company.name(),
        adress : { 
            street : faker.location.streetAddress(),
            city : faker.location.city(),
            state : faker.location.state(),
            zipCode : faker.location.zipCode(),
            country : faker.location.country()
        }
    }
    return company;
}

app.get('/api/users/new' , (req, res) => {
    const randomUser = userDetails();
    console.log(req.body);
    res.json(randomUser)
})

app.get('/api/companies/new' , (req , res) => {
    const randomCompany = companyDetails();
    console.log(req.body);
    res.json(randomCompany);
})

app.get('/api/user/company' , (req , res) => {
    const newUser = userDetails();
    const newCompany = companyDetails();
    const userCompany = {newUser,  newCompany}
    console.log(req.body);
    res.json(userCompany)
})

app.listen (8000 , () => console.log('working'));