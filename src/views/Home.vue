<template>
    <transition appear name="fade">
        <header :key="heroSlideNumber" class="homeHero" v-if="moviesPopular != '' " :style=" 'background-image: url(https://image.tmdb.org/t/p/original/' + moviesPopular[heroSlideNumber].backdrop_path + ')' ">
            <div class="homeHero_slide">
                <div class="homeHero_slide_details">
                    <div class="">
                        <h1>{{ moviesPopular[heroSlideNumber].title }}</h1>

                        <div class="overview">
                            <p>{{ moviesPopular[heroSlideNumber].overview }}</p>
                        </div>

                        <router-link :to="'/movie/' + moviesPopular[heroSlideNumber].id" class="btn btn_primary">Find out more</router-link>
                    </div>
                </div>
            </div>

            <div class="nextSlide" @click="heroSlideNumber++">
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
    </transition>

    <transition name="fade">
        <div v-if="showHero" class="test">
            <h1>This is a test transition</h1>
        </div>
    </transition>

    <section class="grid_movies">
        <div class="movieBox" v-for="movie in moviesNowPlaying" :key="movie.id">
            <router-link :to="'/movie/' + movie.id">
                <div class="movieBox_image">
                    <img :src="'https://image.tmdb.org/t/p/w200/' + movie.poster_path" alt="">
                </div>
                <h3 class="movieBox_title">{{ movie.title }}</h3>
            </router-link>
        </div>

    </section>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {

    setup () {
        const store = useStore()
        const heroSlideNumber = ref(0)
        const showHero = ref(false)

        const moviesNowPlaying = computed(() => {
            return store.state.moviesNowPlaying
        })

        const moviesPopular = computed(() => {
            return store.state.moviesPopular
        })

        onMounted(
            store.dispatch('loadPopularMovies'),
            store.dispatch('loadNowPlayingMovies')
        )

        return {
            heroSlideNumber, moviesNowPlaying, moviesPopular, showHero
        }
    }

}
</script>

<style lang="scss" scoped>
.fade-enter-from {
    opacity: 0;
}
.fade-enter-to {
    opacity: 1;
}
.fade-enter-active {
    transition: all 2s ease;
}

.fade-leave-from {
    opacity: 1;
}
.fade-leave-to {
    opacity: 0;
}
.fade-leave-active {
    transition: all 2s ease;
}
</style>
