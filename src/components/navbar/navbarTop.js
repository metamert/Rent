import React from 'react'
import "./navbarTop.css"
import DropDownArrow from "../../assets/svg/drop-down-arrow.svg"
import CallIcon from "../../assets/svg/navbar-call.svg"
import RedIcon from "../../assets/svg/navbar-red.svg"
import SocialMedia from "../../assets/svg/social-media.svg"
import ProfileImage from "../../assets/svg/profile-image.svg"
export default function navbarTop() {
    return (
        <div className="navbarTopContainer  containerCenter visibleAfterMd">
            <div className="container alignSelf container-60 containerCenter between-xs row h-100">
<div className="row h-100 center">
<ul className="row h-100 center">
    <img src={RedIcon}></img>
<li className="box top-list ">İlan</li>
<li className="box top-list ">Otel</li>
<li className="box top-list ">Firma</li>
<li className="box top-list ">Haber</li>
<li className="box top-list ">Sipariş</li>
<li className="box top-list ">Tatil</li>
<li className="box top-list ">Fatura</li>


</ul>
<div  className="left-border center box padding-2-1 padding-top-1"><img src={SocialMedia}></img></div>
<div  className="left-border center box padding-2-1 padding-top-1"><img src={CallIcon}></img></div>

</div>
<div className="row h-100">

<div class="dropdown col-xs ">
  <div class="dropbtn center drop-btn-1 row  font-normal">TL <img className="padding-left-1" src={DropDownArrow}/></div>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
<div class="dropdown col-xs">
  <div class="dropbtn center drop-btn-1 row  font-normal">TR <img className="padding-left-1" src={DropDownArrow}/></div>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
<div class="dropdown col-xs">
  <div class="dropbtn center drop-btn-2 row  font-normal">John doe <img className="padding-left-1"  src={ProfileImage}></img> <img className="padding-left-1"  src={DropDownArrow}></img></div>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>




</div>


            </div>
        </div>
    )
}
