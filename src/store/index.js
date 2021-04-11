import { createStore } from 'vuex'
import MovieApiService from '@/services/movieApi'

export default createStore({
    state: {
        moviesPopular: [],
        moviesNowPlaying: [],
        movieDetails: [],
        movieCredits: [],
        movieRecomandations: []
    },
    mutations: {
        SET_POPULAR_MOVIES (state, moviesPopular) {
            state.moviesPopular = moviesPopular
        },

        SET_MOVIES (state, moviesNowPlaying) {
            state.moviesNowPlaying = moviesNowPlaying
        },

        SET_MOVIE (state, movieDetails) {
            state.movieDetails = movieDetails
        },

        SET_MOVIE_CREDITS (state, movieCredits) {
            state.movieCredits = movieCredits
        },

        SET_MOVIE_RECOMANDATIONS (state, movieRecomandations) {
            state.movieRecomandations = movieRecomandations
        }
    },
    actions: {
        async loadPopularMovies ({ commit }) {
            const response = await MovieApiService().get('/movie/popular')
            commit('SET_POPULAR_MOVIES', response.data.results)
        },

        async loadNowPlayingMovies ({ commit }) {
            const response = await MovieApiService().get('/movie/now_playing')
            commit('SET_MOVIES', response.data.results)
        },

        async loadMovie ({ commit }, id) {
            const response = await MovieApiService().get(`/movie/${id}`)
            commit('SET_MOVIE', response.data)
        },

        async loadMovieCredits ({ commit }, id) {
            const response = await MovieApiService().get(`/movie/${id}/credits`)
            commit('SET_MOVIE_CREDITS', response.data)
        },

        async loadMovieRecomandations ({ commit }, id) {
            const response = await MovieApiService().get(`/movie/${id}/recommendations`)
            commit('SET_MOVIE_RECOMANDATIONS', response.data)
        }
    },
    modules: {
    }
})
