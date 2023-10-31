import styled from 'styled-components';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselButton from './CarouselButton';
import ConcertData from './ConcertData';

const CarouselDiv = styled.div`
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
  const [concerts, setConcerts] = useState(ConcertData);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselDiv>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {concerts.map((concert) => (
          <Carousel.Item key={concert.id} interval={10000}>
            <img
              className="d-block w-100"
              src={require(`../img/concert${concert.id+1}carousal.jfif`)}
              alt={`img${concert.id+1}`}
            />
            <Carousel.Caption>
              <h3>{concert.title}</h3>
              <p>기간: {concert.day}</p>
              <CarouselButton data={concert} />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselDiv>
  );
}

export default ControlledCarousel;