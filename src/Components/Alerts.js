import React from 'react';
import Alert from "react-bootstrap/Alert";

const Alerts = (props) => {
  return (
    <div>
    <Alert variant="info" style={{ width: "42rem" }}>
      <Alert.Heading>
        로그인 정보가 잘못되었습니다.
      </Alert.Heading>
    </Alert>
  </div>
  );
};

export default Alerts;