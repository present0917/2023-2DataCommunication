import React from "react";
import DetailCalender from "./DetailCalender";
import "../Css/DetailContainer.css"

const DetailContent=({concert})=>{
    const rate=concert.rate;
    const runningTime=concert.runningTime;
    const castMember=concert.castMember;

   

    return (<>
        <div className="right-content-box">
            <div className="right-content-text-box">
                        <ul className="right-ul-list">
                            <div className="content-def">
                                등급
                            </div>
                            <li className="no-dot">
                                {rate}
                            </li>
                        </ul>
                        <ul className="right-ul-list">
                            <div className="content-def">
                                    관람시간
                                </div>
                                <li className="no-dot">
                                    {runningTime}분
                            </li>
                        </ul>
                        <ul className="right-ul-list">
                            <div className="content-def">
                                출연
                            </div>
                            <li className="no-dot">
                                {castMember}
                            </li>
                        </ul>

            </div>
                        <hr className="detail-content-horz"/>
                        <DetailCalender concert={concert}/>
                </div> 
    </>)
}

export default DetailContent;