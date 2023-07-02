const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please enter product  Description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter product Price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
   
    
    
    category:{
        type:String,
        required:[true,"Please enter product Category"]
     

    },
    Stock:{
        type:Number,
        required:[true,"Please Enter Product Stock"],
        maxLength:[4,"Stock cannot exceed 4 Characters"],
        default:1

    },
    numOfReviews:{
        type:Number,
        default:0
    },
    
    createdAt:{
        type:Date,
        default:Date.now
    }

})
module.exports = mongoose.model("Product",productSchema);