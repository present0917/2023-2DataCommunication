import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import { useEffect } from "react";
import DetailTitle from "../Components/DetailTitle";
import ConcertData from "../Components/ConcertData";
import PaymentContainer from "../Components/PaymentContainer";
import PaymentMobile from "../Components/PaymentMobile";

const Payment=(props)=>{
    const location=useLocation();
    const {state}=location;
    const {id,selectedDate,selectedSeats}=state;

    const concert=ConcertData.find(datas => datas.id==id);

    const [mobile, setMobile] = useState();
    useEffect(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          // mobile
          setMobile(true);
        } else {
          // desktop
          setMobile(false);
        }
      }, []);

    return (
        <>
            {!mobile&&<DetailTitle title={concert.title} day={concert.day}/>}
            {!mobile&&<PaymentContainer 
                id={id}
                selectedDate={selectedDate}
                selectedSeats={selectedSeats}
            />}
            {mobile&&<PaymentMobile
                concert={concert}
            />}
        </>
    )

}

export default Payment