import { useEffect, useState } from "react";
import { Mint, searchNFT } from "./klaytn/UseKlaytn";
import LoginModal from "./Modal/LoginModal";
import GetAccount from "./klaytn/GetAccount";

function TestCaver() {
  const [isOpen, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [account, setAccount] = useState("");
  const styles = {
    weight: "100%",
    height: "46px",
  };
  const { klaytn } = window;
  const testimg =
    "https://metadata-store.klaytnapi.com/c111da93-ef33-87db-0db4-97b3bde8a54b/3c2a845e-c169-d14a-59e5-1b2c1b46d44f.jpg";

  const test = () => {
    searchNFT()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  function handleLogin() {
    setDisabled(true);
    GetAccount()
      .then((res) => {
        setAccount(res);
        setOpen(false);
      })
      .catch((e) => {
        console.log(e);
      });
    setDisabled(false);
  }
  function handleClick() {
    if (account === "") {
      popup();
    } else {
      Mint("title", "A1", testimg, account, "0x1000000000000123")
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  const popup = () => {
    setOpen(true);
    setDisabled(false);
  };
  useEffect(() => {
    try {
      klaytn.on("accountsChanged", function (accounts) {
        setAccount(accounts[0]);
      });
      klaytn.on("disconnected", function () {
        setAccount("");
      });
      klaytn._kaikas.isUnlocked().then((res) => {
        if (res) {
          klaytn.enable().then((res) => {
            console.log(res);
            setAccount(res[0]);
          });
        }
      });
    } catch (e) {
      console.log(e);
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
      <button onClick={() => handleClick()}>testLogin</button>
      <LoginModal
        isOpen={isOpen}
        setIsOpen={setOpen}
        disabled={disabled}
        setDisabled={setDisabled}
        handleClick={handleLogin}
      ></LoginModal>
    </>
  );
}
export default TestCaver;
