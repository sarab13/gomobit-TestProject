const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    cell:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    } 
    },
    {
    timestamps:true
    })

const User=mongoose.model('User',userSchema)
module.exports=User;