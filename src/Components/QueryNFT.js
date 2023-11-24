import React, { useEffect, useState } from "react";
import { searchNFT, checkNFT } from "../klaytn/UseKlaytn";
import GetAcount from "../klaytn/GetAcount";
import NFTContainer from "./NFTContainer";
import MyPageTitle from "./MyPageTitle";
import "../Css/NFTContainer.css"

const QueryNFT = () => {
  const [account, setAccount] = useState('');
  const [nftData, setNFTData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nftJson, setNftJson] = useState(null); // 배열이 아닌 경우에 대한 처리를 위해 null로 초기화

  useEffect(() => {
    // 계정 정보 가져오기
    const fetchAccount = async () => {
      const acc = process.env.REACT_APP_MY_WALLET_KEY;
      setAccount(acc);
    };

    fetchAccount();
  }, []);

  useEffect(() => {
    console.log(account);
    // NFT 데이터 가져오기
    const fetchNFTData = async () => {
      if (account !== -1) {
        // 계정이 유효한 경우에만 NFT 데이터를 가져옴
        try {
          const nftResult = await searchNFT(account);
          setNFTData(nftResult);
          console.log('결과' + nftResult);
          const jsonDataArray = [];

          for (const item of nftResult) {
            console.log('NFT:', item);
            console.log('Token ID:', item.tokenId);
            console.log('token URL:', item.tokenUri);

            // tokenUri에 있는 JSON 데이터 가져오기
            const jsonUrl = item.tokenUri;
            try {
              const response = await fetch(jsonUrl);
              const jsonData = await response.json();
              jsonDataArray.push(jsonData);
            } catch (error) {
              console.error("Error fetching JSON data:", error);
            }
          }

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
        <MyPageTitle/>
        <div className="nft-main-container">
          {nftJson && nftJson.map((item, index) => (
            <NFTContainer
            key={index}
            title={item.name}
            description={item.description}
            image={item.image}
            />
            ))}
        </div>
            <div className="myaccount">Klaytn Account: {account}</div>
      </div>
    </>
  );
};

export default QueryNFT;