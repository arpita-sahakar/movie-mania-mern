const API_KEY = "c933106e9b3cd06ce9cea85a85b541d5";

const requests = {
    trending: `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`,

    netflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,

    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&langauge=en-US`,

    action: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,

    comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,

    horror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,

    romantic: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,

    documentries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;