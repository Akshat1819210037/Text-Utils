import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState("light")
  const [alert,setalert] = useState(null)

  const showalert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    },1500);
  }

  const togglemode = ()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = "black"
      showalert("Dark Mode Enabled", "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = "white"
      showalert("Light Mode Enabled", "success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} togglemode = {togglemode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
          <Route path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route path="/" element={<Textform showalert={showalert} heading = "Enter text to analyse" mode={mode}/>}> 
          </Route>
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
