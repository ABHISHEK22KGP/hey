const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Email:String,
    Password:String
})

const userMOdel = mongoose.model('user',userSchema);
module.exports = userMOdel