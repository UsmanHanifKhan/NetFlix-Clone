const API_KEY = '5eae00d436dcadbfea72517ca09fe60a';

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
    requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
    requestHorror: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
}

export default requests;
