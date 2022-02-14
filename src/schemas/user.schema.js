import mongoose from 'mongoose'

const { model, Schema} = mongoose

const userSchema = new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    avatar:String,
    createdAt:{type:Date, default:Date.now}

})


export default model("user",userSchema)