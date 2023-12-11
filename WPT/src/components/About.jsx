import { Col, Container, Row } from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import Lalit from "./Image/Lalit.jpeg"
import Bhagyesh from "./Image/Bhagyesh.jpg"
import Shaival from "./Image/Shaival.jpeg"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


export const About = () => {
  return (
    <Container>
      <Row>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><b>Project Journey</b></Accordion.Header>
            <Accordion.Body>
            As we embarked on the journey of building a Polling app, We began with a clear vision of creating an engaging platform for users to voice their opinions. We defined the app's objectives, outlined key features, and chose the MERN stack for its flexibility and efficiency.<div className=""></div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><b>Learing From Project work</b></Accordion.Header>
            <Accordion.Body>
            Interacting with MongoDB to store and retrieve voting data.
Understanding schema design for storing poll questions, options, and votes.
Creating a dynamic and responsive user interface with React.
Managing state efficiently to reflect changes in the UI based on user interactions.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br></br>
        <br></br>
        <Col lg-4>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Bhagyesh} alt="Card image" />

            <Card.Body>
              <Card.Title>Bhagyesh Deore</Card.Title>
              <Card.Text style={{ color: 'black' }}>
                Worked on Express js , MongoDB , React-Bootstrap
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>PRN-230940320030</ListGroup.Item>
              <ListGroup.Item>PG-DAC Kharghar</ListGroup.Item>
              <ListGroup.Item>BE in Mechanical Engineering</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Linkedin</Card.Link>
              <Card.Link href="#">Instagram</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg-4>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Shaival} alt="Card image" />

            <Card.Body>
              <Card.Title>Shaival Paradkar</Card.Title>
              <Card.Text style={{ color: 'black' }}>
                Worked on  Node js ,Express js , MongoDB , React-Bootstrap 
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>PRN - 230940320101 </ListGroup.Item>
              <ListGroup.Item>PG-DAC Kharghar</ListGroup.Item>
              <ListGroup.Item>BE in Computer Engineering</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Linkedin</Card.Link>
              <Card.Link href="#">Instagram</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg-4>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Lalit} alt="Card image" />
            <Card.Body>
              <Card.Title>Lalit Nankar</Card.Title>
              <Card.Text style={{ color: 'black' }}>
                Worked on Express js , MongoDB , React-Bootstrap
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>PRN-230940320058</ListGroup.Item>
              <ListGroup.Item>PG-DAC Kharghar</ListGroup.Item>
              <ListGroup.Item>BE in Computer Engineering</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Linkedin</Card.Link>
              <Card.Link href="#">Instagram</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <footer className="bg-dark text-light py-3">
      <Row>
      
        <Col md={4}>
      
          <h5>Contact Us</h5>
          <p>Email: bhagyeshdeore123@gmail.com</p>
          <p>Phone: 9146480034</p>
        </Col>
        <Col md={4}>
          <h5>Follow Us</h5>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </Col>
        {/* <Col md={4}>
          <h5>Contact Us</h5>
          <p>Email: bhagyeshdeore123@gmail.com</p>
          <p>Phone: 9146480034</p>
          
        </Col> */}
      
      </Row>
      </footer>
    </Container>
  );
}

export default About;