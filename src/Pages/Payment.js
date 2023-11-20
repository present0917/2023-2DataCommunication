import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import DetailTitle from "../Components/DetailTitle";
import ConcertData from "../Components/ConcertData";
import PaymentContainer from "../Components/PaymentContainer";

const Payment=(props)=>{
    const location=useLocation();
    const {state}=location;
    const {id,selectedDate,selectedSeats}=state;

    const concert=ConcertData.find(datas => datas.id==id);


    return (
        <>
            <DetailTitle title={concert.title} day={concert.day}/>
            <PaymentContainer 
                id={id}
                selectedDate={selectedDate}
                selectedSeats={selectedSeats}
            />
        </>
    )

}

export default Payment