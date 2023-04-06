import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../../components/MovieCard";
import {LanguageContext} from "../../context";


const Top = () => {
    const [top, setTop] = useState([])
    const [page, setPage] = useState(1)
    const {dark}=useContext(LanguageContext)
const {language}=useContext(LanguageContext)
    const getTop = (key) => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${page}`)
            .then((res) => {
                setTop(res.data.results)
                console.log(res.data.results)
            })
    }

    useEffect(() => {
        getTop(API_KEY)
        window.scroll(0,0)
    }, [page,language])
    if(page===0){
        setPage(page+1)
    }

    return (
        <div id="top" style={{
            background:dark=== true ? "white":"black"
        }}>
            <div className="container">
                <center>
                    <h1>Top rated:</h1>
                    <div className="top">
                        {
                            top.map((el) => {
                                return <MovieCard el={el}/>
                            })
                        }
                    </div>

                <h3 style={{

                margin:"30px 0 0 0 ",
                color:"white"}}>page:{page}</h3>

                <div className="top--pagination">
                        <button onClick={() =>{setPage(page - 1) }} >prev</button>
                        <button onClick={() => setPage(page + 1)} >next</button>
                    <button onClick={() => setPage(1)} >reset</button>
                </div>
            </center>
            </div>
        </div>
    );
};
//usecontext
export default Top;