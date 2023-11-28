import React from "react";
import '../Css/ConcertList.css';
import HotContainer from "./HotContainer";



const ConcertList=({list})=>{
    return <>
        <div className="top-topic">
            What's hot?
        </div>
        <HotContainer list={list}/>
    </>
}

export default ConcertList;