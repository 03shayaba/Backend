const Mongoose = require('mongoose')
const UserSchema =new  Mongoose.Schema(
    {
   
        name:{
            type:String,
            required:true,
        }, email:{
            type:String,
            required:true,
            unique:true
        }, password:{
            type:String,
            required:true,
        }
},{
    timestamps:true
})

const User = Mongoose.model('user' , UserSchema)
module.exports=User
