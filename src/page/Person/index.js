import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import person from "./index";
import ActorsMovies from "../../components/ActorsMovies";
import {LanguageContext} from "../../context";


const Person = () => {
    const {dark}=useContext(LanguageContext)

    const [person, setPerson] = useState({})
    const [bio, setBio] = useState(300)
    const {id} = useParams()
    const getPerson = (key) => {
        axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`)
            .then((res) => {
                console.log(res.data)
                setPerson(res.data)
            })
    }


    useEffect(() => {
        getPerson(API_KEY)
    }, [])

    const openBio = (text) => {
        if (bio === 300) {
            return setBio(text.length)
        } else {
            return setBio(300)
        }
    }


    const {name, profile_path, biography, birthday, place_of_birth, also_known_as} = person

    return (
        <div id="person" style={{
            background:dark=== true ? "white":"black"
        }}>
            <div className="container">
                <div className="person" style={{
                    color: dark === true ? "black" : "white"
                }}>
                    <div className="person--img">
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                        <div className="person--img__info" style={{

                        }}>
                            <h2 >Персональная информация:</h2>
                            <h3>Дата рождения</h3>
                            <h5>{birthday}</h5>
                            <h3>Место рождения</h3>
                            <h5>{place_of_birth}</h5>
                            <h3>Также известность как</h3>
                            <h5>{also_known_as}</h5>
                        </div>
                    </div>
                    <div className="person--actor">
                        <h1>{name}</h1>
                        <h3>Биография:</h3>
                        <p>{biography?.slice(0, bio)}</p>
                        <span onClick={() => {
                            openBio(biography)
                        }}>{bio === 300 ? "Читать ещё >" : "Закрыть"}</span>

                        <ActorsMovies id={id}/>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Person;