import mongoose, {Schema} from "mongoose";
const voterSchema=new Schema(
  {
    voterid:Number,
    name:String,
    age:Number,
    phone:Number, 
    gender:String,
    password:String
  }
)
export const Voter=mongoose.model("voter",voterSchema);