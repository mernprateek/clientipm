import React, { useState } from 'react';
import { BrowserRouter , Route, Link, Navigate , Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import Home from "./Home";
import './App.css';

const App = () => {
 

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Logout " element={<Logout  />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
