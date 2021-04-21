import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

import './assets/scss/main.scss'

const firebaseConfig = {
    apiKey: 'AIzaSyCgWEk7GrLLkk0Aj0GQ33CAhDFNjPLfQ90',
    authDomain: 'cinema-project-e44f6.firebaseapp.com',
    databaseURL: 'https://cinema-project-e44f6.firebaseio.com',
    projectId: 'cinema-project-e44f6',
    storageBucket: 'cinema-project-e44f6.appspot.com',
    messagingSenderId: 'SENDER_ID',
    appId: 'APP_ID',
    measurementId: 'G-MEASUREMENT_ID'
}

firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch('autoSignIn', user)
    }
})

createApp(App).use(store).use(router).mount('#app')
