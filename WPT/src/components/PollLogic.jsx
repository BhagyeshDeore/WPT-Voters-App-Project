// Parent Component

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as pollServices from './pollServices';

export const PollLogic = () => {
  const [polls, setPolls] = useState([]);
  const [selectedPollId, setSelectedPollId] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const fetchPollsData = async () => {
      try {
        const pollsData = await pollServices.fetchPolls();
        setPolls(pollsData);
      } catch (error) {
        console.error('Error fetching polls:', error);
      }
    };

    fetchPollsData();
  }, []);

  const handleVoteSubmit = async () => {
    if (!selectedPollId) {
      alert('Please select a poll before submitting your vote.');
      return;
    }

    try {
      await pollServices.submitVote(selectedPollId, selectedOption);
      // Optionally, you can refetch the selected poll data to update the results after voting
      const updatedPoll = await pollServices.fetchPollById(selectedPollId);
      // Handle the updated poll data as needed
      console.log('Vote submitted successfully:', updatedPoll);
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  return (
    <div>
      <h2>Available Polls:</h2>
      <ul>
        {polls.map((poll) => (
          <li key={poll._id}>
            <Link to={`/polls/${poll._id}`} onClick={() => setSelectedPollId(poll._id)}>
              {poll.question}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Vote on Selected Poll:</h2>
      <div>
        <label>Select an option:</label>
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="">Select an option</option>
          {/* Dynamically populate options based on the selected poll */}
          {selectedPollId &&
            polls
              .find((poll) => poll._id === selectedPollId)
              .options.map((option, index) => (
                <option key={index} value={option.text}>
                  {option.text}
                </option>
              ))}
        </select>
      </div>
      <button onClick={handleVoteSubmit} disabled={!selectedOption}>
        Vote
      </button>
    </div>
  );
};

export default PollLogic;
