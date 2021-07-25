import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        axios.get(fetchUrl).then(res => {
            console.log(res.data.results)
            setMovies(res.data.results)
        })
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoPlay: 1,
        }
    };

    const handleClick = (movie) => {
        console.log(movie.name || movie.title);
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie.name || movie.title || "", { id: true }).then(res => {
                if(res!=null){
                    console.log(res);
                    setTrailerUrl(res);

                }


            }).catch(err => {
                console.log(err)
            })

        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img onClick={() => handleClick(movie)} className={`row_poster ${isLargeRow && "row_posterLarge"}`} Key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

        </div>
    )
}

export default Row
