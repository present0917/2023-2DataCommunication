import React, { useState } from "react";
import DetailContent from "./DetailContent";
import "../Css/DetailContainer.css";

const DetailContainer=(props)=>{
    const concert=props.concert;

    return (
        <>
            <div className="detail-container-box">
                <div className="left-content-box">
                    <img
                        src={require(`../img/concert${concert.id+1}.jpg`)}
                        alt={"bug"}
                    />
                </div>
                {/* right ul list의 재사용성을 높여야함 */}
                <DetailContent 
                    id={concert.id}
                    rate={concert.rate}
                    runningTime={concert.runningTime}
                    castMember={concert.castMember}
                />
            </div>
        </>
    )
}

export default DetailContainer;