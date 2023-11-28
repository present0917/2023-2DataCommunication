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
                    //원래거
                    //src={require(`../img/concert${props.num+1}.jpg`)} 
                    
                    //연동시
                    src={`http://localhost:8080/images/${props.concert.thumbnailUrl}`}
                    
                    style={{width:"100%"}}
                    />
            </div>
            <h5 id="concert-content-title">{props.concert.title}</h5>
            <p id="concert-content-day">{props.concert.day}</p>
        </div>
    </>);
}

export default Concert