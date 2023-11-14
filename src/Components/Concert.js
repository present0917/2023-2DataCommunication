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
                    alt={`../img/concert${props.num+1}.jpg`}
                    style={{width:"100%"}}
                    />
            </div>
            <h5 id="concert-content-title">{props.concert.title}</h5>
            <p id="concert-content-day">{props.concert.day}</p>
        </div>
    </>);
}

export default Concert