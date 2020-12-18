const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProdSchema = new Schema({
    Prod_name: String,
    Descrip: String,
    price: Number,
    quantity:Number,
    category:String
})

const Product = mongoose.model('Products', ProdSchema);

module.exports = Product;