import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {LanguageContext} from "../../context";


const Trailer = ({id}) => {
    const {dark}=useContext(LanguageContext)

    const [video, setVideo]=useState([])
    const getVideo= (key)=>{
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then((res)=>{
                setVideo(res.data.results)
            })
    }

    useEffect(()=> {
        getVideo(API_KEY)
    },[])
    console.log(video)





    return (
        <div id="video"  style={{
            background:dark=== true ? "white":"black"
        }}>
            <div className="container">
                <div className="video">
                    {
                        // video.map((el)=>(
                        //     <div  key={el.id} className="video--card">
                        //         <iframe width="300" height="200" src={`https://www.youtube.com/embed/${el.key}`}
                        //                 title="Baby Calm Down FULL HD | Selena Gomez &amp; Rema Official Music Video 2023"
                        //                 frameBorder="0"
                        //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        //                 allowFullScreen></iframe>
                        //     </div>
                        //
                        // ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Trailer;
//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US