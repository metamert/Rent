import React from 'react'
import "./homepage-select.css"
import Stars from "../star-svg/star"
import avıs from "../../assets/svg/avıs.svg"
import budget from "../../assets/svg/budget.svg"
import hertz from "../../assets/svg/hertz.svg"
import SelectTable from "./select-form"
export default function Container() {
    return (
        <div className="homepage-banner center-xs">
            <div className="container row center-xs">
<div className="col-lg-6 padding-right-2 ">
<h1 className="font-4 font-white font-500 start-xs margin-bottom-1">Araç kiralamak ne kolaymış!</h1>
<p className="font-1 font-white font-normal start-xs margin-bottom-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
<div className="row margin-bottom-1">
<h3 className="font-3 font-white font-normal margin-right-1">4.5/5</h3>
<Stars count={3}></Stars>
<h3 className="font-3 font-white font-normal ">12.065 Kişi Oyladı.</h3>
</div>

<div className=" padding-right-3">
<div className="margin-bottom-1 row center-xs between-xs">

<img className="col-xs-2 " src={hertz}></img>
<img className="col-xs-6 start-xs" src={avıs}></img>
<img className="col-xs-3 padding-top-1 " src={budget}></img>

</div>
<div className="margin-bottom-1 row center-xs between-xs">

<img className="col-xs-2 " src={hertz}></img>
<img className="col-xs-6 start-xs" src={avıs}></img>
<img className="col-xs-3 padding-top-1 " src={budget}></img>

</div>
<div className="margin-bottom-1 row center-xs between-xs">

<img className="col-xs-2 " src={hertz}></img>
<img className="col-xs-6 start-xs" src={avıs}></img>
<img className="col-xs-3 padding-top-1 " src={budget}></img>

</div>


</div>


</div>



<div className="col-lg-6 col-xs-12 col-md-12 select-table margin-top-2">

<SelectTable></SelectTable>
</div>

            </div>
        </div>
    )
}
