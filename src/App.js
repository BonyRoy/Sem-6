import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import Comparison from "./Comparison";
import Contact from "./Contact";
import Recomendation from "./Recomendation";
import Navbar from "./Navbar";
import Brands from "./Brands";
import Ford from "./Ford";
import Chatbox from "./Chatbox";
import { Routes ,Route } from 'react-router-dom';

const App =()=>{
    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Comparison" element={<Comparison/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/Recomendation" element={<Recomendation/>}/>
            <Route path="/Brands" element={<Brands/>}/>
            <Route path="/Ford" element={<Ford/>}/>
            <Route path="/Chatbox" element={<Chatbox/>}/>
        </Routes>
        </>
        );
};

export default App;
