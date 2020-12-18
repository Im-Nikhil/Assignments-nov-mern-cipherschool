const assert=require('assert');
const user= require('./../model/User');

describe('deleting entry',()=>{

    newuser=user({
        name:'ronaldo3',
        password:'1234',
        email:'cr7@gmail.com',
        country:'portugal'
    })
    newuser.save()

    it('deleting entry from db of user',(done)=>{
        // user.deleteOne({})
        user.deleteOne({name:'ronaldo3'}).then((data)=>{
            console.log(data);
            user.findById({_id:newuser._id}).then((result)=>{
                assert(result===null)
                done();
            })
        })

    })
})