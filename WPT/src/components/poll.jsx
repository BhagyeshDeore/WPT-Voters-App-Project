// Poll.jsx

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Poll = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '']); // Start with three empty options
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleVoteSubmit = (event) => {
    event.preventDefault();

    // Check if the user selected an option
    if (!selectedOption) {
      alert('Please select an option before submitting your vote.');
      return;
    }

    // Prepare the poll data to be submitted to the backend
    const pollData = {
      question,
      options,
      selectedOption,
    };

    // Call the onSubmit callback to send the poll data to the parent component
    onSubmit(pollData);
  };

  const handleOptionInputChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  return (
    <Container className="mt-5" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Poll Question</h2>
          <Form onSubmit={handleVoteSubmit}>
            <Form.Group controlId="pollQuestion">
              <Form.Label>Question:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your poll question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
              />
            </Form.Group>
            {options.map((option, index) => (
              <Form.Group controlId={`option${index + 1}`} key={index}>
                <Form.Label>{`Option ${index + 1}:`}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`Enter option ${index + 1}`}
                  value={option}
                  onChange={(event) => handleOptionInputChange(index, event)}
                />
              </Form.Group>
            ))}
            <Form.Group controlId="selectedOption">
              <Form.Label>Select an option:</Form.Label>
              {options.map((option, index) => (
                <Form.Check
                  type="radio"
                  key={index}
                  label={option}
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
              ))}
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-3">
              Vote
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Poll;
