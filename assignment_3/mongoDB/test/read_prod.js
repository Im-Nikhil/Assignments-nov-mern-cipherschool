const assert =require('assert');
const Products = require('../model/Product');
describe('reading data',()=>{
    let newProd = Products({
        Prod_name: 'earphones1',
        Descrip: 'wireless earphones ',
        price: 300,
        quantity:200,
        category:'music'
    })
    newProd.save()
    
    it('it finds one record form db of product',(done)=>{
        Products.findOne({Prod_name:'earphones1'}).then((data)=>{
            console.log(data);
            assert(data.Prod_name==='earphones1')
             done();
        })
       
    })
})