import React, { useEffect, useState } from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import { auth } from "./firebase";
import Welcome from './components/Home/Welcome';
import Signup from "./components/Auth/Signup";
import EmployeeData from './components/Home/employee';
import SearchData from "./components/SearchData/SearchData";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
            <Routes>
              {/* <Route path='/' element={<Home/>}/> */}
              <Route path='/Login' element={<Login/>}/>
              <Route path='/' element={<Signup/>}/>
              <Route path='/Welcome' element={<Welcome name={userName}/>}/>
              <Route path='/employee' element={<EmployeeData/>}/>
              <Route path="/search" element={<SearchData/>}/>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
