
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Seatdata from "./Seatdata";
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const Cont = styled.div`
    margin: 0 auto;
    height:500px;
    width:80%;
`;
const Seat = styled.button`
&.selected{
    background-color: aqua;
}
    margin: 0 auto;
    height:50px;
    width:50px;
`;

const ReservationPage = ({ }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const location=useLocation();
  const {state}=location;
  const {id,selectedDate}=state;
  const navigate=useNavigate();

  const handleSeatClick = (row, col) => {
    const seat = { row, col };
    const isSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.row === row && selectedSeat.col === col
    );

    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => !(selectedSeat.row === row && selectedSeat.col === col)));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }

    setSelectedSeats((newSeats) => {
        // console.log(newSeats);
        return newSeats; 
      });//console.log 조회용 (usestate업데이트 전 값이 출력되어 콜백으로 호출) 

  };
  
const rows = Array.from(new Set(Seatdata.map(seat => seat.row)));
const cols = Array.from(new Set(Seatdata.map(seat => seat.col)));

const request = ()=>{
  console.log(selectedSeats);
  navigate(`/payment/${id}`,{state:{id,selectedDate,selectedSeats}});
}

  return (
    <>

    <Cont>
  <h1>좌석 예약</h1>
  {rows.map(row => (
    <div >
      {cols.map(col => {
        const seatInfo = Seatdata.find(seat => seat.row === row && seat.col === col);
        const isSelected = selectedSeats.some(
          selectedSeat => selectedSeat.row === row && selectedSeat.col === col
        );
        return (
          <Seat
            className={`seat ${isSelected ? 'selected' : ''}`}
            onClick={() => handleSeatClick(row, col)}
            key={`seat-${row}-${col}`}
          >
            {seatInfo ? seatInfo.data : ''}
          </Seat>
        );
      })}
    </div>
  ))}
</Cont>
<Button onClick={request}>구매</Button>


    </>
  );
};
export default ReservationPage;