import { Container, Table, Button } from 'react-bootstrap';
function FreePost(){
    return(
<Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>말머리</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
              <tr key="1">
                <td>post.id</td>
                <td>post.title</td>
                <td>
                  o
                </td>
                <td>o</td>
                <td>o</td>
                <td>o</td>
              </tr>
          </tbody>
        </Table>
      </Container>
    )
}
export default FreePost
