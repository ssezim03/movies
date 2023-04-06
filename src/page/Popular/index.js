import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../../components/MovieCard";
import {LanguageContext} from "../../context";

const Popular = () => {
    const [popular, setPopular] = useState([])
    const [page, setPage] = useState(1)
    const pages = [1,2,3,4,5,6,7,8,9,10]
    const {language}=useContext(LanguageContext)
    const {dark}=useContext(LanguageContext)


    const getPopular = (key) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`)
            .then((res) => {
                setPopular(res.data.results)
                console.log(res.data.results)
            })
    }

    useEffect(() => {
        getPopular(API_KEY)
        window.scroll(0,0)
    }, [page,language])


    return (
        <div id="popular" style={{
            background:dark=== true ? "white":"black"
        }}>
            <div className="container">
                <center>
                    <h1 style={{
                        color: dark === true ? " rgb(31, 33, 116)" : "white"
                    }}>Popular movies:</h1>
                    <div className="popular">


                        {
                            popular.map((el) => {
                                return (
                                <MovieCard el={el} key={el.id}/>
                                )
                            })
                        }

                    </div>

                <div className="popular--pages" style={{
                    margin:"100px 0 0 0"
                }}>
                    {
                        pages.map(btn=>(
                            <button style={{
                                margin:"0 0 0 20px",
                                borderRadius:"50%",
                                height:"30px",
                                textAlign:"center",
                               width:"30px",

                                background: "#40AB7E"
                            }} onClick={()=> {
                                setPage(btn)

                            }}>{btn}</button>
                        ))
                    }
                </div>
            </center>
            </div>

        </div>
    );
};

export default Popular;
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1