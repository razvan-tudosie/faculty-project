<template>
    <div class="pageWraper">
        <div class="grid_container">
            <h1>WELCOME {{ userData.name }}</h1>
            <p>this is the account page {{ userData.id }}</p>
            <!-- <p>{{ tickets }}</p> -->
            <ul>
                <li v-for="ticket in tickets" :key="ticket.movie" style="margin-bottom:30px;">
                    <p>{{ ticket.movie }}</p>
                    <p>{{ ticket.datetime }}</p>
                    <p>{{ ticket.seat }}</p>
                </li>
            </ul>
            <button @click="addTicket">CLick</button>
        </div>
    </div>
</template>

<script>
// import firebase from 'firebase'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup () {
        const store = useStore()

        const tickets = computed(() => {
            return store.getters.tickets
        })

        const userData = computed(() => {
            return store.getters.user
        })

        const addTicket = () => {
            store.dispatch('createUserColection', {
                user: userData.value.id,
                movie: 'Razboiul stelelor',
                seat: '4A',
                datetime: '20.10.2021'
            })
        }

        return {
            tickets, userData, addTicket
        }
    }
}
</script>
