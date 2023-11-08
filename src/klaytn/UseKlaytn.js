import axios from "axios";
import { Buffer } from "buffer";
import GetAcount from "./GetAcount";

const { klaytn } = window;

async function MetaData(tilte, position, imgURI) {
  return new Promise((resolve, reject) => {
    const params = {
      key: process.env.REACT_APP_ACCESSKEY_ID,
      password: process.env.REACT_APP_SECRET_ACCESSKEY,
    };
    const base64Credentials = Buffer.from(
      `${params.key}:${params.password}`
    ).toString("base64");

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
          "x-chain-id": "8217",
          Authorization: `Basic ${base64Credentials}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.uri);
        resolve(response.data.uri);
      })
      .catch((error) => {
        console.log(error);
        throw new Error("fail to get metadata uri");
      });
  });
}

async function Mint(tilte, position, imgURI) {
  //.env에서 accesskey와 secretKey를 받아서 base64로 인코딩
  const params = {
    key: process.env.REACT_APP_ACCESSKEY_ID,
    password: process.env.REACT_APP_SECRET_ACCESSKEY,
  };
  const base64Credentials = Buffer.from(
    `${params.key}:${params.password}`
  ).toString("base64");

  //카이카스 계정을 account로 받아옴
  try {
    const owner = await GetAcount();
    console.log(owner);

    // 메타데이터 URI를 jsonURI로 받아옴
    const jsonURI = await MetaData(tilte, position, imgURI);

    const id = "0x1a7"; //테스트값 ,서버에서 토큰아이디를 중복되지 않게 받아와야됨

    const data = {
      to: `${owner[0]}`,
      id: `${id}`,
      uri: jsonURI,
    };
    //컨트랙트 alias 조회 과정 필요한지 검토(지금은 test)
    axios
      .post("https://kip17-api.klaytnapi.com/v2/contract/test/token", data, {
        headers: {
          "x-chain-id": "1001",
          Authorization: `Basic ${base64Credentials}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    alert(e);
  }
}

export default Mint;
