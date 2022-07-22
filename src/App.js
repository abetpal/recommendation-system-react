//import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./components/home";
import Signup from'./components/signup';
import Signin from'./components/signin';
import React from 'react';

function App() {
  return (
    <React.StrictMode>
    <div className="wrapper">
      {/* <h1>Application</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path = '/home' element = {<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </React.StrictMode>
  );
}


export default App;
