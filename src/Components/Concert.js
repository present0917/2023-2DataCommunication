import React from "react";
import '../Css/Concert.css';

const Concert=(props)=>{
    

    if(!props.concert){
        return <>Error! no Movie</>
    }
    const imgId=props.num===0?"big-img":"normal-img";

    return (<>
        <div className="concert-content">
            <img 
                id={imgId} 
                src={require(`../img/concert${props.num+1}.jpg`)} 
                alt={`../img/concert${props.num+1}.jpg`}/>
            <h4 id="concert-content-title">{props.concert.title}</h4>
            <p>{props.concert.day}</p>
        </div>
    </>);
}

export default Concert