import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function DeptList() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/dept')
      .then(e => {setArr(e.data)})

  }, []);

  return (
    <div>
      <h1>List Login</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>deptno</th>
            <th>dname</th>
            <th>loc</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((bean, idx) => (
            <tr key={idx}>
              <td>{bean.deptno}</td>
              <td>{bean.dname}</td>
              <td>{bean.loc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DeptList