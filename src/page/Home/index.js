import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [value,setValue]=useState("")
    const navigate = useNavigate()
    return (
        <div id="home" style={{
            background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg") no-repeat center/cover`,
           // background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bNYDRRgmKogbPjhsR0PTPkqITnh.jpg") no-repeat center/cover`,
            boxShadow: "inset 900px 0 0 900px rgba(0,0,0,0.3)",
            width:"100%",
            height:"100vh"
        }}>
            <div className="container">
                <center>
                    <div className="home--logo">
                        <h1>Добро пожаловать.</h1>
                        <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
                    </div>
                <div className="home">
                    <input type="text" onChange={(event)=>setValue(event.target.value)}
                           onKeyDown={(event)=>{
                               if (event.key==="Enter"){
                                   navigate(`/movie/search/${value}`)
                               }
                           }}
                           placeholder={"Найти фильм,сериал, персону ..."} className="home--input"/>
                    <button
                        onClick={()=>navigate(`/movie/search/${value}`)} className="home--btn">Search</button>
                </div>
            </center>
            </div>
        </div>
    );
};

export default Home;

//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
//https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/