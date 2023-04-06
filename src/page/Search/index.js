import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {API_KEY} from "../../API";
import MovieCard from "../../components/MovieCard";
import {logDOM} from "@testing-library/react";
import {LanguageContext} from "../../context";

const Search = () => {
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const {language}=useContext(LanguageContext)
    const {dark}=useContext(LanguageContext)
    const {movieName} = useParams()
    const [results, setResults] = useState([])
    const getResults = (key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}&page=${page}&language=${language}`)
            .then((res) => {
                setResults(res.data.results)

            })
            .then((res)=>{
                setTotalPage(res.data.total_page)
            })
    }




    useEffect(() => {
        getResults(API_KEY)
window.scroll(0,0)
    }, [movieName,page,language])

    console.log(results)
console.log(totalPage)
    return (
        <div id="popular" style={{
            background:dark=== true ? "white":"black"
        }}>
            <div className="container">
                <center>
                    <div className="popular">

                        {
                            results.map(el => <MovieCard el={el}/>)
                        }

                    </div>
                </center>

                <div className="popular--pagination">
                    <button onClick={() => setPage(page- 1)} >prev</button>
                    <button onClick={() => setPage(page + 1)} >next</button>
                </div>
            </div>
        </div>
    );
};

export default Search;