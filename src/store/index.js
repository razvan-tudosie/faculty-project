import { createStore } from 'vuex'
import MovieApiService from '@/services/movieApi'

export default createStore({
    state: {
        moviesPopular: [],
        moviesNowPlaying: []
    },
    mutations: {
        SET_POPULAR_MOVIES (state, moviesPopular) {
            state.moviesPopular = moviesPopular
        },

        SET_MOVIES (state, moviesNowPlaying) {
            state.moviesNowPlaying = moviesNowPlaying
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
        }
    },
    modules: {
    }
})
