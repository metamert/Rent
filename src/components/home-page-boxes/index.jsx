import React from 'react'
import "./css.css"
import Asistan from "../../assets/svg/asistan.svg"
import Car from "../../assets/svg/home-box-car.svg"
export default function index() {
    return (
        <div className="center-xs margin-top-6 w-100 " >
        <div className="row    center-xs container ">
            <div className=" col-lg-55 boxes-left center-xs col-xs-10 ">
                <div className="col-xs-6 boxes start-xs ">
                    <h2 className="font-4 font-500 blue">Telefonla</h2>
                    <h3 className="font-1-half font-normal blue">Rezarvasyon Yapmak</h3>
                    <h3 className="font-1-half font-bold margin-bottom-1 blue">İstermisiniz ?</h3>

                    <p>Daha fazla bilgi al </p>
                </div>
                <img className="col-xs-6" src={Asistan}></img>
            </div>
            <div className="col-lg-55 boxes-right center-xs col-xs-10 ">
                <div className="col-xs-6 boxes start-xs ">
                    <h2 className="font-4 font-500 font-white">Lefkoşa'da</h2>
                    <h3 className="font-1-half font-normal font-white">En Çok Kiralanan</h3>
                    <h3 className="font-1-half font-bold margin-bottom-1 font-white">Popüler Araçlar</h3>

                    <p>Daha fazla bilgi al </p>
                </div>
                <div className="col-xs-6 boxes start-xs ">
                <img className="rent-box-car" src={Car}></img>
                </div>
            </div>
        </div>
        </div>
    )
}
