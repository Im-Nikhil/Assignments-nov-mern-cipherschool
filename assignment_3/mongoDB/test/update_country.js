const assert=require('assert');
const user= require('./../model/User');

describe('Updating database country',()=>{
    let newuser;
    newuser=user({
        name:'ronaldo2',
        password:'1234',
        email:'cr7@gmail.com',
        country:'portugal'
    })
    newuser.save()

    it('updating db of user country',(done)=>{
        user.findOneAndUpdate({name:'ronaldo2'}, {country :'india'}).then((data)=>{
            console.log(data);
            user.findById({_id:newuser._id}).then((result)=>{
                assert(result.country==='india')
                done();
            })
        })

    })
})