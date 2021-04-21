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
        tickets: [],
        seats: {
            seatRowOne: [
                { seatNumber: 'A1', seatFull: false },
                { seatNumber: 'A2', seatFull: false },
                { seatNumber: 'A3', seatFull: true },
                { seatNumber: 'A4', seatFull: false },
                { seatNumber: 'A5', seatFull: true },
                { seatNumber: 'A6', seatFull: false },
                { seatNumber: 'A7', seatFull: false },
                { seatNumber: 'A8', seatFull: false },
                { seatNumber: 'A9', seatFull: false },
                { seatNumber: 'A10', seatFull: true },
                { seatNumber: 'A11', seatFull: false },
                { seatNumber: 'A12', seatFull: false },
                { seatNumber: 'A13', seatFull: false },
                { seatNumber: 'A14', seatFull: true },
                { seatNumber: 'A15', seatFull: true },
                { seatNumber: 'A16', seatFull: false },
                { seatNumber: 'A17', seatFull: false },
                { seatNumber: 'A18', seatFull: false }
            ],
            seatRowTwo: {
                groupLeft: [
                    { seatNumber: 'BA1', seatFull: true },
                    { seatNumber: 'BA2', seatFull: false },
                    { seatNumber: 'BA3', seatFull: false },
                    { seatNumber: 'BA4', seatFull: true },
                    { seatNumber: 'BA5', seatFull: false },
                    { seatNumber: 'BA6', seatFull: true },
                    { seatNumber: 'BA7', seatFull: false },
                    { seatNumber: 'BA8', seatFull: true },
                    { seatNumber: 'BA9', seatFull: true },
                    { seatNumber: 'BA10', seatFull: true },
                    { seatNumber: 'BA11', seatFull: true }
                ],
                groupMiddle: [
                    { seatNumber: 'BB1', seatFull: false },
                    { seatNumber: 'BB2', seatFull: false },
                    { seatNumber: 'BB3', seatFull: false },
                    { seatNumber: 'BB4', seatFull: false },
                    { seatNumber: 'BB5', seatFull: false },
                    { seatNumber: 'BB6', seatFull: false },
                    { seatNumber: 'BB7', seatFull: false },
                    { seatNumber: 'BB8', seatFull: true },
                    { seatNumber: 'BB9', seatFull: true },
                    { seatNumber: 'BB10', seatFull: true },
                    { seatNumber: 'BB11', seatFull: false },
                    { seatNumber: 'BB12', seatFull: false },
                    { seatNumber: 'BB13', seatFull: false },
                    { seatNumber: 'BB14', seatFull: false },
                    { seatNumber: 'BB15', seatFull: false },
                    { seatNumber: 'BB16', seatFull: false },
                    { seatNumber: 'BB17', seatFull: false },
                    { seatNumber: 'BB18', seatFull: true },
                    { seatNumber: 'BB19', seatFull: true },
                    { seatNumber: 'BB20', seatFull: true },
                    { seatNumber: 'BB21', seatFull: false },
                    { seatNumber: 'BB22', seatFull: false },
                    { seatNumber: 'BB23', seatFull: false },
                    { seatNumber: 'BB24', seatFull: false },
                    { seatNumber: 'BB25', seatFull: false },
                    { seatNumber: 'BB26', seatFull: true },
                    { seatNumber: 'BB27', seatFull: true }
                ],
                groupRight: [
                    { seatNumber: 'BC1', seatFull: false },
                    { seatNumber: 'BC2', seatFull: true },
                    { seatNumber: 'BC3', seatFull: false },
                    { seatNumber: 'BC4', seatFull: true },
                    { seatNumber: 'BC5', seatFull: true },
                    { seatNumber: 'BC6', seatFull: true },
                    { seatNumber: 'BC7', seatFull: false },
                    { seatNumber: 'BC8', seatFull: false },
                    { seatNumber: 'BC9', seatFull: true },
                    { seatNumber: 'BC10', seatFull: false },
                    { seatNumber: 'BC11', seatFull: false }
                ]
            },
            seatRowThree: [
                { seatNumber: 'C1', seatFull: false },
                { seatNumber: 'C2', seatFull: false },
                { seatNumber: 'C3', seatFull: false },
                { seatNumber: 'C4', seatFull: true },
                { seatNumber: 'C5', seatFull: true },
                { seatNumber: 'C6', seatFull: true },
                { seatNumber: 'C7', seatFull: false },
                { seatNumber: 'C8', seatFull: false },
                { seatNumber: 'C9', seatFull: false },
                { seatNumber: 'C10', seatFull: false },
                { seatNumber: 'C11', seatFull: false },
                { seatNumber: 'C12', seatFull: true },
                { seatNumber: 'C13', seatFull: true },
                { seatNumber: 'C14', seatFull: true },
                { seatNumber: 'C15', seatFull: false },
                { seatNumber: 'C16', seatFull: false },
                { seatNumber: 'C17', seatFull: false },
                { seatNumber: 'C18', seatFull: false }
            ]
        }
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
        },

        seats (state) {
            return state.seats
        }
    }
})
