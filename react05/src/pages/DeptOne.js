import React from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function DeptOne() {
  const navigate = useNavigate();
  const [bean, setBean] = useState({});
  const [edit, setEdit] = useState(false);
  let { deptno } = useParams();

  useEffect(() => {
    axios.get('http://localhost:8080/api/dept/' + deptno)
      .then((e) => {
        setBean(e.data);
      })
  }, []);

  const editHandler = (e) => {
    e.preventDefault();
    setEdit(!edit);
    if(edit){
      axios.put('http://localhost:8080/api/dept/' + bean.deptno, bean)
        .then((e) => {
          if(e.data.result){
            navigate('/dept');
          }
        });
    }
  }

  const backHandler = () => navigate(-1);

  const inputHandler = (e) => {
    setBean({...bean, [e.target.name]:e.target.value})
  }

  const deleteHandler = () => {
    axios.delete('http://localhost:8080/api/dept/' + bean.deptno)
      .then((e) => e.status === 200 ? navigate('/dept') : window.alert('삭제 실패'))
      .catch((e) => window.alert('삭제 실패'));
  }

  return (
    <Container>
      <h1>{edit ? '수정페이지' : '상세 페이지'}</h1>
      <Form onSubmit={editHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>deptno</Form.Label>
          <Form.Control type="text" value={bean.deptno} name="deptno" readOnly={true}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>dname</Form.Label>
          <Form.Control 
            type="text" 
            value={bean.dname} 
            name="dname" 
            readOnly={!edit}
            onChange={inputHandler}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>loc</Form.Label>
          <Form.Control 
            type="text" 
            value={bean.loc} 
            name="loc" 
            readOnly={!edit}
            onChange={inputHandler}/>
        </Form.Group>

        <Button variant="primary" type="submit">Update</Button>
        {edit ? 
        <Button variant="secondary" type="submit">Reset</Button> 
        :
        <Button variant="danger" type="button" onClick={deleteHandler}>Delete</Button>
        }
        <Button variant="secondary" type="button" onClick={backHandler}>Back</Button>
      </Form>
    </Container>
  )
}

export default DeptOne