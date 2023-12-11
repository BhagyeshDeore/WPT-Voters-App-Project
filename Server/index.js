import { DELETE_SUCCESS, ERROR_MESSAGE, INSERT_SUCCESS, VOTER_NOT_FOUND, UPDATE_SUCCESS } from './constants.js';
import express from 'express';
import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import {Voter} from './voterschema.js';
import { Admin } from './AdminModel.js';
import { Poll } from './pollSchema.js';

function verifyToken(request,response,next){
   const header=request.get('Authorization');
   if(header){
    const token=header.split(" ")[1];
    jwt.verify(token,"secret1234",(error,payload)=>{
      if(error)
      {
        response.status(StatusCodes.UNAUTHORIZED).send({message:"please login first"})
      }
      else{
        next();
      }
    });
  }else{
    response.status(StatusCodes.UNAUTHORIZED).send({message:"please login first at header"})
  }
}
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

app.post('/polls', async (request, response) => {
  try {
    const { question, options } = request.body;
    const newPoll = new Poll({
      question,
      options,
    });
    await newPoll.save();
    response.send({ message: 'Poll created successfully' });
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Error creating poll' });
  }
});

app.post("/voter/login", async (request, response) => {
  try {
    const { phone, password } = request.body;

    // Validate that required fields are present
    if (!phone || !password) {
      response.status(StatusCodes.BAD_REQUEST).send({ message: 'Phone and password are required' });
      return;
    }

    // Find the voter by phone number
    const voter = await Voter.findOne({ phone });

    if (voter && await bcrypt.compare(password, voter.password)) {
      response.status(StatusCodes.OK).send({ message: "Login successful" });
    } else {
      response.status(StatusCodes.UNAUTHORIZED).send({ message: "Invalid phone number or password" });
    }
  } catch (error) {
    console.error(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Internal server error' });
  }
});

app.get('/polls', async (request, response) => {
  try {
    const polls = await Poll.find();
    response.send({ polls: polls });
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Error fetching polls' });
  }
});

// Create a new poll
app.post('/polls', async (request, response) => {
  try {
    const { question, options } = request.body;
    const newPoll = new Poll({
      question,
      options,
    });
    await newPoll.save();
    response.send({ message: 'Poll created successfully' });
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Error creating poll' });
  }
});

// ... (other imports and setup)

// API endpoint to submit a vote
app.post('/polls/vote', async (request, response) => {
  const { phone, question, optionIndex } = request.body;

  try {
    // Find the voter by phone number
    const voter = await Voter.findOne({ phone });

    if (!voter) {
      response.status(StatusCodes.NOT_FOUND).send({ message: 'Voter not found' });
      return;
    }

    // Find the poll by question (assuming questions are unique)
    const poll = await Poll.findOne({ question });

    if (!poll) {
      response.status(StatusCodes.NOT_FOUND).send({ message: 'Poll not found' });
      return;
    }

    // Check if the voter has already voted in this poll
    const existingVote = poll.votes.find(vote => vote.voterId.equals(voter._id));

    if (existingVote) {
      response.status(StatusCodes.BAD_REQUEST).send({ message: 'Voter has already voted in this poll' });
      return;
    }

    if (optionIndex < 0 || optionIndex >= poll.options.length) {
      response.status(StatusCodes.BAD_REQUEST).send({ message: 'Invalid option index' });
      return;
    }

    // Add the new vote to the poll
    poll.votes.push({ voterId: voter._id, optionIndex });

    // Increase the vote count for the selected option
    poll.options[optionIndex].votes += 1;

    await poll.save();

    response.send({ message: 'Vote submitted successfully' });
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Error submitting vote' });
  }
});


// ... (other existing code)

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
      const token= jwt.sign({adminPhone:admin.phone},"secret1234");
      response.status(StatusCodes.OK).send({message:"Login Succesful",token:token});
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