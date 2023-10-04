import styled from 'styled-components';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselButton from './CarouselButton';
import simgi from '../img/simgi.png';
import bokgu from '../img/bokgu.jpg';

const CarouselDiv=styled.div`
.slidercontents {
  height: 480px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
}

.wrapText {
  margin-left: 12%;
}
`;


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselDiv>
    <Carousel>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src={bokgu}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
            <CarouselButton/>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src={bokgu}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
            <CarouselButton/>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </CarouselDiv>
  );
}

export default ControlledCarousel;