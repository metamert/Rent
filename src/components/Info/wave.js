import React from 'react'
import wave from "../../assets/svg/wave.svg"
import wave2 from "../../assets/svg/wave2.svg"
export default function Wavecomponent({color}) {
    return (
        <div className="waveContainer containerCenter">
            <img src={color?wave:wave2} className="wave box w-100 margin-wave" ></img>
        </div>
    )
}
