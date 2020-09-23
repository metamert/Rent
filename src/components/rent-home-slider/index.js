import React, { Component } from "react";
import Slider from "react-slick";
import Item from "./sliderItems"
import Back from "../Arrows/back"
import Next from "../Arrows/next"
import toyota from "../../assets/svg/toyota.svg"
import bmw from "../../assets/svg/bmw.svg"
import audi from "../../assets/svg/auid.svg"
import wolk from "../../assets/svg/wolk.svg"
import "./.css"
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
     
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      rows:1,
      vertical: false,
      verticalSwiping: false,
    nextArrow: <Next />,
    variableWidth: true,
    prevArrow: <Back/>,
    responsive: [ {
      breakpoint: 1024,
      settings: {
        rows:1,
        className: "slider variable-width",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        vertical: false,
        verticalSwiping: false,
      
      }}
    ]
  
    };
    return (
      <div className=" center-xs w-100 margin-bottom-3">
      
        <div className="container-50">
        <Slider  {...settings} >
        <Item logo={toyota} selected={true} brand={"Toyota"}></Item>
      
      <Item logo={bmw} selected={false} brand={"Bmw"}></Item>
     
    
        <Item logo={audi} selected={false} brand={"Audi"}></Item>
      
        <Item logo={wolk} selected={false} brand={"Wolkswagen"}></Item>
        <Item logo={bmw} selected={false} brand={"Bmw"}></Item>
    
       
        </Slider>
        </div>
      </div>
    );
  }
}