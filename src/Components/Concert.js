import React from "react";
import '../Css/Concert.css';

const Concert=(props)=>{
    

    if(!props.concert){
        return <>Error! no Movie</>
    }

    return (<>
        <div className="concert-content">
            <div className="concert-img">
                <img 
                    src={require(`../img/concert${props.num+1}.jpg`)} 
                    alt={`../img/concert${props.num+1}.jpg`}/>
            </div>
            <h4 id="concert-content-title">{props.concert.title}</h4>
            <p>{props.concert.day}</p>
        </div>
    </>);
}

export default Concert