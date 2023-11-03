import { Container, Table, Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import axios from 'axios';
function FreePost(){
  const stylea={
    
      whiteSpace: 'nowrap', /* 텍스트 줄 바꿈 금지 */
      overflow: 'hidden', /* 넘치는 부분 숨김 */
      textOverflow: 'ellipsis', /* 넘치는 부분에 '...' 추가 */
      maxWidth: '100%', /* 최대 너비 설정 (원하는 비율에 맞게 조정) */
      fontSize:'10%'
    
  }
  const [posts,setPosts]=useState([]);
   useEffect(
    ()=>{
        axios.get('http://localhost:3001/posts')
        .then((response)=>{
            setPosts(response.data)
        })
        .catch((error)=>console.log(error))
    }
    ,[])


    return(
<Container>
<Table striped bordered hover style={stylea}>
        <thead>
          <tr>
            <th className="col-md-1">번호</th>
            <th className="col-md-1">말머리</th>
            <th className="col-md-3">제목</th>
            <th className="col-md-1">글쓴이</th>
            <th className="col-md-1">작성일</th>
            <th className="col-md-1">조회수</th>
          </tr>
        </thead>
        <tbody>
          
          {
           posts.map((datas)=>{
            return (
              <tr key="1">
            <td>post.id</td>
            <td>post.title</td>
            <td>o</td>
            <td>o</td>
            <td>o</td>
            <td>o</td>
          </tr>
            )
            
           }) 
        }
        
        </tbody>
      </Table>
    </Container>
    )
}
export default FreePost
