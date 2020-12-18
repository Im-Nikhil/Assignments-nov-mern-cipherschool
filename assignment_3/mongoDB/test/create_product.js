const assert = require('assert');
const Products = require('../model/Product');

describe('saving records', () => {
    it('it saves a record to db of product', (done) => {
        let newProd = Products({
            Prod_name: 'earphones',
            Descrip: 'truely wireless earphones ',
            price: 3000,
            quantity:20,
            category:'music',
            
        })
    
        newProd.save().then( () => {
            assert(newProd.isNew === false)
            done();
        })
    })
})