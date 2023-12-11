import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CanvasJSReact from '@canvasjs/react-charts';
import Poll from './poll.jsx';
import Popup from './Popup';
import './DashBoard.css';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function Dashboard() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [voteData, setVoteData] = useState([]);

  const [pollOptions, setPollOptions] = useState({
    animationEnabled: true,
    title: {
      text: 'Poll Analytics',
    },
    subtitles: [
      {
        text: 'Poll %',
        verticalAlign: 'center',
        fontSize: 24,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: 'doughnut',
        showInLegend: true,
        indexLabel: '{label}: {y}',
        yValueFormatString: "#,###'%'",
        dataPoints: [],
      },
    ],
  });

  const Submit = (data) => {
    // Initialize votes to zero for each option
    const optionsWithVotes = data.options.map((option) => ({
      name: option,
      votes: 0,
    }));

    setVoteData(optionsWithVotes);
    setSubmittedData(data);
    setButtonPopup(false);
  };

  const handleVote = (selectedOption) => {
    // Find the selected option in the voteData array
    const updatedVoteData = voteData.map((option) =>
      option.name === selectedOption ? { ...option, votes: option.votes + 1 } : option
    );

    // Update state with the updated vote data
    setVoteData(updatedVoteData);

    // Update the pollOptions dataPoints with the updated vote data
    const newDataPoints = updatedVoteData.map((result) => ({
      label: result.name,
      y: parseInt(result.votes),
    }));

    setPollOptions((prevOptions) => ({
      ...prevOptions,
      data: [
        {
          type: 'doughnut',
          showInLegend: true,
          indexLabel: '{label}: {y}',
          yValueFormatString: "#,###'%'",
          dataPoints: newDataPoints,
        },
      ],
    }));
  };

  useEffect(() => {
    console.log(voteData);
  }, [voteData]);

  return (
    <>
      <h1 className='Heading'>Welcome to Poll Pulse </h1>
      <Container className='mt-5'>
        <Row>
          <Col lg={6}>
            <CanvasJSChart options={pollOptions} />
          </Col>
          <Col>
            <Container>
              <Poll dataForm={submittedData} onVote={handleVote} />
              <button onClick={() => setButtonPopup(true)} className="add-question-btn">
                Add Question
              </button>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup} onSubmit={Submit} />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
