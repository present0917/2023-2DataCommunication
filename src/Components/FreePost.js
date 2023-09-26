import { Container, Table, Button } from 'react-bootstrap';
function FreePost(){
    return(
<Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              <tr key="1">
                <td>post.id</td>
                <td>post.title</td>
                <td>
                  <Button variant="danger" >
                    Delete
                  </Button>
                </td>
              </tr>
          </tbody>
        </Table>
      </Container>
    )
}
export default FreePost
