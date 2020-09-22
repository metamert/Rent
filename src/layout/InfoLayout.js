import InfoCard from "../components/Info/InfoCard";
import React from "react"

import search from "../assets/svg/search.svg";

import photoIcon from "../assets/svg/imageplacer.svg";
import carIcon from "../assets/svg/car.svg";
import paymentIcon from "../assets/svg/card.svg";
import keywordIcon from "../assets/svg/key.svg";
import "../components/Info/InfoCard.style.css";
import Title from "../components/titleComponent"
import Wave from "../components/Info/wave"
function Info() {
  return (
    <div className="containerCenter  margin-top-4 ">

        <Title title="4 Aşamada Araba Kirala" p="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua"></Title>
        
    <div className="container row around-xs continer-60 margin-top-4">

    <InfoCard title="Arama Yap" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
    svg={search} color={true}
    />
    <Wave color={true}></Wave>

    <InfoCard title="En uygununu Bul" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
    svg={photoIcon} color={false}
    />
    <Wave></Wave>
    
    <InfoCard title="Arabanı Seç" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
    svg={carIcon} color={false}
    />
    <Wave></Wave>
 
    <InfoCard title="Ödemeni Yap" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
    svg={paymentIcon} color={false}
    />
 <Wave></Wave>
 
 <InfoCard title="Araban Sende !" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
 svg={keywordIcon} color={false}
 />
    </div>
 
    </div>
  );
}

export default Info;