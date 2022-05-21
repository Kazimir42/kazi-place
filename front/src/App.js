import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState, useEffect} from 'react'
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
      <div className="min-h-screen bg-background">
        <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" exact element={<Home />}/>
              <Route path="/register" exact element={<Register />}/>
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
