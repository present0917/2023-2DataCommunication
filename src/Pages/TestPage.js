import axios from "axios";
import { useState,useEffect } from "react";
import NftCard from "../Components/NftCard";
function TestPage()
{

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
            {cards.map(cards=>{
                return (<NftCard data={cards}/>)
            })
            }
        </>
    )
}
export default TestPage