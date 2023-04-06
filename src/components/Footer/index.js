import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {LanguageContext} from "../../context";

const Footer = () => {
    const {dark}=useContext(LanguageContext)

    return (
        <div id="footer" style={{
            background:dark=== true ? "antiquewhite":"midnightblue"
        }}>
            <div className="container">
                <div className="footer">
                    <h1 className="footer--log"  style={{
                        color: dark === true ? " rgb(31, 33, 116)" : "white"
                    }}>RUDI</h1>

                </div>
            </div>

        </div>
    );
};

export default Footer;