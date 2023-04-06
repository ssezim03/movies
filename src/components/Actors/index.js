import React, {useState, useEffect, useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import Slider from "react-slick"
import logo from "../../img/images (1).png"
import {LanguageContext} from "../../context";

const Actors = ({id}) => {
    const [actors, setActors] = useState([])
    const {dark}=useContext(LanguageContext)
    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
            .then((res) => {
                setActors(res.data.cast)

            })
    }
    useEffect(() => {
        getActors(API_KEY)
    }, [])
    console.log(actors)

    return (
        <div id="actors"  style={{
            background:dark=== true ? "white":"black"
        }} >
            <div className="container">
                <div className="actors" >

                        {
                            actors.map((el) => (
                                <div  key={el.id} className="actors--card" >

                                   <Link to={`/movie/person/${el.id}`}>
                                       {el.profile_path ? <img
                                               src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${el.profile_path}`}
                                               alt="user-img" width={250}/>
                                           : <img src={logo} width={250} height={320} alt=""/>}
                                   </Link>

                                    <h4 style={{
                                        color: dark === true ? "black" : "white"
                                    }}>{el.name}</h4>
                                    <p style={{
                                        color: dark === true ? "black": "white"
                                    }}>{el.character}</p>
                                </div>
                            ))
                        }


                </div>
            </div>
        </div>
    );
};

export default Actors;
//https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US