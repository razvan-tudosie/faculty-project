<template>
    <div class="ticket">
        asd
    </div>
    <header class="movieHeader" :style=" 'background-image: url(https://image.tmdb.org/t/p/original/' + movieDetails.backdrop_path + ')' ">

        <BuyTickets />

        <div class="movieHeader_overlay">
            <div class="movieHeader_content">
                <div class="movieHeader_content_poster">
                    <img :src="'https://image.tmdb.org/t/p/w500/' + movieDetails.poster_path" alt="">
                </div>
                <div class="movieHeader_content_details">
                    <h1 class="title">{{ movieDetails.title }}</h1>
                    <h2 class="tagline">{{ movieDetails.tagline }}</h2>
                    <ul class="genre">
                        <li v-for="genre of movieDetails.genres" :key="genre.id">
                            {{ genre.name }}
                        </li>
                    </ul>
                    <p>{{ movieDetails.overview }}</p>
                    <ul class="productionComp">
                        <li v-for="productionComp of movieDetails.production_companies" :key="productionComp.id">
                            <img v-if="productionComp.logo_path != null" class="productionComp_image" :src="'https://image.tmdb.org/t/p/w200' + productionComp.logo_path" alt="">
                            <span class="name" v-if="productionComp.logo_path === null">{{ productionComp.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </header>

    <div class="grid_container">

        <section class="cast">
            <h3>The Cast</h3>
            <ul class="cast_people">
                <li class="person" v-for="person of movieCredits.cast" :key="person.id">
                    <span v-if="person.profile_path === null ">
                        <img height="210" class="person_image" src="@/assets/images/default_avatar.png" alt="">
                    </span>
                    <img class="person_image" :src="'https://image.tmdb.org/t/p/w200' + person.profile_path" alt="">
                    <p class="person_name">{{ person.name }}</p>
                    <p class="person_character">{{ person.character }}</p>
                </li>
            </ul>
        </section>

        <section>
            <h3>Recomandations</h3>

            <div class="grid_movies">
                <div class="movieBox" v-for="movie in movieRecomandations.results" :key="movie.id">
                    <router-link :to="'/movie/' + movie.id">
                        <div class="movieBox_image">
                            <img :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path" alt="">
                        </div>
                        <h3 class="movieBox_title">{{ movie.title }}</h3>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- <div class="cast">
            <h3>Recomandations</h3>
            <ul class="cast_people">
                <li class="person" v-for="movie of movieRecomandations.results" :key="movie.id">

                    <img class="person_image" :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path" alt="">
                    <p class="person_name">{{ movie.title }}</p>
                </li>
            </ul>
        </div> -->

    </div>
</template>

<script>
import BuyTickets from '@/components/BuyTickets.vue'

import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
    components: {
        BuyTickets
    },

    setup () {
        const store = useStore()
        const route = useRoute()

        const movieDetails = computed(() => {
            return store.state.movieDetails
        })

        const movieCredits = computed(() => {
            return store.state.movieCredits
        })

        const movieRecomandations = computed(() => {
            return store.state.movieRecomandations
        })

        const movieVideos = computed(() => {
            return store.state.movieVideos
        })

        onMounted(
            store.dispatch('loadMovie', route.params.id),
            store.dispatch('loadMovieCredits', route.params.id),
            store.dispatch('loadMovieRecomandations', route.params.id),
            store.dispatch('loadMovieVideo', route.params.id)
        )

        return {
            movieDetails, movieCredits, movieRecomandations, movieVideos
        }
    }

}
</script>
