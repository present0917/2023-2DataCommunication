import React, { useState } from "react";
import { useParams } from "react-router-dom"
import DetailTitle from "../Components/DetailTitle";
import ConcertData from "../Components/ConcertData";
import PaymentContainer from "../Components/PaymentContainer";

const Payment=()=>{

    const params = useParams();
    const concert=ConcertData.find(datas => datas.id==params.id);
    console.log(concert);
    const pathTo=`/res/${concert.id}`

    return (
        <>
            <DetailTitle title={concert.title} day={concert.day}/>
            <PaymentContainer/>
        </>
    )

}

export default Payment