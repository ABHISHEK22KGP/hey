const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://ABHISHEK22KGP2026:BHI9Jdk1zO3juE4U@cluster0.srcbnno.mongodb.net/1st_backend').then(()=>{
    console.log("Connected To DataBase")
})
module.exports = connection 
