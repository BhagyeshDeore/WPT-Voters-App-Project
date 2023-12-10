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
            <Accordion.Header>Project Journey</Accordion.Header>
            <Accordion.Body>
              Working started on 25th Nov 2023  , At first we were little Confused so stared with rough design of application and started working from basics after we got the overall image we divided our work and every team member have contributed same in working <div className=""></div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Learing From Project work</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br></br>
        <br></br>
        <Col lg-4>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Bhagyesh} alt="Card image" />

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Worked on Express js , MongoDB , React-Bootstrap
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Bhagyesh Deore</ListGroup.Item>
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
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Worked on Express js , MongoDB , React-Bootstrap
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Shaival Paradkar </ListGroup.Item>
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
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Worked on Express js , MongoDB , React-Bootstrap
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Lalit Nankar</ListGroup.Item>
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
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
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
        <Col md={4}>
          <h5>Contact Us</h5>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
          
        </Col>
      
      </Row>
      </footer>
    </Container>
  );
}

export default About;