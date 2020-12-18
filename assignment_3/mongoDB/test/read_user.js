const assert =require('assert');
const user=require('../model/User');
describe('reading data',()=>{
    let newuser;
    newuser=user({
        name:'ronaldo',
        password:'1234',
        email:'cr7@gmail.com',
        country:'portugal'
    })
    newuser.save()
    
    it('it finds one record form db',(done)=>{
        user.findOne({name:'ronaldo'}).then((data)=>{
            console.log(data);
            assert(data.name==='ronaldo')
             done();
        })
       // done();
    })
})