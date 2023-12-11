import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import pic1 from "./Image/poll1.jpg";
import pic2 from "./Image/cr4.jpg";
import pic3 from "./Image/poll1.jpg"


const CarouselFadeExample=()=> {
  const carouselHeight={
    height:'800px'
    
  };

  return (
    
    <Carousel fade>
      <Carousel.Item style={carouselHeight}>
        <Image src={pic1} fluid />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={pic2} alt="Second slide" fluid />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default CarouselFadeExample;