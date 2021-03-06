import React from 'react'
import Row from "./Row";
import requests from '../requests';
import Banner from "./Banner";
import NavBar from './NavBar';

function Home({ logedInSignUpUser }) {
    return (
        <>
            <NavBar logedInSignUpUser={logedInSignUpUser} />
            <Banner netflixOriginalsUrl={requests.netflixOriginals} />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.netflixOriginals} isLargeRow={true} />

            <Row title="Top Rated" fetchUrl={requests.topRated} />
            <Row title="Action Movies" fetchUrl={requests.action} />
            <Row title="Comedy Movies" fetchUrl={requests.comedy} />
            <Row title="Horror Movies" fetchUrl={requests.horror} />

            <Row title="Documentries" fetchUrl={requests.documentries} />
            {/* <Row title="trending" fetchUrl={requests.trending}/> */}
            {/* <Row title="Romantic Movies" fetchUrl={requests.topRromanticated} /> */}
        </>
    )
}

export default Home
