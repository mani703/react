import React, { useRef } from 'react'
import { useContext } from 'react';
import UserCtxt, { LOGIN } from './../modules/Store';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const user = useContext(UserCtxt);
  const navigate = useNavigate();
  const inputId = useRef();
  const inputPw = useRef();

  const loginHandler = (e) => {
    e.preventDefault();
    // select * from ~
    user.dispatch({type:LOGIN, username:inputId.current.value});
    navigate('/');
  };

  return (
    <>
      <h1>login page</h1>
      <form onSubmit={loginHandler}>
        <label> id:
          <input ref={inputId}/>
        </label>
        <label> pw:
          <input ref={inputPw}/>
        </label>
        <button type='submit'>login</button>
      </form>
    </>
  )
}

export default LoginPage