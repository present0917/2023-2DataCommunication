import { Link } from "react-router-dom";
import styled from "styled-components"
import { useState } from "react";
import LoginModal from "../Components/LoginModal";

const FooterDiv = styled.div`
    padding: 1rem;
    background-color:gray;
    flex:1;
    align-items: stretch;   
    margin-top:2rem;
`;
const FooterUl=styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
    list-style: none;
    /* font-size: 10%; */
`
const UlLine=styled.div`
    border: 0.1px solid black;
   
`
function Footer(){
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <FooterDiv>
            <FooterUl>
                <li>
                    Github<br></br> https://github.com/present0917/2023-2DataCommunication
                </li>
                <UlLine></UlLine>
                <li className="login-submit">
                    <Link onClick={handleShow} style={{textDecorationLine:"none", color:"black"}}>Login</Link>
                </li>
                <LoginModal show={show} onHide={handleClose}></LoginModal>
            </FooterUl>
        </FooterDiv>
    )
}
export default Footer