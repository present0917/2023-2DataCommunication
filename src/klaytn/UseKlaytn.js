import axios from "axios";
import GetAcount from "./GetAcount";

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
        rejects("fail to get metadata uri");
      });
  });
}

//
async function Mint(tilte, position, imgURI) {
  const owner = await GetAcount();
  const jsonURI = await MetaData(tilte, position, imgURI);
  return new Promise((resolve, rejects) => {
    const Credentials = process.env.REACT_APP_KLAYTN_BASE_KEY;
    //카이카스 지갑 조회

    console.log(owner);

    // 메타데이터 URI를 jsonURI로 받아옴

    //토큰아이디 조회 요청 추가필요;
    const id = "0x0";

    //컨트랙트 alias 조회 과정 추가필요
    const alias = process.env.REACT_APP_CONTRACT_ALIAS;
    const data = {
      to: `${owner[0]}`,
      id: `${id}`,
      uri: jsonURI,
    };

    axios
      .post(
        `https://kip17-api.klaytnapi.com/v2/contract/${alias}}/token`,
        data,
        {
          headers: {
            "x-chain-id": "1001",
            Authorization: `Basic ${Credentials}`,
            "Content-Type": "application/json",
          },
        }
      )
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
  const owner = await GetAcount();
  return new Promise((resolve, rejects) => {
    const alias = process.env.REACT_APP_CONTRACT_ALIAS;
    const apiUrl = `https://kip17-api.klaytnapi.com/v2/contract/${alias}/token/${token}/history`;
    const Credentials = process.env.REACT_APP_KLAYTN_BASE_KEY;

    const headers = {
      Authorization: `Basic ${Credentials}`,
      "x-chain-id": "1001",
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        console.log("Response:", response.data);
        if (
          response.data.items.from ==
            "0x0000000000000000000000000000000000000000" &&
          response.data.items.to == owner[0]
        ) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        rejects("토큰 조회 실패");
      });
  });
}

export default { Mint, checkNFT };
