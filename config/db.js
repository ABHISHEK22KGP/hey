const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI
const connection = mongoose.connect(MONGO_URI).then(()=>{
    console.log("Connected To DataBase")
})
module.exports = connection 
