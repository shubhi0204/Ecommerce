const mongoose = require("mongoose");

const productSchema =new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product Name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter product  Description"]
    },
    price: {
        type: Number,
        required: [true, "Please enter product Price"],
        maxLength: [8, "Price cannot exceed 8 characters"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
                }
            
            
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter product Category"]


    },
    Stock: {
        type: Number,
        required: [true, "Please Enter Product Stock"],
        maxLength: [4, "Stock cannot exceed 4 Characters"],
        default: 1

    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model("Product", productSchema);