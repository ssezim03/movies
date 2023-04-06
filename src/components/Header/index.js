import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {API_KEY} from "../../API";
import {getValue} from "@testing-library/user-event/dist/utils";
import {LanguageContext} from "../../context";


const Header = () => {
    const [value, setValue] = useState("")
    const navigate = useNavigate()
    const {setLanguage} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)

    const btnClick = (value) => {
        if (value.trim().length > 0) {
            navigate(`/movie/search/${value}`)
            setValue("")
        }
    }
    return (
        <div id="header" style={{
            background:dark=== true ? "antiquewhite":"midnightblue"
        }}>
            <div className="container">
                <div className="header">
                    <h1 className="header--log" style={{
                        color: dark === true ? " rgb(31, 33, 116)" : "white"
                    }}>RUDI</h1>
                    <div className="header__nav">
                       <NavLink to={"/"} className="header__nav--link" style={{
                            color: dark === true ? " rgb(31, 33, 116)" : "white"
                        }}>Home</NavLink>
                            <NavLink to={"/popular"} className="header__nav--link" style={{
                                color: dark === true ? " rgb(31, 33, 116)" : "white"
                            }}>Popular</NavLink>
                            <NavLink to={"/top"} className="header__nav--link" style={{
                                color: dark === true ? " rgb(31, 33, 116)" : "white"
                            }}>Top Rated</NavLink>


                        <div className="header__nav--dark">
                            <select onChange={(e) => setLanguage(e.target.value)}>
                                <option value="en-US">English</option>
                                <option value="ru-RU">Русский</option>
                                <option value="fr-FR">France</option>
                            </select>
                            <button onClick={() => {
                                setDark(true)
                            }}> &#x2600; </button>
                            <button onClick={() => {
                                setDark(false)
                            }}>&#x263D;</button>
                        </div>
                    </div>
                    <div className="header--search">
                        <input type="text" onChange={(event) => setValue(event.target.value)}

                               onKeyDown={(event) => {
                                   if (event.key === "Enter") {
                                       btnClick(value)

                                   }

                               }}
                               value={value}
                               placeholder={"Найти фильм,сериал, персону ..."} className="header--search__input" style={{
                            color: dark === true ? " rgb(31, 33, 116)" : "white"
                        }}/>

                        <button
                            onClick={() => {
                                btnClick(value)

                            }} className="header--search__btn">Search
                        </button>



                    </div>

                </div>

            </div>

        </div>
    );
};

export default Header;
