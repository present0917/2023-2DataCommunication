import React from "react";
import ConcertData from "./ConcertData";
import { useLocation } from "react-router-dom";
import DetailMobileTitle from "./DetailMobileTitle";
import "../Css/PaymentMobile.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaymentMobile=({concert})=>{
    const location=useLocation();
    const {state}=location;
    const {id,sendDateInfo,currentDate,selectedSeats}=state;


    const formattedDate = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }).format(currentDate);

      return (
        <>
            <div className="payment-mobile-box">
                <DetailMobileTitle title={concert.title} day={concert.day}/>
                <img
                    src={require('../img/v.png')}
                    className="check-img"
                />
                <p className="payment-mobile-alert-text">
                    <span className="mobile-alert-say-thx">
                        감사합니다.
                    </span>
                    <span className="mobile-alert-pay-done">
                        결제가 완료되었습니다.
                    </span>
                </p>
                <div className="payment-mobile-little">
                    <span>
                        주문 요약 정보
                    </span>
                </div>
                <hr className="mobile-little-hora"/>
                <div className="payment-mobile-table-body">
                        <div className="payment-table-body">
                            <div className="payment-mobile-content-1">
                                <div className="payment-mobile-table-content-left">
                                    <span>
                                        구매한 콘서트
                                    </span>
                                </div>
                                <div className="payment-mobile-table-content-right">
                                    <span>
                                        {concert.title}
                                    </span>
                                </div>
                            </div>
                            <div className="payment-mobile-content-2">
                                <div className="payment-mobile-table-content-left">
                                    <span>
                                        구매한 좌석
                                    </span>
                                </div>
                                <div className="payment-mobile-table-content-right">
                                    <span>
                                    {selectedSeats.map(seat => `${seat.col}열 ${seat.row}번`).join(', ')}
                                    </span>
                                </div>
                            </div>
                            <div className="payment-mobile-content-1">
                                <div className="payment-mobile-table-content-left">
                                    <span>
                                        주문 시간
                                    </span>
                                </div>
                                <div className="payment-mobile-table-content-right">
                                    <span>
                                        {formattedDate}
                                    </span>
                                </div>
                            </div>
                            <div className="payment-mobile-content-2">
                                 <div className="payment-mobile-table-content-left">
                                    <span>
                                        콘서트 시간
                                    </span>
                                </div>
                                <div className="payment-mobile-table-content-right">
                                    <span>
                                    {sendDateInfo}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-button">
                        <Button as={Link} to='/' variant="danger" size="lg" id="mobile-button-two">홈페이지로</Button>
                        <Button as={Link} to='/test' variant="secondary" size="lg" id="mobile-button-two">마이페이지</Button>
                    </div>
            </div>
        </>
      )
}

export default PaymentMobile;