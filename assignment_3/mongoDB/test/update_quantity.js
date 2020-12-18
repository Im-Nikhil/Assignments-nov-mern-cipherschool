const assert=require('assert');
const Products = require('../model/Product');

describe('Updating database prod quantity',()=>{

    let newProd = Products({
        Prod_name: 'earphones2',
        Descrip: 'earphones ',
        price: 300,
        quantity:200,
        category:'music'
    })
    newProd.save()

    it('updating db of product quantity',(done)=>{
        product.findOneAndUpdate({product_name:'earphones2'}, {quantity:100}).then((data)=>{
            console.log(data);
            product.findById({_id:newproduct._id}).then((result)=>{
                assert(result.quantity===100)
                done();
            })
        })
    
    })
})