import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import LoginModal from "../Components/LoginModal";
import { Modal } from "react-bootstrap";
import {Button} from "react-bootstrap";

const HeaderDiv = styled.div`
    display: flex;
    /* padding-bottom: 1rem; */
    justify-content: space-between;
    
`;


function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <HeaderDiv>

            <div>
                <FontAwesomeIcon icon="fa-solid fa-check-square" />
                아이콘 및 제목
            </div>
            {/* <NavMenu>
             */}
            <Nav variant="pills" defaultActiveKey="/home">

                <Nav.Item>
                    <Nav.Link>  <Link to='/' style={{ textDecorationLine: "none" }}>home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link> <Link to='/one' style={{ textDecorationLine: "none" }}>Card</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link> <Link to='/two' style={{ textDecorationLine: "none" }}>free</Link> </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={handleShow}> Login </Nav.Link>
                </Nav.Item>
               
            </Nav>
             <LoginModal show={show} onHide={handleClose}></LoginModal>



        </HeaderDiv >
    )
}
export default Header