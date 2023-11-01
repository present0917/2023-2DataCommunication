import React from "react";
import "../Css/DetailContainer.css";

const DetailContainer=()=>{
    return (
        <>
            <div className="detail-container-box">
                <div className="left-content-box">
                    <img
                        src={require(`../img/concert1.jpg`)}
                        alt={"bug"}
                    />
                </div>
                <div className="right-content-box">
                        text
                </div>
            </div>
        </>
    )
}

export default DetailContainer;