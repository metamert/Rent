import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./layout/navbar"
import Info from "./layout/InfoLayout"
import HomepageSelect from "./components/homepage-select/container"
import Boxes from "./components/home-page-boxes/index"
import Slider from "./components/rent-home-slider/index"



function App() {
  return (
    <div className="App">

       <Navbar></Navbar>
       <HomepageSelect></HomepageSelect>
       <Info></Info>
       <Boxes></Boxes>
       <Slider></Slider>
   
       
    
    </div>
  );
}

export default App;
