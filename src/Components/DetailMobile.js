import React from "react";
import DetailCalender from "./DetailCalender";
import "../Css/DetailMobile.css";
import DetailMobileTitle from "./DetailMobileTitle";

const DetailMobile=({concert})=>{
    return (
        <>
            <div className="mobile-container">
                <DetailMobileTitle title={concert.title} day={concert.day}/>
                <div className="mobile-image">
                    <img
                        src={require(`../img/concert${concert.id+1}.jpg`)}
                        alt={"bug"}
                        style={{width:"60%"}}
                    />
                </div>
                <DetailCalender id={concert.id}/>
            </div>
        </>
    )
}

export default DetailMobile;