import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'https://api.themoviedb.org/3',
        withCredentials: false,
        headers: {
            Authorization: `Bearer ${process.env.VUE_APP_MOVIE_ACCESS_TOKEN}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
