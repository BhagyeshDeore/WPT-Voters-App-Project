//import mongoose from 'mongoose'
import mongoose,{Schema} from "mongoose"
const adminSchema = new Schema({
    name:String,
    phone:Number,
    password:String,
    email:String
});

export const Admin = mongoose.model('admin',adminSchema);