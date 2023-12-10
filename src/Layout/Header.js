import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import LoginModal from "../Components/LoginModal";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import HomeButton from "../Components/Homebutton";
import "../Css/Navbar.css";
import WalletContext from "../WalletContext";

const HeaderNav = styled(Nav)`
  height: 40px;
  font-size: 20px;
  font-weight: 900;
  font-family: SUITE-Variable;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  * {
    text-decoration: none;
    color: black;
  }
  top: 0;
  width: 100%;
  z-index: 999999999;
`;

function Header() {
  const [mainNavbar, setmainNavbar] = useState(false);
  const [homeNavbar, setHomeNavbar] = useState(true);
  const { pathname } = useLocation();

  const { isLogin, modalOn } = useContext(WalletContext);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  useEffect(() => {
    changePage(pathname);
  }, [pathname]);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setmainNavbar(true);
    } else {
      setmainNavbar(false);
    }
  };

  const changePage = (pathname) => {
    if (pathname === "/") {
      setHomeNavbar(true);
    } else {
      console.log(pathname);
      setHomeNavbar(false);
    }
  };
  return (
    <HeaderNav
      fill
      defaultActiveKey="/home"
      className={homeNavbar ? "home-nav" : "out-nav"}
      id={mainNavbar ? "navbar-active" : "main-navbar"}
    >
      <Nav.Item>
        <Nav.Link as={Link} to="/" id="navbar-contents">
          <FontAwesomeIcon icon="fa-solid fa-house" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/one" id="navbar-contents">
          Project
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/two" id="navbar-contents">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {isLogin ? (
          <Nav.Link as={Link} to="/test" id="navbar-contents">
            마이 페이지
          </Nav.Link>
        ) : (
          <Nav.Link as={Link} onClick={() => modalOn()} id="navbar-contents">
            지갑 연결
          </Nav.Link>
        )}
      </Nav.Item>
    </HeaderNav>
  );
}

export default Header;
