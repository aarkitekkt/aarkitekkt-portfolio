import React, { useState } from "react";
import "./style.css";
import { Link } from 'react-scroll';

function Navbar(props) {

    const [navState, setNavState] = useState("closed");

    function toggleNav() {

        if (navState === "open") { setNavState("closed"); }
        else if (navState === "closed") { setNavState("open"); }
    }

    function closeNav() {
        if (navState === "open") { setNavState("closed"); }
    }

    return (
        <nav className="navbar">
            <div className={navState} id="aarkitekktButton">
                <Link to={props.homeAnchor} smooth={true} duration={500} onClick={() => closeNav()}>logo</Link>
            </div>
            <div className={navState} id="hamburger" onClick={() => toggleNav()}>
                <div className={navState} id="line1"></div>
                <div className={navState} id="line2"></div>
                <div className={navState} id="line3"></div>
            </div>
            <ul className={navState} id="nav-links">
                <li className="nav-link">
                    <Link to={props.devAnchor} smooth={true} duration={500} onClick={() => closeNav()}>dev</Link>
                </li>
                <li className="nav-link">
                    <Link to={props.threeDAnchor} smooth={true} duration={500} onClick={() => closeNav()}>3d</Link>
                </li>
                <li className="nav-link">
                    <Link to={props.builtAnchor} smooth={true} duration={500} onClick={() => closeNav()}>built</Link>
                </li>
                <li className="nav-link">
                    <Link to={props.aboutAnchor} smooth={true} duration={500} onClick={() => closeNav()}>about</Link>
                </li>

            </ul>


        </nav>

    )
}

export default Navbar;