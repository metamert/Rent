import React from 'react'
import "./navbarMobileView.css"
import logo from "../../assets/svg/navbarLogo.svg"
export default function navbarTop() {
    return (
        <div className="navbarMobileView">
            <div class="header">



            </div>
  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" style={{visibility:"hidden"}}/>
  <label for="openSidebarMenu" className="sidebarIconToggle ">
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>

  <img src={logo}  className="navbarLogo"></img>
  <div id="sidebarMenu">
    <ul className="sidebarMenuInner margin-top-1">
      
      <li><a href="https://vanila.io" target="_blank">Company</a></li>
      <li><a href="https://instagram.com/plavookac" target="_blank">Instagram</a></li>
      <li><a href="https://twitter.com/plavookac" target="_blank">Twitter</a></li>
      <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank">YouTube</a></li>
      <li><a href="https://www.linkedin.com/in/plavookac/" target="_blank">Linkedin</a></li>
    </ul>
  </div>
  
        </div>
    )
}
