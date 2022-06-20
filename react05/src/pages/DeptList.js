import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DeptList() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/dept')
      .then(e => { setArr(e.data) })
  }, []);

  return (
    <Container>
      <h1>List Login</h1>
      <CardGroup>
        {arr.map((bean, idx) => (
          <Card key={idx}>
            <Card.Body>
              <Card.Title>{bean.deptno}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{bean.dname}</Card.Subtitle>
              <Card.Text>{bean.loc}</Card.Text>
              <Card.Link as={Link} to={"/dept/"+bean.deptno}>Detail</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </Container>
  )
}

export default DeptList