const assert=require('assert');
const Products = require('../model/Product');

describe('deleting entry from database',()=>{

    let newProd = Products({
        Prod_name: 'earphones3',
        Descrip: 'earphones ',
        price: 30000,
        quantity:20000,
        category:'music'
    })
    newProd.save()

    it('deleting entry from db of product',(done)=>{
        Products.deleteMany({Prod_name:'earphones3'}).then((data)=>{
            console.log(data);
            Product.findById({_id:newProd._id}).then((result)=>{
                console.log(result)
                assert(result===null)
                done();
            })
        })
        // product.findByIdAndUpdate
    })
})