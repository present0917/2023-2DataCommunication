import React from "react";
import "../Css/PaymentContainer.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ConcertData from "./ConcertData";

const PaymentSummary=(props)=>{
    const {id,sendDateInfo,currentDate,selectedSeats}=props;

    const concert=ConcertData.find(datas=>datas.id==id);
    
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
            <div className="payment-summary">
                    <span className="payment-little-title">
                        주문 요약 정보
                    </span>
                    <hr className="payment-summary-hora"/>
                    <div className="payment-table-body">
                       {/*  <div className="payment-table-left">
                            <div className="payment-table-left-odd">
                                <span className="ao">
                                   구매한 콘서트 
                                </span>
                                
                            </div>
                            <div className="payment-table-left-even">
                                <span className="ao">구매 좌석</span>
                            </div>
                            <div className="payment-table-left-odd">
                                <span className="ao">주문 일시</span>
                            </div>
                        </div>
                        <div className="payment-table-right">
                            <div className="payment-table-right-odd">
                                <span className="ab">
                                컴 프롬 어웨이
                                </span>
                            </div>
                            <div className="payment-table-right-even">
                                <span className="ab">
                                구매 좌석
                                </span>
                            </div>
                            <div className="payment-table-right-odd">
                                <span className="ab">
                                주문 일시
                                </span>
                            </div>
                        </div> */}
                        <div className="payment-table-body">
                            <div className="payment-content-1">
                                <div className="payment-table-content-left">
                                    <span>
                                        구매한 콘서트
                                    </span>
                                </div>
                                <div className="payment-table-content-right">
                                    <span>
                                        {concert.title}
                                    </span>
                                </div>
                            </div>
                            <div className="payment-content-2">
                                <div className="payment-table-content-left">
                                    <span>
                                        구매한 좌석
                                    </span>
                                </div>
                                <div className="payment-table-content-right">
                                    <span>
                                    {selectedSeats.map(seat => `${seat.col}열 ${seat.row}번`).join(', ')}
                                    </span>
                                </div>
                            </div>
                            <div className="payment-content-1">
                                <div className="payment-table-content-left">
                                    <span>
                                        주문 시간
                                    </span>
                                </div>
                                <div className="payment-table-content-right">
                                    <span>
                                        {formattedDate}
                                    </span>
                                </div>
                            </div>
                            <div className="payment-content-2">
                                 <div className="payment-table-content-left">
                                    <span>
                                        콘서트 시간
                                    </span>
                                </div>
                                <div className="payment-table-content-right">
                                    <span>
                                    {sendDateInfo}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="payment-button">
                <Button as={Link} to='/' variant="danger" size="lg" id="payment-button-two">홈 페 이 지 로</Button>
                <Button as={Link} to='/test' variant="secondary" size="lg" id="payment-button-two">마 이 페 이 지</Button>
            </div>
        </>
    )

}

export default PaymentSummary;