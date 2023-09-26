import styled from "styled-components"
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
    font-size: 10%;
    
`
const UlLine=styled.div`
    border: 0.1px solid black;
   
`
function Footer(){
    return(
        <FooterDiv>
            <FooterUl>
                <li>
                    Github<br></br> https://github.com/present0917/2023-2DataCommunication
                </li>
                <UlLine></UlLine>
                <li>
                    항목
                </li>

            </FooterUl>
        </FooterDiv>
    )
}
export default Footer