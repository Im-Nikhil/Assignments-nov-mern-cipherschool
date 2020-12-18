const assert=require('assert');
const Products = require('../model/Product');

describe('Updating database prod quantity',()=>{

    let newProd = Products({
        Prod_name: 'earphones5',
        Descrip: 'earphones ',
        price: 300,
        quantity:200,
        category:'music'
    })
    newProd.save()

    it('updating db of product quantity',(done)=>{
        Products.findOneAndUpdate({Prod_name:'earphones5'}, {quantity:100}, {useFindAndModify: false}).then((data)=>{
            console.log(data);
            Products.findById({_id:newProd._id}).then((result)=>{
                console.log(result);
                assert(result.quantity===100)
                done();
            })
        })
    
    })
})