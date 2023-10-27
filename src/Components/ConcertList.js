import React from "react";
import '../Css/ConcertList.css';
import HotContainer from "./HotContainer";



const MovieList=()=>{
    return <>
        <div className="top-topic">
            What's hot?
        </div>
        <HotContainer/>
    </>
}

export default MovieList;