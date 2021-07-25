import React from 'react'
import Row from "./Row";
import requests from '../requests';
import Banner from "./Banner";
import NavBar from './NavBar';

function Home() {
    return (
        <>
            <NavBar />
            <Banner netflixOriginalsUrl={requests.netflixOriginals} />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.netflixOriginals} isLargeRow={true} />
            {/* <Row title="trending" fetchUrl={requests.trending}/> */}
            <Row title="Top Rated" fetchUrl={requests.topRated} />
            <Row title="Action Movies" fetchUrl={requests.action} />
            <Row title="Comedy Movies" fetchUrl={requests.comedy} />
            <Row title="Horror Movies" fetchUrl={requests.horror} />
            {/* <Row title="Romantic Movies" fetchUrl={requests.topRromanticated} /> */}
            <Row title="Documentries" fetchUrl={requests.documentries} />
        </>
    )
}

export default Home
