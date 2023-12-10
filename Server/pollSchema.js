//const mongoose = require('mongoose');
import mongoose, {Schema} from "mongoose";
const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [{
    text: {
      type: String,
      required: true,
    },
    votes: {
      type: Number,
      default: 0,
    },
  }],
});

export const Poll = mongoose.model('Poll', pollSchema);


