const assert=require('assert');
const Products = require('../model/Product');

describe('Updating database prod price',()=>{

    let newProd = Products({
        Prod_name: 'earphones2',
        Descrip: 'earphones ',
        price: 300,
        quantity:200,
        category:'music'
    })
    newProd.save()

    it('updating db of product price',(done)=>{
        product.findOneAndUpdate({product_name:'earphones2'}, {price:500}).then((data)=>{
            console.log(data);
            product.findById({_id:newproduct._id}).then((result)=>{
                assert(result.price===500)
                done();
            })
        })
    
    })
})