import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderDiv = styled.div`
    display: flex;
    /* padding-bottom: 1rem; */
    justify-content: space-between;
    
`;
const NavMenu=styled.ol`
    display:flex;
    list-style: none;
`
const NavMenuItems=styled.li`
    margin-left: 1rem;
`

function Header(){
    return(
       <HeaderDiv>

            <div>
            <FontAwesomeIcon icon="fa-solid fa-check-square" />
            아이콘 및 제목
            </div>
            <NavMenu>
                <NavMenuItems>
                    항목
                </NavMenuItems>
                <NavMenuItems>
                    항목
                </NavMenuItems>
                <NavMenuItems>
                    항목
                </NavMenuItems>

                </NavMenu>

       </HeaderDiv>
    )
}
export default Header