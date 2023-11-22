import React, { useState } from "react";
import "../Css/PaymentContainer.css";
import PaymentSummary from "./PaymentSummary";
import { useLocation } from "react-router-dom";

const PaymentContainer=()=>{
    const location=useLocation();
    const {state}=location;
    const {id,sendDateInfo,currentDate,selectedSeats}=state;

    const [checkImg,setCheckImg]=useState('v');

    return (
        <>  
            <div className="payment-box">
                <img
                    src={require(`../img/${checkImg}.png`)}
                    className="check-img"
                />
                <p className="payment-alert-text">
                    <span className="alert-say-thx">
                        감사합니다.
                    </span>
                    <span className="alert-pay-done">
                        결제가 완료되었습니다.
                    </span>
                </p>
                <PaymentSummary 
                    id={id}
                    sendDateInfo={sendDateInfo}
                    currentDate={currentDate}
                    selectedSeats={selectedSeats}
                />
            </div>
            
        </>
    )
}

export default PaymentContainer