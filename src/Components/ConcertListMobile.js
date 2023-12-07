import React,{useState} from "react";
import ConcertData from "./ConcertData";
import { Link } from "react-router-dom";
import "../Css/ConcertList.css";
import "../Css/HotContainer.css";
import "../Css/Concert.css";

const ConcertListMobile=()=>{
    const [concerts,setConcerts]=useState(ConcertData);

    return (
        <>
            <div className="top-topic">
                What's hot?
            </div>
            <div className="hot-container-mobile">
                {
                    concerts.map((concert)=>{
                        return (
                            <Link to={`/detail/${concert.id}`} key={concert.id}>
                                <div className="concert-content-mobile">
                                    <div className="concert-img">
                                        <img
                                            className="concert-mobile-img" 
                                            //원래거
                                            src={require(`../img/concert${concert.id+1}.jpg`)} 
                                            
                                            
                                            />
                                    </div>
                                    <p className="concert-content-title-mobile">{concert.title}</p>
                                    <p className="concert-content-day">{concert.day}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ConcertListMobile