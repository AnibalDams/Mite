import mongoose from 'mongoose'

const {model, Schema}= mongoose

const animeSchema = new Schema({
    name:String,
    synopsis:String,
    image:String,
    cover:String,
    releaseDate:String,
    study:String,
    inEmission:{type:Boolean}
    type:String,
    visits:{type:Number,default:0}

    
})

export default model("anime",animeSchema);