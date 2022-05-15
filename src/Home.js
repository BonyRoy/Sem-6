import React from "react";
import { NavLink } from "react-router-dom";
import dance from "../src/images/dance.png";
import Carousel from "./Carousel";
import Chatbox from "./Chatbox";
import './Home.css';
import './Brands';

const Home =()=>{
  return(
      <>
      <section id='header'className="d-flex align-item-centre">
      <div className="container-fluid nav-bg">
      <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">
      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centre flex-column">
      <br></br><br></br><br></br><br></br>
      <h1>Find Your Perfect Ride with</h1> 
      <h1
      style={ {
      color: '#1b3bc9',
      }}
      >Infinity Car Bazar</h1>
      <h6 className="my-3"
      style={ {
      fontFamily:'cursive',
      }}
      >
      Infinity Car Bazar brings complete range of cars RECOMENDATION and COMPARISON in India
      </h6>
      <h5
      style={ {
        color: '#022e05',
        }}
      >Our Website is <strong>user friendly</strong >,We have implemented <strong>Machine Learning</strong> technology to give you the best <strong>Recomendation</strong>, thus making the vehical buying experience comfortable and joyful.</h5>
      <div className="mt-3">
      <NavLink className="btn-get-started" to="/Recomendation">Get Recomendation</NavLink>
      <br></br>
      <br></br>
      <NavLink className="btn-get-started" to="/Brands">View Vehicals by Brand</NavLink>
      </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 header-img">
      <br></br><br></br><br></br>
        <img src={dance} className="img-fluid animated" alt="home img"
        style={ {
          width:'100%',
          }}
        />
      </div>
      </div>
      
      </div>
      </div>
      </div>
      </section>
      <br></br><br></br><br></br><br></br>
<Carousel />
<Chatbox />
<div className="container-fluid"
style={ {
backgroundColor: '#a7bfe0',
}}
>
<br></br>
<p>Email:- <a href='siddhantroy225@gmail.com'>siddhantroy225@gmail.com</a></p>
<p>Contact Number:-<a href="siddhantroy225@gmail.com">+ 91 83698 77891</a></p>
<br></br>
</div>
      </>
      );
};

export default Home;
