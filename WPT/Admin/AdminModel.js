import mongoose from 'mongoose'

const adminSchema = new Schema({
    name:String,
    Phone:String,
    password:String,
    email:String
});

export const Admin = mongoose.model('admin',adminSchema)