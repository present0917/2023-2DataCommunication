import React, { useState } from "react";
import ConcertData from "./ConcertData";
import Concert from "./Concert";
import '../Css/HotContainer.css';

const HotContainer=()=>{
    const [concerts,setConcerts]=useState(ConcertData);

    return (<>
        <div className="hot-container">
                {
                    concerts.map((concert,i)=>{
                        return <Concert concert={concert} num={i} key={i} className="movie-list"/>
                    })
                }
        </div>
    </>);
}

export default HotContainer;