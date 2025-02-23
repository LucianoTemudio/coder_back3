import mongoose from "mongoose";

const collection = 'pets';

const schema = new mongoose.Schema({
    name: {type:String, required:true},
    species: {type:String, required:true},
    adopted: {type:Boolean, default:false},
    owner: {type:String, default:''}
});

const petsModel = mongoose.model(collection,schema);
export default petsModel;