import axios from "axios";




/* BASE DA URL :https://api.themoviedb.org/3/
URL DA API: movie/now_playing?api_key=4a3f4bdf22303a4c9a7f19f6dcca9b73*/


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api