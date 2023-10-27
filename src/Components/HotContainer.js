import React, { useState } from "react";
import ConcertData from "./ConcertData";
import Concert from "./Concert";

const HotContainer=()=>{
    const [concerts,setConcerts]=useState(ConcertData);

    return (<>
        <div className="hot-container">
            <div>
                {
                    concerts.map((concert,i)=>{
                        return <Concert concert={concert} num={i} key={i} className="movie-list"/>
                    })
                }
               </div>
        </div>
    </>);
}

export default HotContainer;