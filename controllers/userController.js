const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require('../middleware/catchAsyncerrors');

const User = require("../models/userModels");
const sendToken = require("../utils/jwtToken");
//Register a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const {name,email,password} = req.body;

    const user = await User.create({
    name,
    email,
    password,
    avatar:{
        public_id: "this is a sample id",
        url:"profilepicUrl",

    },
    });
    sendToken(user,201,res);
});
    //login user
    exports.loginUser = catchAsyncErrors(async (req,res,next)=>{
        const{email,password} = req.body;
        //checking if user has given password and email both

        if(!email || !password){
            return next(new ErrorHandler("Please Enter Email & Password",400));
        }

        const user = await User.findOne({email}).select("+password");

        if(!user){
            return next(new ErrorHandler("invalid Email or Password",401));
        }

        const isPasswordMatched = await user.comparePassword(password, user.password);
        if(!isPasswordMatched){
            return next(new ErrorHandler("invalid Email or Password",401));
        }
        
        sendToken(user,200,res);
   

});
