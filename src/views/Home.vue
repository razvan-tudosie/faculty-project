<template>
    <header class="homeHero" v-if="moviesPopular != '' " :style=" 'background-image: url(https://image.tmdb.org/t/p/original/' + moviesPopular[heroSlideNumber].backdrop_path + ')' ">
        <div class="homeHero_slide" >

            <div class="grid_container homeHero_slide_details">
                <div class="">
                    <h1>{{ moviesPopular[heroSlideNumber].title }}</h1>

                    <div class="overview">
                        <p>{{ moviesPopular[heroSlideNumber].overview }}</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="nextSlide" @click="heroSlideNumber++" :disabled="heroSlideNumber >= moviesPopular.length - 1">

            <div class="nextSlide_text">
                <div>
                    <span>Next</span> {{ moviesPopular[heroSlideNumber+1].title }}
                </div>
                <div>
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
                    </svg>
                </div>
            </div>
            <div class="nextSlide_image">
                <img :src="'https://image.tmdb.org/t/p/w400/' + moviesPopular[heroSlideNumber+1].backdrop_path" alt="">
            </div>

        </div>
    </header>

    <button @click="heroSlideNumber--" :disabled="heroSlideNumber <= 0">PREV</button> &nbsp;
    <button @click="heroSlideNumber++" :disabled="heroSlideNumber >= moviesPopular.length - 1">NEXT</button>

    <section class="grid_container movies">
        <div class="movieBox" v-for="movie in moviesNowPlaying" :key="movie.id">
            <h3>{{ movie.title }}</h3>
            <img :src="'https://image.tmdb.org/t/p/w200/' + movie.poster_path" alt="">
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            heroSlideNumber: 0
        }
    },
    mounted () {
        console.log(process.env.NODE_ENV)
        this.$store.dispatch('loadPopularMovies')
        this.$store.dispatch('loadNowPlayingMovies')
    },
    computed: {
        moviesNowPlaying () {
            return this.$store.state.moviesNowPlaying
        },

        moviesPopular () {
            return this.$store.state.moviesPopular
        }
    }
}
</script>
