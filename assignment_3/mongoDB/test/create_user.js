const assert = require('assert');
const Users = require('../model/User');
// const cat=require('../model/Category');
// const Products = require('../model/Product');
describe('saving records', () => {
    it('it saves a record to db of user', (done) => {
        let newUser = Users({
            name: 'John',
            email: 'nvp16199@gmail.com',
            password:'nikhil',
            country:'india'
        })
       
        newUser.save().then( () => {
            assert(newUser.isNew === false)
            done();
        })
    })
})