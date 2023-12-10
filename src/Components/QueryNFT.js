import React, { useContext, useEffect, useState } from "react";
import { searchNFT, checkNFT } from "../klaytn/UseKlaytn";
import GetAccount from "../klaytn/GetAccount";
import NFTContainer from "./NFTContainer";
import MyPageTitle from "./MyPageTitle";
import TestCheck from '../Pages/TestCheckForRoute';
import { useLocation, useNavigate } from 'react-router-dom';
import "../Css/NFTContainer.css"
import WalletContext from "../WalletContext";

const QueryNFT = () => {
  // const [account, setAccount] = useState('');
  const {account} = useContext(WalletContext)
  const [nftData, setNFTData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nftJson, setNftJson] = useState(null); // 배열이 아닌 경우에 대한 처리를 위해 null로 초기화
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();
  let jsonUrl;
  const illegalData = {
    description
: 
"암표",
image
: 
"https://metadata-store.klaytnapi.com/c111da93-ef33-87db-0db4-97b3bde8a54b/3c2a845e-c169-d14a-59e5-1b2c1b46d44f.jpg",
name
: 
"암표입니다"
  }
  let jsonIllegalData = illegalData
  console.log(jsonIllegalData);

  // useEffect(() => {
  //   // console.log("라우팅테스트")
  //   TestCheck()
  //     .then((result) => {
  //       // console.log("Result:", result);
  //       if (result > 0) {
  //         // console.log('ok');
  //       }
  //       else {
  //         alert("지갑 로그인 필요");
  //         navigate(`/`);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  //   // 계정 정보 가져오기
  //   const fetchAccount = async () => {
  //     const acc = await GetAccount();
  //     setAccount(acc[0]);
  //   };

  //   fetchAccount();
  // }, []);

  useEffect(() => {
    console.log(account);
  
    const fetchNFTData = async () => {
      let illegalcheck = 0;
  
      if (account !== -1) {
        try {
          const nftResult = await searchNFT(account);
          setNFTData(nftResult);
  
          const jsonDataArray = [];
  
          for (const item of nftResult) {
            try {
              const result = await checkNFT(item.tokenId);
  
              if (result === true) {
                console.log("정상표");
                item.illegal = 0;
                jsonUrl = item.tokenUri;
              } else {
                console.log("암표");
                item.illegal = 1;
              }
  
              if (item.illegal === 0) {
                console.log("정상이였어");
                const response = await fetch(jsonUrl);
                const jsonData = await response.json();
                jsonDataArray.push(jsonData);
                console.log(jsonData);
              } else {
                console.log("암표였어");
                jsonDataArray.push(jsonIllegalData);
              }
            } catch (error) {
              console.error("Error fetching JSON data:", error);
            }
          }
  
          // 데이터 처리가 끝난 후에 한 번에 업데이트
          setNftJson(jsonDataArray);
        } catch (error) {
          setNFTData('Error fetching NFT data.');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
  
    fetchNFTData();
  }, [account]);

return (
  <>
    <div className="mypage-container">
      <MyPageTitle />
      <div className="nft-main-container">
        {nftJson && nftJson.map((item) => (
          <NFTContainer
            item={item}
            key={item.description}
          />
        ))}
      </div>
      <div className="myaccount">Klaytn Account: {account}</div>
    </div>
  </>
);
};

export default QueryNFT;