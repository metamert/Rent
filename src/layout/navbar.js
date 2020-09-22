import React from 'react'
import NavbarMobile from "../components/navbar/navbarMobilView"
import NavbarTop from "../components/navbar/navbarTop"
import NavbarBottom from "../components/navbar/navbarBottom"
export default function navbar() {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <NavbarMobile></NavbarMobile>
<NavbarBottom></NavbarBottom>
        </div>
    )
}
