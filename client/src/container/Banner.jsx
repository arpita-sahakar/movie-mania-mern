import React from 'react';
import axios from 'axios';
import requests from '../requests';
import { useEffect, useState } from "react";
import "./Banner.css"

function Banner({ netflixOriginalsUrl }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(netflixOriginalsUrl).then(res => {
            let randomNo = Math.floor(Math.random() * res.data.results.length - 1);
            // console.log("Banner");
            // console.log(res.data.results[randomNo]);
            setMovie(res.data.results[randomNo]);
        })
    }, []);

    // copy-paste from stackoverflow . when too much text on the screen, the three dots which indicates the little elipsis .
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner" style={{ backgroundSize: "cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`, backgroundPosition: "center center" }}>
            <div className="banner__contents">
                <h1 className="banner_title">{movie.title || movie.name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(movie.overview,500)}</h1>

            </div>
            <div className="banner_fadeBottom"></div>
        </header>
    )
}

export default Banner
