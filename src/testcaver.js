import Caver from "caver-js";
import { useEffect, useState } from "react";
import GetAcount from "./klaytn/GetAcount";
import Mint from "./klaytn/UseKlaytn";

function TestCaver() {
  const styles = {
    weight: "100%",
    height: "46px",
  };

  const testimg =
    "https://metadata-store.klaytnapi.com/c111da93-ef33-87db-0db4-97b3bde8a54b/3c2a845e-c169-d14a-59e5-1b2c1b46d44f.jpg";

  const { klaytn } = window;
  const caver = new Caver(klaytn);
  const [account, setAccount] = useState("");

  useEffect(() => {
    if (account == "") {
      GetAcount()
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
      <button onClick={() => Mint("COME FROM AWAY", "A16", testimg)}>
        test
      </button>
    </>
  );
}
export default TestCaver;
