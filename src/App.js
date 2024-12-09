import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';



function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
