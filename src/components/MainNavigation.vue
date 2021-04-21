<template>
    <nav id="navbar">
        <div class="grid_container">
            <router-link to="/" id="navbar_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="122.039" height="17.531" viewBox="0 0 122.039 17.531">
                    <g id="logo" transform="translate(-385.371 -43.703)">
                        <path id="cinema" d="M57.387-5.684a6.381,6.381,0,0,1-1.641,4.418A5.8,5.8,0,0,1,51.48.234a5.375,5.375,0,0,1-4.436-1.9A8.439,8.439,0,0,1,45.5-7.1V-9.973a8.222,8.222,0,0,1,1.594-5.42,5.462,5.462,0,0,1,4.43-1.9,5.5,5.5,0,0,1,4.236,1.559,7.088,7.088,0,0,1,1.646,4.477H53.953a4.6,4.6,0,0,0-.557-2.49,2.2,2.2,0,0,0-1.869-.686,2.09,2.09,0,0,0-1.957.967,6.761,6.761,0,0,0-.609,3.182v3.223a7.437,7.437,0,0,0,.568,3.492,2.088,2.088,0,0,0,1.951.949,2.256,2.256,0,0,0,1.875-.662,4.361,4.361,0,0,0,.586-2.4ZM63.105,0H59.66V-17.062h3.445ZM77.93,0H74.484L69.445-11.191V0H66V-17.062h3.445L74.5-5.859v-11.2H77.93ZM89.508-7.383H84.141v4.523h6.352V0H80.7V-17.062h9.773v2.871H84.141v4.031h5.367Zm7.465-9.68L100.2-4.723l3.211-12.34h4.5V0h-3.457V-4.617l.316-7.113L101.355,0H99.012L95.6-11.73l.316,7.113V0H92.473V-17.062Zm21.844,13.57h-4.7L113.2,0h-3.645l5.332-17.062h3.152L123.41,0h-3.68Zm-3.949-2.871h3.188l-1.594-6.082Z" transform="translate(384 61)" fill="#fdd732"/>
                        <path id="new" d="M13.3,0H9.855L4.816-11.191V0H1.371V-17.062H4.816l5.051,11.2v-11.2H13.3ZM24.879-7.383H19.512v4.523h6.352V0h-9.8V-17.062H25.84v2.871H19.512v4.031h5.367ZM38.93-6.34l1.617-10.723h3.41L40.922,0H37.465L35.473-10.055,33.5,0H30.035L26.988-17.062h3.434L32.027-6.352l2-10.711h2.895Z" transform="translate(384 61)" fill="#fff"/>
                    </g>
                </svg>
            </router-link>

            <ul class="navbar_menu">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
            </ul>

            <ul class="navbar_account" v-if="!isLoggedIn">
                <li>
                    <span @click="isNavActive = !isNavActive">Sign up</span>
                </li>
            </ul>

            <ul class="navbar_account" v-if="isLoggedIn">
                <li>
                    <router-link to="/account">Account</router-link>
                </li>
                <li>
                    <span @click="Logout">LOGOUT</span>
                </li>
            </ul>
        </div>
    </nav>

    <nav id="mobileNav">
        <ul>
            <li>
                <router-link to="/" class="item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/></svg>
                </router-link>
            </li>
            <li>
                <span class="item" @click="isNavActive = !isNavActive">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                </span>
            </li>
        </ul>
    </nav>

    <transition appear name="sidebarTrans">
        <div id="sidebar" :key="isNavActive" :class="{ active: isNavActive }">
            <span class="close" @click="isNavActive = !isNavActive">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 12 7.7 9.11c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z"/></svg>
            </span>
            <div class="formContainer">
                <div class="welcomeMsg">
                    <h2>Hello and welcome to</h2>
                    <svg id="logoSvg" xmlns="http://www.w3.org/2000/svg" width="122.039" height="17.531" viewBox="0 0 122.039 17.531">
                        <g id="logo" transform="translate(-385.371 -43.703)">
                            <path id="cinema" d="M57.387-5.684a6.381,6.381,0,0,1-1.641,4.418A5.8,5.8,0,0,1,51.48.234a5.375,5.375,0,0,1-4.436-1.9A8.439,8.439,0,0,1,45.5-7.1V-9.973a8.222,8.222,0,0,1,1.594-5.42,5.462,5.462,0,0,1,4.43-1.9,5.5,5.5,0,0,1,4.236,1.559,7.088,7.088,0,0,1,1.646,4.477H53.953a4.6,4.6,0,0,0-.557-2.49,2.2,2.2,0,0,0-1.869-.686,2.09,2.09,0,0,0-1.957.967,6.761,6.761,0,0,0-.609,3.182v3.223a7.437,7.437,0,0,0,.568,3.492,2.088,2.088,0,0,0,1.951.949,2.256,2.256,0,0,0,1.875-.662,4.361,4.361,0,0,0,.586-2.4ZM63.105,0H59.66V-17.062h3.445ZM77.93,0H74.484L69.445-11.191V0H66V-17.062h3.445L74.5-5.859v-11.2H77.93ZM89.508-7.383H84.141v4.523h6.352V0H80.7V-17.062h9.773v2.871H84.141v4.031h5.367Zm7.465-9.68L100.2-4.723l3.211-12.34h4.5V0h-3.457V-4.617l.316-7.113L101.355,0H99.012L95.6-11.73l.316,7.113V0H92.473V-17.062Zm21.844,13.57h-4.7L113.2,0h-3.645l5.332-17.062h3.152L123.41,0h-3.68Zm-3.949-2.871h3.188l-1.594-6.082Z" transform="translate(384 61)" fill="#fdd732"/>
                            <path id="new" d="M13.3,0H9.855L4.816-11.191V0H1.371V-17.062H4.816l5.051,11.2v-11.2H13.3ZM24.879-7.383H19.512v4.523h6.352V0h-9.8V-17.062H25.84v2.871H19.512v4.031h5.367ZM38.93-6.34l1.617-10.723h3.41L40.922,0H37.465L35.473-10.055,33.5,0H30.035L26.988-17.062h3.434L32.027-6.352l2-10.711h2.895Z" transform="translate(384 61)" fill="#fff"/>
                        </g>
                    </svg>
                </div>
                <form @submit.prevent="!isRegisterForm ? Login() : Register()">
                    <div v-if="isRegisterForm" class="fieldGroup">
                        <label for="name">Enter your name</label>
                        <input v-model="name" type="text" name="name" placeholder="Your Name">
                    </div>
                    <div class="fieldGroup">
                        <label for="email">Enter email</label>
                        <input v-model="email" type="email" name="email" placeholder="Your Email">
                    </div>
                    <div class="fieldGroup">
                        <label for="password">Enter password</label>
                        <input v-model="password" type="password" name="password" placeholder="Your password">
                    </div>
                    <button v-if="!isRegisterForm" class="btn btn_primary">Login</button>
                    <button v-if="isRegisterForm" class="btn btn_primary">Register</button>
                </form>

                <div class="secontAction">
                    <p>Nu ai cont?</p>
                    <span class="btn btn_secondary_ghost" @click="isRegisterForm = !isRegisterForm">
                        <span v-if="!isRegisterForm">Create new account</span>
                        <span v-if="isRegisterForm">Login</span>
                    </span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { computed, ref, watch } from 'vue'
import firebase from 'firebase'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    setup () {
        const store = useStore()
        const isNavActive = ref(false)
        const isRegisterForm = ref(false)
        const name = ref('')
        const email = ref('')
        const password = ref('')
        const router = useRouter()

        const user = computed(() => {
            return store.getters.user
        })

        const isLoggedIn = computed(() => {
            return store.getters.user !== null && store.getters.user !== undefined
        })

        watch(user, () => {
            if (user.value !== null && user.value !== undefined) {
                isNavActive.value = false
                // router.replace('/account')
            } else {
                console.log('Watch user faild')
            }
        })

        const Login = () => {
            store.dispatch('loginUser', {
                email: email.value,
                password: password.value
            })
        }

        const Register = () => {
            store.dispatch('registerUser', {
                email: email.value,
                password: password.value,
                name: name.value
            })
        }

        const Logout = () => {
            firebase.auth().signOut().then(() => {
                console.log('Sign Out')
                store.dispatch('clearUser')
                router.replace('/')
            }).catch(err => {
                console.log('EROARE', err)
            })
        }

        return {
            isNavActive, Login, Register, email, password, name, isRegisterForm, Logout, isLoggedIn
        }
    }
}
</script>
