//import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
//import Home from "./components/home";
import Signup from'./components/signup';
import Signin from'./components/signin';

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
