import axios from "axios";
import GetAccount from "./GetAccount";

async function MetaData(tilte, position, imgURI) {
  return new Promise((resolve, rejects) => {
    const Credentials = process.env.REACT_APP_KLAYTN_BASE_KEY;

    const data = JSON.stringify({
      metadata: {
        name: tilte,
        description: position,
        image: imgURI,
      },
    });
    axios
      .post("https://metadata-api.klaytnapi.com/v1/metadata", data, {
        headers: {
          "x-chain-id": "1001",
          Authorization: `Basic ${Credentials}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.uri);
        resolve(response.data.uri);
      })
      .catch((error) => {
        console.log(error);
        rejects(-1);
      });
  });
}

//
async function Mint(tilte, position, imgURI, owner, tokenId) {
  const jsonURI = await MetaData(tilte, position, imgURI);
  return new Promise((resolve, rejects) => {
    const Credentials = process.env.REACT_APP_KLAYTN_BASE_KEY;

    if (jsonURI === -1) {
      rejects("데이터 로드 실패");
    }

    //컨트랙트 alias 조회 과정 추가필요
    const alias = process.env.REACT_APP_CONTRACT_ALIAS;

    const requestData = {
      to: owner,
      id: tokenId,
      uri: jsonURI,
    };

    const headers = {
      "x-chain-id": "1001",
      Authorization: "Basic " + Credentials,
      "Content-Type": "application/json",
    };
    const url =
      "https://kip17-api.klaytnapi.com/v2/contract/" + alias + "/token";
    axios
      .post(url, requestData, { headers })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        resolve(true);
      })
      .catch((error) => {
        console.log(error);
        rejects("민팅 실패");
      });
  });
}
async function checkNFT(token) {
  return new Promise((resolve, rejects) => {
    const alias = process.env.REACT_APP_CONTRACT_ALIAS;
    const apiUrl = `https://kip17-api.klaytnapi.com/v2/contract/${alias}/token/${token}`;
    const Credentials = process.env.REACT_APP_KLAYTN_BASE_KEY;

    const headers = {
      "x-chain-id": "1001",
      Authorization: `Basic ${Credentials}`,
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        //console.log("Response:", response.data);
        if (
          response.data.createdAt == response.data.updatedAt &&
          response.data.previousOwner ==
            "0x0000000000000000000000000000000000000000"
        ) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        rejects("토큰 기록 조회 실패");
      });
  });
}
//소유자 지갑 토큰 조회
//
async function searchNFT(owner) {
  return new Promise((resolve, rejects) => {
    const Credentials = process.env.REACT_APP_KLAYTN_BASE_KEY;

    const alias = process.env.REACT_APP_CONTRACT_ALIAS;

    const headers = {
      "x-chain-id": "1001",
      Authorization: "Basic " + Credentials,
    };
    const url =
      "https://kip17-api.klaytnapi.com/v2/contract/" +
      alias +
      "/owner/" +
      owner;
    //console.log(url);
    axios
      .get(url, { headers })
      .then((response) => {
        //console.log("Server Response:", response.data);
        const imageUrl = response.data.items[0].tokenUri; // tokenUri 속성으로 수정
        //console.log("Image URL:", imageUrl);
        resolve(response.data.items);
      })
      .catch((error) => {
        console.log(error);
        console.log("Server Error:", error);
        rejects("지갑 토큰 조회 실패");
      });
  });
}

export { Mint, checkNFT, searchNFT };