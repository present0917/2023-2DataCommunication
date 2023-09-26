import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
const HeaderDiv = styled.div`
    display: flex;
    /* padding-bottom: 1rem; */
    justify-content: space-between;
    
`;

function Header() {
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
                    <Nav.Link eventKey="link-1" href="/one">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>


        

       </HeaderDiv >
    )
}
export default Header