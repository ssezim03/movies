import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import poster from "../../img/images (2).png"
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context";

const ActorsMovies = ({id}) => {
    const {dark}=useContext(LanguageContext)

    const [actorsMovies, setActorsMovies] = useState([])
    const getActorsMovies = (key) => {
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
            .then((res) => {
                setActorsMovies(res.data.cast)
            })
    }
    useEffect(() => {
        getActorsMovies(API_KEY)
    }, [])

    console.log(actorsMovies)
    return (
        <div id="actorsMovies" >
            <div className="actorsMovies">
                {
                    actorsMovies.map((el) => (
                        <div  key={el.id} className="actorsMovies--card" >
                            <Link to={`/movie/details/${el.id}`}>
                                {el.poster_path ?
                                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`}
                                         alt="" style={{
                                        width: "175px"
                                    }}/>
                                    : <img src={poster} alt=""/>}
                            </Link>


                            <h4>{el.title}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ActorsMovies;
