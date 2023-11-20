import React, { useState } from "react";
import "../Css/PaymentContainer.css";
import PaymentSummary from "./PaymentSummary";

const PaymentContainer=(props)=>{
    const {id,selectedDate,selectedSeats}=props;

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
                    selectedDate={selectedDate}
                    selectedSeats={selectedSeats}
                />
            </div>
            
        </>
    )
}

export default PaymentContainer