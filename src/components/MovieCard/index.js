import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import post from "../../img/images (2).png"
import logo from "../../img/images (1).png";
import {LanguageContext} from "../../context";

const MovieCard = ({el, key}) => {
    const {dark}=useContext(LanguageContext)
    return (
        <div key={el.id} className="popular--card">
            <Link to={`/movie/details/${el.id}`}>
                { el.poster_path ? <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                : <img src={post} alt="" style={{
                    width:"240px"
                    }}/>}

            </Link>

            <h2 style={{
                color: dark === true ? " rgb(31, 33, 116)" : "white"
            }}>{el.title}</h2>
        </div>
    );
};

export default MovieCard;