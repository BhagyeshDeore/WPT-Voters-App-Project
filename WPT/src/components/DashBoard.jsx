import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CanvasJSReact from '@canvasjs/react-charts';
import { Header } from './Header';
import Poll from './poll.jsx';

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
        indexLabel: '{label}: {y}',
        yValueFormatString: "#,###'%'",
        dataPoints: [],
      },
    ],
  });

  const updatePollData = (newData) => {
    const newDataPoints = newData.map((result) => ({
      label: result.name,
      y: result.votes,
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

  return (
    <>
      <Container>
        <Header text="Welcome to PollPulse"></Header>
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
