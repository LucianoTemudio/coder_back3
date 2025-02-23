import mongoose from "mongoose";

const collection = 'users';

const schema = new mongoose.Schema({
    first_name: {type:String, required:true},
    last_name: {type:String, required:true},
    email: {type:String, unique:true, required:true},
    password: {type:String, default: 'coder123', required:true},
    role: {type:String, enum:['user','admin'], default: 'user', required:true},
    pets: {type:Array , default: []},
});

const usersModel = mongoose.model(collection,schema);
export default usersModel;