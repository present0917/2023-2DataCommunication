import React from "react";

const Concert=(props)=>{
    

    if(!props.concert){
        return <>Error! no Movie</>
    }
    const imgClass=props.num===0?"big-img":"normal-img";

    return (<>
        <div className="Concert-container">
            <img 
                className={imgClass} 
                src={require(`../img/concert${props.num+1}.jpg`)} 
                alt={`../img/concert${props.num+1}.jpg`}/>
            <h4>{props.concert.title}</h4>
            <p>{props.concert.day}</p>
        </div>
    </>);
}

export default Concert