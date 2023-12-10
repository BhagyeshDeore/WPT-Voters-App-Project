const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pollingApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Poll schema (use the schema from the previous response)

// Define Poll model
const Poll = require('./models/poll');

// API endpoints

// Get all polls
app.get('/api/polls', async (req, res) => {
  try {
    const polls = await Poll.find();
    res.json(polls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new poll
app.post('/api/polls', async (req, res) => {
  const { question, options } = req.body;

  try {
    const newPoll = new Poll({
      question,
      options,
    });

    const savedPoll = await newPoll.save();
    res.status(201).json(savedPoll);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
