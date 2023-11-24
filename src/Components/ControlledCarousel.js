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

function ControlledCarousel({list}) {
  const [index, setIndex] = useState(0);
  const [concerts, setConcerts] = useState(ConcertData);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  console.log(list);
  return (
    
      <Carousel activeIndex={index} onSelect={handleSelect} style={{height:"100%"}} >
        {list.map((concert) => (
          <Carousel.Item key={concert.id} interval={10000} style={{height:"100%"}}>
            <img
              className="d-block w-100"
              // 연동전
              //src={require(`../img/concert${concert.id+1}carousal.jfif`)}

              src={`http://localhost:8080/images/${concert.carouselUrl}`}
              alt={`img${concert.id+1}`}
              style={{}}
            />  
            <Carousel.Caption style={{}}>
              <h3 style={{textShadow:"-1px 0 #080808, 0 1px #080808, 1px 0 #080808, 0 -1px #080808"}}>{concert.title}</h3>
              <p style={{textShadow:"-1px 0 #080808, 0 1px #080808, 1px 0 #080808, 0 -1px #080808"}}>기간: {concert.day}</p>
              <CarouselButton data={concert} />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    
  );
}

export default ControlledCarousel;