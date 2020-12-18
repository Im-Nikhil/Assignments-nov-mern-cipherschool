const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    country:String
})

const Users = mongoose.model('User', UserSchema);

module.exports = Users;
