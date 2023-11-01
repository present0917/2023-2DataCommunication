import React from "react";
import "../Css/Detail.css";

const DetailTitle=(props)=>{
    if(!props.title||!props.day){
        return <>Error! Missing title or day!</>;
    }

    return (
        <>
            <p className="detail-title">{props.title}</p>
            <p className="detail-day">
                {props.day}
            </p>
            <hr className="detail-horz"/>
        </>
    )
}

export default DetailTitle;