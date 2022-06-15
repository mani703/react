import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './ex01';



function Car3() {
  return <h2>Car3!</h2>
}

class Car4 extends React.Component{
  
  constructor() {
    super();
    this.state = {msg: '클릭안됨'};
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  render(){
    return(
      <div>
        <button onClick={()=>{ this.state={msg:'클릭됨'} }}>클릭</button>
        <p>{this.state.msg}</p>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Car4/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
