import axios from "axios";
import { useState, useEffect, useContext } from "react";
import NftCard from "../Components/NftCard";
import styled from "styled-components";
import QueryNFT from "../Components/QueryNFT";
import WalletContext from "../WalletContext";
import { useNavigate } from "react-router-dom";

function TestPage() {
  const CardsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 10%;
    margin-top: 5%;
    margin-bottom: 5%;
    border: solid;
  `;
  const { isLogin } = useContext(WalletContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/");
      alert("지갑이 연결되지 않으면 이용하실 수 없습니다.");
    }
  }, [isLogin]);

  //     useEffect(()=>{
  //         axios.get('https://api.opensea.io/v2/collection/deadmigos-official/nfts?limit=3',{
  //             headers:{
  //                 accept: 'application/json',
  //                 'X-API-KEY': process.env.REACT_APP_OPENSEA_API_KEY
  //             }
  //         })

  //     .then((response)=>{
  //         setCards(response.data.nfts)
  //         //console.log(response.data.nfts)
  //     })
  //     .catch((error)=>console.log(error))

  //     axios.get('https://api.opensea.io/api/v2/chain/baobab/account/0x54cD13A3789b6F16db7f1a8a5E428190F278B3d5/nfts?limit=3',{
  //             headers:{
  //                 accept: 'application/json',
  //                 'X-API-KEY': process.env.REACT_APP_OPENSEA_API_KEY
  //             }
  //         })

  //     .then((response)=>{
  //         setCardstwo(response.data.nfts)
  //         //console.log(response.data.nfts)
  //     })
  //     .catch((error)=>console.log(error))

  // },[]);

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

  return (
    <>
      {isLogin ? <QueryNFT /> : <></>}
      {/* <CardsDiv>
            {cards.map(cards=>{
                return (<NftCard data={cards}/>)
            })
            }   
        </CardsDiv>
        <CardsDiv>
            {cardstwo.map(cards=>{
                return (<NftCard data={cards}/>)
            })
            }   
        </CardsDiv> */}
    </>
  );
}
export default TestPage;
