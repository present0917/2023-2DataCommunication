import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import LoginModal from "../Components/LoginModal";
import { Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";
import HomeButton from "../Components/Homebutton";
import '../Css/Navbar.css';

const HeaderNav = styled(Nav)`
    height:40px;
    font-size:20px;
    font-weight:bold;
    display: flex;
    flex-flow:row nowrap;
    background:transparent;
    justify-content:space-around;
    * {
        background:transparent;
        text-decoration:none;
        color:black;
    }
    top: 0;
    width:100%;
    z-index: 999999999;
    position:absolute;
`;

function Header() {
    const [mainNavbar,setmainNavbar]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',changeBackground);
    },[]);

    const changeBackground=()=>{
        if(window.scrollY>=300){
            setmainNavbar(true);
        }
        else{
            setmainNavbar(false);
        }
    }


    return (
        <HeaderNav fill defaultActiveKey="/home" className='main-header' id={mainNavbar?'navbar-active':'main-navbar'}>  
            <Nav.Item>
                <Nav.Link as={Link} to='/' id="navbar-contents"><FontAwesomeIcon icon="fa-solid fa-house"/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/one' id="navbar-contents">Project</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/two' id="navbar-contents">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/test' id="navbar-contents">마이 페이지</Nav.Link>
            </Nav.Item>
        </HeaderNav>
    );
}

export default Header;