import React, { useState, useEffect, useContext } from "react";
import GetAccount from "./klaytn/GetAccount";
import ReactModal from "react-modal";
import kaikas from "./img/kaikas_icon.png";
import axios from "axios";

const WalletContext = React.createContext();
const userAgent = navigator.userAgent;
const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

export const WalletProvider = ({ children }) => {
  const [isOpen, setOpen] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [account, setAccount] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(false);
  const [requestKey, setRequestKey] = React.useState("");
  const { klaytn } = window;

  const style = {
    position: "relative",
    width: "80%",
    border: "none",
    display: "inline-block",
    padding: "15px 30px",
    "border-radius": "15px",
    "text-decoration": "none",
    textAlign: "center",
    "justify-content": "space-between",
    "font-size": "30px",
  };
  const simbolStyle = {
    height: "30px",
    width: "30px",
    "margin-right": "10px",
  };
  function modalOn() {
    setOpen(true);
    setDisabled(false);
    console.log("clicked");
    console.log(isOpen, disabled);
  }

  function sendRequest() {
    const apiUrl = "https://api.kaikas.io/api/v1/k/prepare";
    const requestData = {
      type: "auth",
      bapp: {
        name: "NFTIECT",
      },
    };
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
    };
    axios
      .post(apiUrl, requestData, { headers: headers })
      .then((response) => {
        console.log("Response:", response.data);
        const request_key = response.data.request_key;
        setRequestKey(request_key);
        window.open(`https://app.kaikas.io/a/${request_key}`, "_blank");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getResult() {
    axios
      .get(`https://api.kaikas.io/api/v1/k/result/${requestKey}`)
      .then((res) => {
        setAccount(res.data.result.klaytn_address);
        alert("account : " + res.data.result.klaytn_address);
      })
      .catch((e) => {
        alert("다시 시도해주세요");
      });
    setOpen(false);
  }
  try {
    klaytn.on("accountsChanged", function (accounts) {
      setAccount(accounts[0]);
    });
    klaytn.on("disconnected", function () {
      setAccount("");
      setIsLogin(false);
      console.log("logout");
    });
    klaytn._kaikas.isUnlocked().then((res) => {
      if (res) {
        klaytn.enable().then((res) => {
          console.log(res);
          setAccount(res[0]);
          setIsLogin(true);
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
  useEffect(() => {
    if (account !== "" && isLogin === false) {
      setIsLogin(true);
    } else if (isLogin === true) {
      setIsLogin(false);
    }
  }, [account]);
  function handleClick() {
    console.log(isMobile);
    if (isMobile) {
      sendRequest();
    } else {
      setDisabled(true);
      GetAccount()
        .then((res) => {
          if (res !== account) {
            setAccount(res);
            console.log("check");
          }
          if (isOpen === true) {
            setOpen(false);
          }
        })
        .catch((e) => {
          console.log(e);
        });
      setDisabled(false);
    }
  }

  return (
    <WalletContext.Provider value={{ isLogin, account, modalOn }}>
      {children}
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            "text-align": "center",
          },
          content: {
            position: "absolute",
            top: "20%",
            left: "35%",
            right: "35%",
            bottom: "40%",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            borderRadius: "20px",
            outline: "none",
            padding: "20px",
          },
        }}
        ariaHideApp={false}
      >
        <button style={style} disabled={disabled} onClick={() => handleClick()}>
          <img src={kaikas} style={simbolStyle}></img>
          Kaikas
        </button>
        <br></br>
        {isMobile ? <button onClick={() => getResult()}>확인</button> : <></>}
      </ReactModal>
    </WalletContext.Provider>
  );
};

export default WalletContext;
