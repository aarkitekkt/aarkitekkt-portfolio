import React, { useState } from "react";
import "./style.css";
import { Link } from 'react-scroll';

function Navbar(props) {

    const [navState, setNavState] = useState("closed");

    function toggleNav() {

        if (navState === "open") { setNavState("closed"); }
        else if (navState === "closed") { setNavState("open"); }
    }

    return (
        <nav className="navbar">
            <div className={navState} id="aarkitekktButton">aark</div>
            <div className={navState} id="hamburger" onClick={() => toggleNav()}>
                <div className={navState} id="line1"></div>
                <div className={navState} id="line2"></div>
                <div className={navState} id="line3"></div>
            </div>
            <ul className={navState} id="nav-links">
                <li className="nav-link">
                    <Link to={props.devAnchor} smooth={true} duration={750} onClick={() => toggleNav()}>dev</Link>
                </li>
                <li className="nav-link">
                    <Link to={props.threeDAnchor} smooth={true} duration={750} onClick={() => toggleNav()}>3d</Link>
                </li>
                <li className="nav-link">
                    <Link to={props.builtAnchor} smooth={true} duration={750} onClick={() => toggleNav()}>built</Link>
                </li>
                <li className="nav-link">
                    <Link to={props.aboutAnchor} smooth={true} duration={750} onClick={() => toggleNav()}>about</Link>
                </li>

            </ul>


        </nav>

    )
}

export default Navbar;