import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Practice() {

  const [data,setData]=useState(
    {
      title:'',
      content:``,
    }
  )


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // 글쓰기 데이터를 처리하는 로직을 구현하세요.
    console.log('글쓰기 데이터:', { title, content });
    // 데이터를 서버에 전송하거나 다른 작업을 수행할 수 있습니다.
  };

  return (
    <div className="container">
      <h1>글 작성 페이지</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="title">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={handleTitleChange}
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="내용을 입력하세요"
            value={content}
            onChange={handleContentChange}
          />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Control type="file" multiple />
      </Form.Group>
        <Button variant="primary" type="submit">
          저장
        </Button>
      </Form>
    </div>
  );
}

export default Practice;
