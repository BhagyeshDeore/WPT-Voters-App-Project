import React, { useState, useEffect } from 'react';

export function Poll({ updatePollData }) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Simulate fetching poll question and options
    const pollData = {
      question: 'What is your favorite color?',
      options: ['Red', 'Blue', 'Green'],
    };
    setQuestion(pollData.question);
    setOptions(pollData.options);

    // Simulate fetching poll results
    const pollResults = [
      { _id: '1', text: 'Blue', votes: 0 },
      { _id: '2', text: 'Red', votes: 0 },
      { _id: '3', text: 'Green', votes: 0 },
    ];
    setResults(pollResults);
  }, []); // Run once on component mount

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleVoteSubmit = (event) => {
    event.preventDefault();

    // Simulate sending a vote
    const newResults = results.map((result) => {
      if (result.text === selectedOption) {
        return { ...result, votes: result.votes + 1 };
      }
      return result;
    });
    setResults(newResults);

    // Call the updatePollData function passed from Dashboard
    updatePollData(newResults);
  };

  // Apply styles to make text color white
  const textStyle = { color: 'white' };

  return (
    <div id="poll">
      <h2 style={textStyle}>{question}</h2>
      <form id="pollForm" onSubmit={handleVoteSubmit}>
        {options.map((option) => (
          <div key={option} style={textStyle}>
            <label>
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
        <button type="submit" style={{ color: 'black' }}>
          Vote
        </button>
      </form>
      <div id="results" style={textStyle}>
        <h3>Results:</h3>
        <ul>
          {results.map((result) => (
            <li key={result._id} style={textStyle}>
              {result.text}: {result.votes}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Poll;