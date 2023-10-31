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
                    concerts.map((concert)=>{
                        
                        return (
                        <Link to={`/detail/${concert.id}`} key={concert.id}>
                        <Concert concert={concert} num={concert.id} key={concert.id} className="movie-list" />
                        </Link>
                        )
                    })
                }
        </div>
    </>);
}

export default HotContainer;