import React, { useState, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './poll.css'

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function Poll({ updatePollData, dataForm, onVote }) {
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState('');
  const [optionsData, setOptionsData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [voteGiven, setVoteGiven] = useState(null)

  // Directly use the dataForm prop within the component body
  useEffect(() => {
    if (dataForm) {
      setQuestion(dataForm.question);
      setOptionsData(dataForm.options);
    }
  }, [dataForm]);

  const handleVote = () => {
    // Handle the vote for the selected option
    setVoteGiven(selectedOption);

    if (onVote) {
      onVote(selectedOption);
    }

    // Add your logic to send the vote to the server or update the state as needed
  };

  const options = {
    animationEnabled: true,
    title: {
      text: 'Dynamic Pie Chart',
    },
    data: [
      {
        type: 'pie',
        showInLegend: true,
        legendText: '{label}',
        dataPoints: data,
      },
    ],
  };

  return (
    <div id="poll">
      <h3 className='heading'>{question}</h3>
      <form>
        {optionsData.map((option, index) => (
          <div key={index} className="form-group">
            <input
              type="radio"
              id={`option${index}`}
              name="voteOption"
              value={option}
            
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
            />
            <label htmlFor={`option${index}`} className="vote-label">{option}</label>
          </div>
        ))}
        <button type="button" className='btn btn-primary' onClick={handleVote}>
          Vote
        </button>
      </form>
    </div>
  );
}

export default Poll;