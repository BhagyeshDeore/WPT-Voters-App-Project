import { Container, Row,Col,Card,Button} from "react-bootstrap"
//import CarouselFadeExample from './Carousel';
import CarouselFadeExample from "./CarouselFadeExample";
//import './style.css';
import pic1 from "./Image/cr2.jpg";
import pic2 from "./Image/poll3.png";
import pic3 from "./Image/poll4.png"

import {Footer} from "./Footer";



export function Home(){
  return (
    <Container>
    
      <CarouselFadeExample></CarouselFadeExample>
     <Row>
      <Col lg={4} classname="mt-12 mb-2">
      <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src={pic1}/>
      <Card.Body>
        <Card.Title>Importance of Opinion</Card.Title>
        <Card.Text style={{ color: 'black' }}>
        Polls are widely used to gauge public opinion on a variety of issues, including political candidates, policies, and social topics. They provide a snapshot of what people think at a given moment.
        </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4} className="mt-5 mb-2">
      <Card style={{ width: '24 rem' }}>
      <Card.Img variant="top" src={pic2} />
      <Card.Body>
        <Card.Title>Market Research:</Card.Title>
        <Card.Text style={{ color: 'black' }}>
        Businesses use polls to gather information about consumer preferences, market trends, and feedback on products or services. This data helps companies make informed decisions about product development, marketing strategies, and overall business direction.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4} className="mt-5 mb-2">
      <Card style={{ width: '24 rem' }}>
      <Card.Img variant="top" src={pic3} />
      <Card.Body>
        <Card.Title>Decision-Making in Organizations:</Card.Title>
        <Card.Text style={{ color: 'black' }}> 
        Within organizations, polls can be used to make decisions on various matters, such as choosing a venue for an event, deciding on work policies, or selecting preferred team-building activities.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Col>
  </Row>
    <Footer></Footer>

    </Container>
  );
}