import React from "react";
import "../Css/DetailMobile.css";

const DetailMobileTitle=({title,day})=>{
    return (
        <>
            <div className="mobile-title">
                {title}
            </div>
            <div className="mobile-duration">
                {day}
            </div>
            <hr className="mobile-hora"/>
        </>
    )
}

export default DetailMobileTitle