
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    Cat_name: String
    
})

const cat = mongoose.model('cat',CategorySchema);

module.exports = cat;
