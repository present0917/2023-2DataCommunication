import React, { useState,useEffect } from "react";
import ConcertData from "./ConcertData";
import Concert from "./Concert";
import '../Css/HotContainer.css';
import { Link } from "react-router-dom";
import axios from "axios";
const HotContainer=({list})=>{
    const [concerts,setConcerts]=useState(ConcertData);

    useEffect(
        () => {
         
        }
        , [])


    return (<>
        <div className="hot-container">
                {
                    //원래거
                    // concerts.map((concert)=>{
                        
                    //     return (
                    //     <Link to={`/detail/${concert.id}`} key={concert.id}>
                    //     <Concert concert={concert} num={concert.id} key={concert.id} className="movie-list" />
                    //     </Link>
                    //     )
                    // })
                    
                    //연동
                    list.map((concert)=>{
                        
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