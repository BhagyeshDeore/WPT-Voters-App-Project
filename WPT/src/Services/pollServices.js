// pollService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Update the base URL with your server's URL

export async function fetchPolls() {
  try {
    const response = await axios.get(`${BASE_URL}/polls`);
    return response.data.polls;
  } catch (error) {
    console.error('Error fetching polls:', error);
    throw error;
  }
}

export async function createPoll(pollData) {
  try {
    const response = await axios.post(`${BASE_URL}/polls`, pollData);
    return response.data.message;
  } catch (error) {
    console.error('Error creating poll:', error);
    throw error;
  }
}

export async function submitVote(phone, question, optionIndex) {
    try {
      const response = await axios.post(`${BASE_URL}/polls/vote`, {
        phone: phone,
        question: question,
        optionIndex: optionIndex,
      });
      return response.data.message;
    } catch (error) {
      console.error('Error submitting vote:', error);
      throw error;
    }
  }
  
