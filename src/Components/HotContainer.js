import React, { useState } from "react";
import ConcertData from "./ConcertData";
import Concert from "./Concert";
import '../Css/HotContainer.css';
import { Link } from "react-router-dom";

const HotContainer=()=>{
    const [concerts,setConcerts]=useState(ConcertData);
    
    return (<>
        <div className="hot-container">
                {
                    concerts.map((concert,i)=>{
                        
                        return (
                        <Link to={`/detail/${concert.id}`}>
                        <Concert concert={concert} num={i} key={i} className="movie-list" />
                        </Link>
                        )
                    })
                }
        </div>
    </>);
}

export default HotContainer;