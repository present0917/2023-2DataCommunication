import { useEffect, useState } from "react";
import GetAccount from "./klaytn/GetAccount";
import { Mint, searchNFT } from "./klaytn/UseKlaytn";

function TestCaver() {
  const styles = {
    weight: "100%",
    height: "46px",
  };

  const testimg =
    "https://metadata-store.klaytnapi.com/c111da93-ef33-87db-0db4-97b3bde8a54b/3c2a845e-c169-d14a-59e5-1b2c1b46d44f.jpg";

  const { klaytn } = window;
  const [account, setAccount] = useState("");

  const test=()=>{
    searchNFT()
    .then((response)=>{
      console.log(response)
   }
   )
   .catch((error)=>console.log(error))
  }
  useEffect(() => {
    if (account == "") {
      GetAccount()
        .then((result) => {
          // 결과 처리
          console.log("Result:", result);
          setAccount(result[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
  return (
    <>
      <div style={styles}></div>
      <div>account = {account}</div>
      <br />
      <button onClick={() => Mint("COME FROM AWAY", "A16", testimg,'0x54cd13a3789b6f16db7f1a8a5e428190f278b3d5')}>
        test
      </button>
      <button onClick={()=>test()}>
        searnft
      </button>
    </>
  );
}
export default TestCaver;
