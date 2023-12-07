import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import LoginModal from "../Modal/LoginModal";
import GetAccount from "../klaytn/GetAccount";
import { Mint } from "../klaytn/UseKlaytn";

const Cont = styled.div`
  margin: 0 auto;

  width: 80%;
`;
const Seat = styled.button`
  &.selected {
    background-color: aqua;
  }
  margin: 0 auto;
  height: 50px;
  width: 50px;
`;

const ReservationPageNet = ({}) => {
  useEffect(() => {
    axios
      .get(`http://localhost:8080/concert/detail/${params.id}/book`)
      .then((response) => {
        setSeats(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const location = useLocation();
  const params = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, setSeats] = useState([]);
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  const { state } = location;
  const { concert, sendDateInfo } = state;
  const id = concert.id;
  const navigate = useNavigate();

  //로그인 관련 state
  const [isOpen, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [account, setAccount] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const { klaytn } = window;
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

  function handleLogin() {
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
  useEffect(() => {
    if (account !== "" && isLogin === false) {
      setIsLogin(true);
    } else if (isLogin === true) {
      setIsLogin(false);
    }
  }, [account]);

  useEffect(() => {
    if (seats) {
      console.log(seats);
      setRows(Array.from(new Set(seats.map((seat) => seat.row))));
      setCols(Array.from(new Set(seats.map((seat) => seat.col))));
    }
  }, [seats]);

  const handleSeatClick = (row, col) => {
    const seat = { row, col };
    const isSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.row === row && selectedSeat.col === col
    );

    if (isSelected) {
      setSelectedSeats(
        selectedSeats.filter(
          (selectedSeat) =>
            !(selectedSeat.row === row && selectedSeat.col === col)
        )
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }

    setSelectedSeats((newSeats) => {
      console.log(newSeats);
      return newSeats;
    }); //console.log 조회용 (usestate업데이트 전 값이 출력되어 콜백으로 호출)
  };

  const request = async () => {
    console.log(selectedSeats);
    if (selectedSeats.length <= 0) {
      alert("좌석을 선택해주세요.");
    } else {
      const title = `${concert.title}`;
      console.log(concert);
      const imgURI = await axios.get(`http://localhost:8080/mint/images/1`);
      try {
        selectedSeats.forEach((seat) => {
          const seats = `${seat.col + seat.row}`;
          axios
            .post(`http://localhost:8080/concert/detail/${params.id}/book`, [
              seat,
            ])
            .then(function (response) {
              const tokenId = response.data.createdToken;

              Mint(title, seats, imgURI.data.imageUrl, account, tokenId);
            })
            .catch(function (error) {
              console.log(error);
            });
        });
        const currentDate = new Date();
        navigate(`/payment/${id}`, {
          state: { concert, sendDateInfo, currentDate, selectedSeats },
        });
      } catch (e) {
        console.log(e);
      }
     }
  };

  return (
    <>
      <Cont>
        <h1>좌석 예약</h1>
        {cols.map((col) => (
          <div>
            {rows.map((row) => {
              const seatInfo = seats.find(
                (seat) => seat.row === row && seat.col === col
              );
              const isSelected = selectedSeats.some(
                (selectedSeat) =>
                  selectedSeat.row === row && selectedSeat.col === col
              );
              return (
                <Seat
                  className={`seat ${isSelected ? "selected" : ""}`}
                  onClick={() => handleSeatClick(row, col)}
                  key={`seat-${row}-${col}`}
                  disabled={seatInfo.isBooked ? true : false}
                >
                  {seatInfo ? `${seatInfo.col + seatInfo.row}` : ""}
                </Seat>
              );
            })}
          </div>
        ))}
      </Cont>
      {!isLogin ? (
        <Button
          onClick={() => {
            setOpen(true);
            setDisabled(false);
          }}
        >
          로그인
        </Button>
      ) : (
        <Button
          onClick={() => {
            request();
          }}
        >
          구매
        </Button>
      )}
      <LoginModal
        isOpen={isOpen}
        setIsOpen={setOpen}
        disabled={disabled}
        setDisabled={setDisabled}
        handleClick={handleLogin}
      ></LoginModal>
    </>
  );
};
export default ReservationPageNet;