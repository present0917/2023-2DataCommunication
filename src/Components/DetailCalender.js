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

  const id=props.id;

  const navigate=useNavigate();

  const handleReservation = (selectedDate) => {
    if (selectedDate) {
      navigate(`../res/${id}`,{state:{id,selectedDate}});
      console.log(`${id}, ${selectedDate}`);
    } else {
      console.log('날짜를 선택하세요.');
    }
  };


  const ExampleCustomInput = ({ value, onClick }) => (

    <button class="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );
  const getFormattedDate = (date) => {
    const month = date.toLocaleDateString('ko-KR', {
      month: 'long',
    });
    const day = date.toLocaleDateString('ko-KR', {
      day: 'numeric',
    });
    return `${month.substr(0, month.length - 1)}/${day.substr(0, day.length - 1)}`;
  }
  // 요일 반환
  const getDayName = (date) => {
    return date.toLocaleDateString('ko-KR', {
      weekday: 'long',
    }).substr(0, 1);
  }

  // 날짜 비교시 년 월 일까지만 비교하게끔
  const createDate = (date) => {
    return new Date(new Date(date.getFullYear()
      , date.getMonth()
      , date.getDate()
      , 0
      , 0
      , 0));
  }

  useEffect(()=>{
    console.log(startDate);
  },[startDate])

  return (
    <>
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
      <button onClick={() => handleReservation(startDate)}>예약하기1</button>
    </>
  );
}

export default DetailCalender;
