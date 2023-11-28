import { useEffect, useState } from "react";
import GetAcount from "./klaytn/GetAccount";
import { Mint, searchNFT } from "./klaytn/UseKlaytn";
import LoginModal from "./Modal/LoginModal";

function TestCaver() {
  const [isOpen, setOpen] = useState(false);
  const styles = {
    weight: "100%",
    height: "46px",
  };

  const testimg =
    "https://metadata-store.klaytnapi.com/c111da93-ef33-87db-0db4-97b3bde8a54b/3c2a845e-c169-d14a-59e5-1b2c1b46d44f.jpg";

  const { klaytn } = window;
  const [account, setAccount] = useState("");

  const test = () => {
    searchNFT()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  async function HandleButton() {}
  // useEffect(() => {
  //   if (account == "") {
  //     GetAcount()
  //       .then((result) => {
  //         // 결과 처리
  //         console.log("Result:", result);
  //         setAccount(result[0]);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // }, []);
  return (
    <>
      <div style={styles}></div>
      <div>account = {account}</div>
      <br />
      <button onClick={() => Mint("COME FROM AWAY", "A16", testimg)}>
        test
      </button>
      <button onClick={() => setOpen(true)}>searnft</button>
      <LoginModal isOpen={isOpen} setIsOpen={setOpen}></LoginModal>
    </>
  );
}
export default TestCaver;
