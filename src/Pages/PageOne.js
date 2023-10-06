//카드식게시판
import axios from "axios";
import CardPost from "../Components/CardPost";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CardsDiv=styled.div`

display: flex;
flex-wrap: wrap;
width:80%;
margin:10%;
margin-top:1rem;
margin-bottom:5%;
border: solid;
`
function PageOne()
{
    const [cards,setCards]=useState([]);

    useEffect(()=>{
    const test=axios.get(`http://localhost:3001/data`)
    .then((response)=>{
        setCards(response.data)
    })
    .catch((error)=>console.log(error))

},[]);
    return(
        <CardsDiv>
            {cards.map(cards=>{
                return (<CardPost data={cards}/>)
            })
            }
            
        </CardsDiv>
    )
}
export default PageOne;