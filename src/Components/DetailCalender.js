import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import '../Css/DetailCalender.css';
import TimeSlotData from './TimeSlotData';
import { useNavigate } from 'react-router-dom';
import { getYear } from 'date-fns';
import range from "lodash/range";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';

const DetailCalender = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots,setTimeSlots]=useState(TimeSlotData);
  const [selectedTimeOfConcert,setSelectedTimeOfConcert]=useState(false);

  const id=props.id;

  const navigate=useNavigate();

  const handleReservation = (selectedDate) => {
    if (selectedDate&&selectedTimeOfConcert) {
      navigate(`../res/${id}`,{state:{id,selectedDate}});
      console.log(`${id}, ${selectedDate}`);
    } else {
      alert('날짜와 시간을 선택하세요.');
    }
  };
  

  
  useEffect(()=>{
    console.log(startDate);
    setSelectedTimeOfConcert(false);
  },[startDate])
  
  return (
    <>
    <div className='right-content-down-container'>
      <div className='date-pick-container'>
        <DatePicker
          className='custom-datepicker'
          locale={ko}// 달력 한글화
          showPopperArrow={false}
          fixedHeight
          selected={startDate} // 날짜 state
          onChange={date=>setStartDate(date)} // 날짜 설정 콜백 함수
          minDate={new Date()} // 과거 날짜 disable
          // 토요일, 일요일 색깔 바꾸기 위함
          dayClassName={date =>(
              date.getDate()===startDate.getDate?"sunday":"unselected-day"  
    )}
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          })=>(
            <div className='custom-date-header'>
              <button className='custom-arrow' onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" style={{color:"#d3d3d3"}} />
              </button>
              <div className='custom-month'>{date.getFullYear()}년 {date.getMonth()+1}월</div>
              <button className='custom-arrow' onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" style={{color:"#d3d3d3"}} />
              </button>
            </div>
          )}
          inline
        />
        <div className='right-pick-container'>
          <span className={selectedTimeOfConcert?'right-pick-container-text-selected':'right-pick-container-text'} onClick={()=>setSelectedTimeOfConcert(true)}>1회 오후 7시 30분</span>
        </div>
      </div>
          <Button 
            variant="danger"
            id='reservation-button'
            onClick={() => handleReservation(startDate)}>예 매 하 기</Button>
      </div>
    </>
  );
}

export default DetailCalender;
