import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import Actors from "../Actors";
import Trailer from "../Trailer";
import {LanguageContext} from "../../context";

const Details = () => {
    const {language}=useContext(LanguageContext)
    const [details, setDetails] = useState({})
    const {id} = useParams()
    const {dark}=useContext(LanguageContext)
    const getDetails = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${language}`)
            .then((res) => {
                console.log(res.data)
                setDetails(res.data)
            })
    }


    useEffect(() => {
        getDetails(API_KEY)
    }, [language])

    const {title, overview, genres, runtime, backdrop_path, vote_average} = details


    return (
        <>
            <div id="details" style={{
                background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}") no-repeat center/cover`,
                boxShadow: "inset 900px 0 0 900px rgba(0,0,0,0.6)",
                color: dark === true ? " rgb(31, 33, 116)" : "white"
            }}>
                <div className="container">
                    <div  className="details" >
                        <div className="details__images">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`}
                                 alt=""/>

                        </div>
                        <div className="details--info" >
                            <h1>{title}</h1>
                            <div className="details--info__genres">
                                <p>Жанр:</p>
                                {
                                    genres?.map((el) => {
                                        return (
                                            <p>{el.name}</p>

                                        )
                                    })
                                }
                            </div>
                            <h2>Обзор:</h2>
                            <p>{overview}</p>
                            <div className="details--info__card">
                                <div className="details--info__card--vote">
                                    {Math.round(vote_average * 10)}%
                                </div>
                                <h2>{Math.floor(runtime / 60)} <small>ч</small>{runtime % 60}<small>мин</small></h2>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Actors id={id}/>
            <Trailer id={id}/>

        </>

    );
};

export default Details;

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US