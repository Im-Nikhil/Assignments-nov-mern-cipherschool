const assert=require('assert');
const Products = require('../model/Product');

describe('deleting entry from database',()=>{

    let newProd = Products({
        Prod_name: 'earphones3',
        Descrip: 'earphones ',
        price: 300,
        quantity:200,
        category:'music'
    })
    newProd.save()

    it('deleting entry from db of product',(done)=>{
        product.deleteOne({product_name:'earphones3'}).then((data)=>{
            console.log(data);
            product.findById({_id:newproduct._id}).then((result)=>{
                assert(result===null)
                done();
            })
        })
        // product.findByIdAndUpdate
    })
})