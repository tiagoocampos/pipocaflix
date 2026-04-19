// base da url: https://api.themoviedb.org/3/discover/movie

import axios from "axios";

// url da api: /movie/now_playing?api_key=245b86ade96a31ce140e2999f69d0c7f

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api;