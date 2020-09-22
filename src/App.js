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
      <div class="row">
        <div class="
        col-xs-12
        col-sm-4
        
        
        ">
           This content will take up 3/12 (or 1/4) of the container 
        </div>
        <div class="col-xs-12
        col-sm-4
      ">
         This content will take up 3/12 (or 1/4) of the container 
        </div>
        <div class="col-xs-12
        col-sm-4
        ">
          This content will take up 6/12 (or 1/2) of the container 
        </div>
      </div>
    
    </div>
  );
}

export default App;
