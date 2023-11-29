import React from "react";
import MapTest from "../Pages/MapTest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Css/DetailSubContainer.css";

const DetailSubCalender=({concert})=>{

    return (
        <>
            <hr className="sub-hora"/>
            <div className="sub-container">
                <div className="detail-info-container">
                    <p className="detail-info-text">
                        상세정보
                    </p>
                    <img className="detail-sub-img"
                        src={require(`../img/concert${concert.id+1}.jpg`)}
                        alt={"상세정보표시가 안됩니다."}
                    />
                </div>
                <hr className="sub-sub-hora"/>
                <div className="sub-map-container">
                    <div className="map-title">
                        <p className="map-text">{concert.hallAddress}</p>
                        <hr className="sub-hora-not-use-border"/>
                        <p className="map-title-text">
                            <FontAwesomeIcon icon="fa-solid fa-map-location-dot" style={{fontSize:"5rem",marginBottom:"1rem",color:"#868e96"}}/>
                            <br/>
                            찾아가는길
                        </p>
                    </div>
                    <MapTest concert={concert}/>
                </div>
            <hr className="sub-sub-hora"/>
            </div>
        </>
    )
}

export default DetailSubCalender