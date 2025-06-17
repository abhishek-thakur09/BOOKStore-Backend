const mongoose = require("mongoose");

const connectdb = async ()=>{
    await mongoose.connect(
        "mongodb+srv://axevashurana:VdA2gc1iFa4xm4Mr@bookstore.r88ad9d.mongodb.net/users"
        );    
};





module.exports = connectdb; 
