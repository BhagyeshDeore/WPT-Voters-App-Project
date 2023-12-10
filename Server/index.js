import { DELETE_SUCCESS, ERROR_MESSAGE, INSERT_SUCCESS, VOTER_NOT_FOUND, UPDATE_SUCCESS } from './constants.js';
import express from 'express';
import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import cors from 'cors';
import bcrypt from 'bcrypt';
import {Voter} from './voterschema.js';
import { Admin } from './AdminModel.js';

const app=express();
app.use(cors());
app.use(express.json());
const connectDB=async()=>{await mongoose.connect('mongodb://localhost/votingdb');
 console.log("database created");
}


app.get("/voter/:phone",async(request,response)=>{
  try {
      const voters=await Voter.find();  
      response.send({voters:voters});
  } catch (error) {
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE}); 
  }
});

app.get("/voter",async(request,response)=>{
  try {
      const voters=await Voter.find();  
      response.send({voters:voters});
  } catch (error) {
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE}); 
  }
});

app.post("/admin",async(request,response)=>{
  try{
    const reqData=request.body;
    reqData['password']= bcrypt.hashSync(reqData.password,10)
  const admin=new Admin(reqData);
   await admin.save();
   response.send({message:INSERT_SUCCESS});
  }catch(error){
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
  }
})
app.post("/admin/login",async(request,response)=>{
  try {
    const admin = await Admin.findOne({phone:request.body.phone});
    if(admin){
    if(bcrypt.compareSync(request.body.password,admin.password)){
      response.status(StatusCodes.OK).send({message:"Login Succesful"});
    }
    else{
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:"Invalid password"});
    } 
  }
  else{
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:"Invalid password"});
  }
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
  }
})

app.post("/voter",async(request,response)=>{
  try{
    const reqData=request.body;
  const voters=new Voter(reqData);
   await voters.save();
   response.send({message:INSERT_SUCCESS});
  }catch(error){
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
  }

})

app.put("/voter/:phone",async(request,response)=>{
  try {
      await Voter.updateOne({phone:request.params.phone},request.body);
      response.send({message:UPDATE_SUCCESS});
  } catch (error) {
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
  }
});

app.delete("/voter/:phone",async(request,response)=>{
  try {
    await Voter.deleteOne({phone:request.params.phone},request.body);
    response.send({message:DELETE_SUCCESS});
} catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
}
})
app.listen(5000,()=>
{
  console.log("server started");
  connectDB();
})