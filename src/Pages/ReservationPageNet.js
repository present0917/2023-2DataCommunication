
import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useParams } from "react-router-dom"
import axios from 'axios';
const Cont = styled.div`
    margin: 0 auto;

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

const ReservationPageNet = ({  }) => {

  const params = useParams();
      useEffect(
        ()=>{
            axios.get(`http://localhost:8080/concert/detail/${params.id}/book`)
            .then((response)=>{
                setSeats(response.data);
            })
            .catch((error)=>console.log(error))

        }
        ,[])


  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, setSeats] = useState([]);
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  useEffect(() => {
    if (seats) {
        console.log(seats);
        setRows( Array.from(new Set(seats.map(seat => seat.row))));
        setCols(Array.from(new Set(seats.map(seat => seat.col))));
    }
}, [seats]);


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
        console.log(newSeats);
        return newSeats; 
      });//console.log 조회용 (usestate업데이트 전 값이 출력되어 콜백으로 호출) 

  };
  


const request = ()=>{
  console.log(selectedSeats);
}

  return (
    <>

    <Cont>
  <h1>좌석 예약</h1>
  {cols.map(col => (
    <div >
      {rows.map(row => {
        const seatInfo = seats.find(seat => seat.row === row && seat.col === col);
        const isSelected = selectedSeats.some(
          selectedSeat => selectedSeat.row === row && selectedSeat.col === col
        );
        return (
          <Seat
            className={`seat ${isSelected ? 'selected' : ''}`}
            onClick={() => handleSeatClick(row, col)}
            key={`seat-${row}-${col}`}
            disabled={seatInfo.data ? true : false}
          >
            {seatInfo ? `${seatInfo.col+seatInfo.row}` : ''}
            
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
export default ReservationPageNet;