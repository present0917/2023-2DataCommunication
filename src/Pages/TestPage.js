import axios from "axios";
import { useState,useEffect } from "react";
import NftCard from "../Components/NftCard";
import styled from "styled-components";



function TestPage()
{
    const CardsDiv=styled.div`

display: flex;
flex-wrap: wrap;
width:80%;
margin:10%;
margin-top:5%;
margin-bottom:5%;
border: solid;
`
    const [cards,setCards]=useState([]);
    
    useEffect(()=>{
        axios.get('https://api.opensea.io/v2/collection/deadmigos-official/nfts?limit=3',{
            headers:{
                accept: 'application/json', 
                'X-API-KEY': process.env.REACT_APP_OPENSEA_API_KEY
            }
        })
        
    .then((response)=>{
        setCards(response.data.nfts)
        //console.log(response.data.nfts)
    })
    .catch((error)=>console.log(error))

},[]);



// axios.get('https://api.opensea.io/v2/collection/deadmigos-official/nfts?limit=3',{
//     headers:{
//         accept: 'application/json', 
//         'X-API-KEY': process.env.REACT_APP_OPENSEA_API_KEY
//     }
// })

//   .then(function (response) {
//     console.log(response.data.nfts);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//   });


    return(
        <>
        <CardsDiv>
            {cards.map(cards=>{
                return (<NftCard data={cards}/>)
            })
            }   
        </CardsDiv>
        </>
    )
}
export default TestPage