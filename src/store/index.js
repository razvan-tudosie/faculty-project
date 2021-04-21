import { createStore } from 'vuex'
import MovieApiService from '@/services/movieApi'
import firebase from 'firebase'

export default createStore({
    state: {
        moviesPopular: [],
        moviesNowPlaying: [],
        movieDetails: [],
        movieCredits: [],
        movieVideos: [],
        movieRecomandations: [],
        user: null,
        error: null,
        tickets: []
    },
    // chage state
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

        SET_MOVIE_VIDEOS (state, movieVideos) {
            state.movieVideos = movieVideos
        },

        SET_MOVIE_CREDITS (state, movieCredits) {
            state.movieCredits = movieCredits
        },

        SET_MOVIE_RECOMANDATIONS (state, movieRecomandations) {
            state.movieRecomandations = movieRecomandations
        },

        setTicket (state, payload) {
            // state.tickets = payload
            state.tickets.push(payload)
        },

        setUser (state, payload) {
            state.user = payload
        },

        setError (state, payload) {
            state.error = payload
        },

        clearError (state) {
            state.error = null
        }
    },
    // dsiaptch mutations
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
        },

        async loadMovieVideo ({ commit }, id) {
            const response = await MovieApiService().get(`/movie/${id}/videos`)
            commit('SET_MOVIE_VIDEOS', response.data)
        },

        registerUser ({ commit }, payload) {
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    firebase.auth().currentUser.updateProfile({
                        displayName: payload.name
                    }).then((res) => {
                        const newUser = {
                            id: user.user.uid,
                            email: user.user.email,
                            name: payload.name
                        }
                        commit('setUser', newUser)
                    }).catch((error) => {
                        console.log('curentUser: ', error)
                    })
                }).catch(err => {
                    commit('setError', err)
                })
        },

        loginUser ({ commit }, payload) {
            commit('clearError')

            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(data => {
                    const user = {
                        id: data.user.uid,
                        email: data.user.email,
                        name: data.user.displayName
                    }
                    commit('setUser', user)
                }).catch(err => {
                    commit('setError', err)
                })
        },

        autoSignIn ({ commit }, payload) {
            commit('setUser', {
                id: payload.uid,
                email: payload.email,
                name: payload.displayName
            })

            firebase.firestore().collection('tickets').where('user', '==', payload.uid)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        // console.log(doc.id, ' => ', doc.data())
                        commit('setTicket', doc.data())
                    })
                })
                .catch((error) => {
                    console.log('Error getting documents: ', error)
                })
        },

        clearUser ({ commit }) {
            commit('setUser', null)
        },

        createUserColection ({ commit }, payload) {
            console.log('createUserColection', payload)

            firebase.firestore().collection('tickets').add(payload)
                .then((docRef) => {
                    console.log('Document written with ID: ', docRef.id)
                    const newTicket = {
                        user: payload.user,
                        movie: payload.movie,
                        seat: payload.seat,
                        datetime: payload.datetime
                    }
                    commit('setTicket', newTicket)
                })
                .catch((error) => {
                    console.error('Error adding document: ', error)
                    commit('setError', error)
                })
        }
    },

    getters: {
        user (state) {
            return state.user
        },

        tickets (state) {
            return state.tickets
        }
    }
})
