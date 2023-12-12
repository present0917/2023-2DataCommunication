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
                    //src={`http://localhost:8080/images/${concert.id+1}`}
                    src={require(`../img/concert${concert.id+1}.jpg`)}
                        alt={"bug"}
                        style={{width:"60%"}}
                    />
                </div>
                <DetailCalender concert={concert}/>
            </div>
        </>
    )
}

export default DetailMobile;