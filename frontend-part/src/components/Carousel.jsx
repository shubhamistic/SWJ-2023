import Carousel from 'react-bootstrap/Carousel';
import banner from './banner.png'; // Import the image


function UncontrolledExample() {
  return (
    <Carousel className='carousel noScroll'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;