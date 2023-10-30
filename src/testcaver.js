import Caver from "caver-js";
import axios from "axios";
import { Buffer } from "buffer";
import { useEffect, useState } from "react";

function TestCaver(){
    const styles = {
        weight:"100%",
        height:"46px"
    }


    const testimg = 'https://metadata-store.klaytnapi.com/c111da93-ef33-87db-0db4-97b3bde8a54b/3c2a845e-c169-d14a-59e5-1b2c1b46d44f.jpg';


    const {klaytn} = window;
    const caver = new Caver(klaytn);
    const [account,setAccount] = useState("");
    const [jsonURI,setJsonURI] = useState("");

    async function connect(){
        const accounts = await klaytn.enable();
        if(klaytn.networkVersion == 8217){
            console.log("메인넷");
        }
        else if(klaytn.networkVersion == 1001){
            console.log("테스트넷");
        }
        else {
            alert("연결되지 않음");
            setAccount("");
            return;
        }
        console.log(accounts);
        setAccount(accounts[0]);
        console.log(account);
    }

    async function MetaData(tilte,position,imgURI){
        const params = {
            key: process.env.REACT_APP_ACCESSKEY_ID,
            password: process.env.REACT_APP_SECRET_ACCESSKEY,
          };
          const base64Credentials = Buffer.from(
            `${params.key}:${params.password}`
          ).toString("base64");
          
          const data = JSON.stringify({
            "metadata": {
              "name": tilte,
              "description": position,
              "image": imgURI
            }
          });
          axios
            .post('https://metadata-api.klaytnapi.com/v1/metadata',data,
              {
                headers: { 
                  'x-chain-id': '1001', 
                  'Authorization': `Basic ${base64Credentials}`, 
                  'Content-Type': 'application/json'
                },
              }

            )
            .then((response) => {
              //console.log(JSON.stringify(response.data));
              // console.log(JSON.stringify(response.data.uri));
              //setJsonURI(JSON.stringify(response.data.uri));
              const uri = JSON.stringify(response.data.uri);
              setJsonURI(uri);
              console.log(jsonURI);
              //return JSON.stringify(response.data.uri);
            })
            .catch((error) => {
              console.log(error);
              setJsonURI("");
            });
    }

    async function Mint(tilte,position,imgURI){
      //.env에서 accesskey와 secretKey를 받아서 base64로 인코딩
      const params = {
        key: process.env.REACT_APP_ACCESSKEY_ID,
        password: process.env.REACT_APP_SECRET_ACCESSKEY,
      };
      const base64Credentials = Buffer.from(
        `${params.key}:${params.password}`
      ).toString("base64");
      
      //카이카스 계정을 account로 받아옴
      try{
        connect();
        if(account == ""){
          throw new Error("account error");
        }
        const owner = account;

        // 메타데이터 URI를 jsonURI로 받아옴
        MetaData(tilte,position,imgURI); 
        if(jsonURI == ""){
          throw new Error("metadata api error");
        }

        const id = "0x12"; //테스트값 ,서버에서 토큰아이디를 중복되지 않게 받아와야됨
        
        const data = JSON.stringify({
          "to": owner,
          "id": id,
          "uri": jsonURI
        });
        //컨트랙트 alias 조회 과정 필요한지 검토(지금은 test)
        axios
          .post('https://kip17-api.klaytnapi.com/v2/contract/test/token',data,
            {
              headers: { 
                'x-chain-id': '1001', 
                'Authorization': `Basic ${base64Credentials}`, 
                'Content-Type': 'application/json'
              },
            }

          )
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      } catch(e){
          alert(e);
      }
      
    }

    useEffect(()=>{
        connect();
    },[]);
    return <>
        <div style={styles}></div>
        <div>
            account = {account}
        </div>
        <br/>
        <button onClick={()=>Mint('COME FROM AWAY','A16',testimg)}>test</button>
    </>
}
export default TestCaver;