import Mongoose from "mongoose";
const userschema=  Mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
        minlength: 8,
    },
    role:{
        type:String,
        role:"Basic",
        required: true,
    },
})
const user = Mongoose.model("user",userschema)
export default user