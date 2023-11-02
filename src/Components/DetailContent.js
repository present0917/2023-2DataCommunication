import React from "react";
import "../Css/DetailContainer.css"

const DetailContent=(props)=>{
    const rate=props.rate;
    const runningTime=props.runningTime;
    const castMember=props.castMember;
    return (<>
        <div className="right-content-box">
                        <ul className="right-ul-list">
                            <div className="content-def-short">
                                등급
                            </div>
                            <li className="no-dot">
                                {rate}
                            </li>
                        </ul>
                        <ul className="right-ul-list">
                            <div className="content-def-long">
                                    관람시간
                                </div>
                                <li className="no-dot">
                                    {runningTime}
                            </li>
                        </ul>
                        <ul className="right-ul-list">
                            <div className="content-def-short">
                                출연
                            </div>
                            <li className="no-dot">
                                {castMember}
                            </li>
                        </ul>
                        <hr className="detail-content-horz"/>
                </div> 
    </>)
}

export default DetailContent;