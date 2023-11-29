import React from "react";
import "../Css/Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailTitle=({concert})=>{
    if(!concert.title||!concert.day){
        return <>Error! Missing title or day!</>;
    }

    return (
        <>
            <p className="detail-title">{concert.title}</p>
            <p className="detail-day">
                {concert.day} | {concert.hallAddress} <FontAwesomeIcon icon="fa-solid fa-map-location-dot"/>
            </p>
            <hr className="detail-horz"/>
        </>
    )
}

export default DetailTitle;