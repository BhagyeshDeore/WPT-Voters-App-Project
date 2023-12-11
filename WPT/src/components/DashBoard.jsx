import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CanvasJSReact from '@canvasjs/react-charts';
import { Header } from './Header';
import Poll from './poll.jsx';
//import Poll from './components/poll.jsx';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function Dashboard() {
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
        indexLabel: '{name}: {y}',
        yValueFormatString: "#,###'%'",
        dataPoints: [
        //   { name: 'Unsatisfied', y: 5 },
        //   { name: 'Very Unsatisfied', y: 31 },
        //   { name: 'Very Satisfied', y: 40 },
        //   { name: 'Satisfied', y: 17 },
        //   { name: 'Neutral', y: 7 },
        ],
      },
    ],
  });

  const updatePollData = (newData) => {
    const newDataPoints = newData.map((result) => ({
        name: result.text,
        y: result.votes,
      }));
    
;    setPollOptions((prevOptions) => ({
      ...prevOptions,
      data: [
        {
          type: 'doughnut',
          showInLegend: true,
          indexLabel: '{name}: {y}',
          yValueFormatString: "#,###'%'",
          dataPoints: newDataPoints,
        },
      ],
    }));
  };

  return (
    <>
      <Container>
        <Header text="Welcome to PollPulse"></Header>
        {/* <p>
          Using this app you can add student, remove student, search a specific
          student and update student
        </p> */}
      </Container>

      <Container>
        <Row>
          <Col lg={6}>
            <CanvasJSChart options={pollOptions} />
          </Col>
          <Col>
            <Container>
              {/* Pass the updatePollData function to Poll */}
              <Poll updatePollData={updatePollData} />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;