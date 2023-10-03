import { Modal, Button ,Form} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
function LoginModal(props) {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = (e) => {
    const currneId = e.target.value;
    setId(currneId);
    console.log(id)
  }
  const onChangePw = (e) => {
    const currnePw = e.target.value;
    setPassword(currnePw);
    console.log(currnePw)
  }
  const submit=()=>
  {
    axios.post('/login', {
      loginId: id,
      password: password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header >
          <Modal.Title>로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>아이디</Form.Label>
        <Form.Control placeholder="ID" id="ID" name="ID" value={id}onChange={onChangeId}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="Password" id="password" name="password" value={password}onChange={onChangePw}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="로그인 유지하기" />
      </Form.Group>

    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>
            Close
          </Button>
          <Button onClick={submit} >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;