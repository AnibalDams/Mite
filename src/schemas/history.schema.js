import mongoose from 'mongoose';

const {model, Schema} = mongoose;

const HistorySchema = new Schema({
	id:String,
	itemId:String,
	name:String,
	image:String,
	type:String,
	visitedAt:String
}) 



export default model("history",HistorySchema)