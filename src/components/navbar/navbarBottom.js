import React from 'react'
import "./navbarBottom.css"
import Logo from "../../assets/svg/navbarLogo.svg"
import Ring from "../../assets/svg/ring.svg"
import Gift from "../../assets/svg/gift.svg"
export default function navbarBottom() {
    return (
        <div>
            <div className="navbarBottomContainer  center-xs visibleAfterMd">
            <div className="container container-60 center-xs between-xs row h-100">
<ul className="col-md-10 col-lg-10 row">
    <img src={Logo} className="logo-position"></img>
<li className="center-xs box-large">Kiralama Kampanyaları</li>
<li className="center-xs box-large font-bold">Araçlarımız</li>
<li className="center-xs box-large">Filo</li>
<li className="center-xs box-large">İletişim</li>
<li className="center-xs box-large">Ofisler</li>

</ul>
<div className=" center-xs">
<img src={Gift} className="logo-position"></img>
<img src={Ring} ></img>

</div>
            </div>
            </div>
        </div>
    )
}
