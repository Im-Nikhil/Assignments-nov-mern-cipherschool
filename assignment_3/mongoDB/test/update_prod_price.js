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
        Products.findOneAndUpdate({Prod_name:'earphones2'}, {price:500}, {useFindAndModify: true}).then((data)=>{
            console.log(data);
            Products.findById({_id:newProd._id}).then((result)=>{
                console.log(result);
                assert(result.price===500)
                done();
            })
        })
    
    })
})