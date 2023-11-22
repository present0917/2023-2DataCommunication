import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import '../Css/DetailCalender.css';
import { useNavigate } from 'react-router-dom';
import { getYear, isSameDay } from 'date-fns';
import range from "lodash/range";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';

const DetailCalender = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTimeOfConcert,setSelectedTimeOfConcert]=useState(false);
  const [todayIsOk,setTodayIsOk]=useState(false);
  
  const id=props.id;

  const navigate=useNavigate();

  const checkDate=(selectedDate)=>{
    const checkToday=new Date(selectedDate.getFullYear(),selectedDate.getMonth(),selectedDate.getDate(),19,30); 
    return checkToday.getTime()-selectedDate.getTime()>0;
  }

  const handleReservation = (selectedDate) => {
    const isOkToday=checkDate(selectedDate);
    setTodayIsOk(isOkToday);
    if (selectedDate&&selectedTimeOfConcert&&todayIsOk) {
       // 포맷 옵션 설정
       const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      
      // 날짜를 원하는 형식으로 포맷
      const sendDateInfo = selectedDate.toLocaleString('ko-KR', options)+" 오후 7:30";
      console.log(`${id},${sendDateInfo}`);
      navigate(`../res/${id}`,{state:{id,sendDateInfo}});
    } else {
      alert('날짜와 시간을 선택하세요.');
    }
  };
  
  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때만 실행
    const isTodayOk = checkDate(startDate);
    setTodayIsOk(isTodayOk);
  }, []); // 빈 배열을 의존성 배열로 전달하여 초기 렌더링 시에만 실행
  
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
