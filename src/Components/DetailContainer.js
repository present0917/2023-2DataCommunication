import React, { useState } from "react";
import DetailContent from "./DetailContent";
import "../Css/DetailContainer.css";

const DetailContainer=(props)=>{
    const concert=props.concert;
    console.log(concert);
    

    return (
        <>
            <div className="detail-container-box">
                <div className="left-content-box">
                    <img className="left-content-box-image"
                    //src={require(`../img/concert${concert.id+1}.jpg`)}
                        src={`http://localhost:8080/images/${concert.thumbnailUrl}`}
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