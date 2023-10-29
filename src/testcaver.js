import Caver from "caver-js";
import axios from "axios";
import { Buffer } from "buffer";
import img from "./img/concert1.jpg"
import { useEffect, useState } from "react";

function TestCaver(){
    const styles = {
        weight:"100%",
        height:"46px"
    }

    const {klaytn} = window;
    const caver = new Caver(klaytn);
    const [account,setAccount] = useState();
    const [imgURI,setImgURI] = useState("");

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
            return;
        }
        console.log(accounts);
        setAccount(accounts[0]);
        console.log(account);
    }

    function metaData(){
        const params = {
            key: process.env.REACT_APP_ACCESSKEY_ID,
            password: process.env.REACT_APP_SECRET_ACCESSKEY,
          };
          const xChainId = 8217;
        
          // 이미지 업로드
        
          const base64Credentials = Buffer.from(
            `${params.key}:${params.password}`
          ).toString("base64");
          
          const formData = new FormData();
          formData.append('file',img);
          axios
            .post("https://metadata-api.klaytnapi.com/v1/metadata/asset", formData, {
              headers: {
                "x-chain-id": xChainId,
                Authorization: `Basic ${base64Credentials}`,
                'Content-Type': 'multipart/form-data'
              },
            })
            .then((response) => {
              // 요청이 성공했을 때의 처리
              console.log("Response:", response.data);
              setImgURI(response.data.uri);
            })
            .catch((error) => {
              // 요청이 실패했을 때의 처리
              console.error("Error:", error);
              return;
            });
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
        <button onClick={()=>metaData()}>test</button>
    </>
}
export default TestCaver;