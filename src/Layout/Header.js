import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import LoginModal from "../Components/LoginModal";
import { Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";
import HomeButton from "../Components/Homebutton";


import './testStyle.css'
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
    position:fixed;
`;

function Header() {
    
    return (
        <HeaderNav fill defaultActiveKey="/home" className='main-header'>  
            <Nav.Item>
                <Nav.Link> <Link to='/'><FontAwesomeIcon icon="fa-solid fa-house"/></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link> <Link to='/one'>Project</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link> <Link to='/two'>About</Link> </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link> <Link to='/test'>마이 페이지</Link> </Nav.Link>
            </Nav.Item>
        </HeaderNav>
    );
}

export default Header;