import './App.css';
import Home from './page/Home';
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Emp from './page/Emp';
import Dept from './page/Dept';
import Login from './page/Login';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">menu1</Link>
        <Link to="/emp">menu2</Link>
        <Link to="/dept">menu3</Link>
        <Link to="/login">menu4</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/emp" element={<Emp/>}/>
        <Route path="/dept" element={<Dept/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
