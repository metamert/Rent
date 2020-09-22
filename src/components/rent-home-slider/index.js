import React, { Component } from "react";
import Slider from "react-slick";
import Item from "./sliderItems"

import "./.css"
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    navigator:true,
    
  arrows:true
    };
    return (
      <div className=" center-xs w-100">
        <h2> Multiple items </h2>
        <div className="container">
        <Slider centerMode={true}  arrows={true} {...settings}>
         
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}