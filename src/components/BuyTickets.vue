<template>
    <div id="buyOverlay">
        <div class="buyContainer">
            <transition appear name="fadeform" @after-enter="afterEnter">
            <iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/odM92ap8_c0?controls=0&loop=1&autoplay=1&mute=1" frameborder="0"></iframe>
        </transition>
        <form @submit.prevent="buyTicket">
            <div id="seatsLayout">
                <div class="seatRow">
                    <div class="seatGroup groupTop" >
                        <input v-model="selectedSeats" type="checkbox" v-for="seat in seats.seatRowOne" :key="seat" :class="{ full: seat.seatFull }" :value="seat.seatNumber" :disabled="seat.seatFull == true">
                    </div>
                </div>

                <div class="seatRow">
                    <div class="seatGroup groupLeft" >
                        <input v-model="selectedSeats" type="checkbox" v-for="seat in seats.seatRowTwo.groupLeft" :key="seat" :class="{ full: seat.seatFull }" :value="seat.seatNumber" :disabled="seat.seatFull == true">
                    </div>
                    <div class="seatGroup groupMiddle">
                        <input v-model="selectedSeats" type="checkbox" v-for="seat in seats.seatRowTwo.groupMiddle" :key="seat" :class="{ full: seat.seatFull }" :value="seat.seatNumber" :disabled="seat.seatFull == true">
                    </div>
                    <div class="seatGroup groupRight">
                        <input v-model="selectedSeats" type="checkbox" v-for="seat in seats.seatRowTwo.groupRight" :key="seat" :class="{ full: seat.seatFull }" :value="seat.seatNumber" :disabled="seat.seatFull == true">
                    </div>
                </div>
                <div class="seatRow">
                    <div class="seatGroup groupBottom">
                        <input v-model="selectedSeats" type="checkbox" v-for="seat in seats.seatRowThree" :key="seat" :class="{ full: seat.seatFull }" :value="seat.seatNumber" :disabled="seat.seatFull == true">
                    </div>
                </div>
            </div>

            <div class="formFooter">
                <h2>Please select the seats that you want</h2>
                <p>You have selected
                    <span v-if="selectedSeats.length === 0"><strong>0 seats</strong></span>
                    <span v-if="selectedSeats.length > 0">{{ selectedSeats.length }} seats :</span>
                    <ul class="seatsList">
                        <li v-for="seat in selectedSeats" :key="seat">{{ seat }}</li>
                    </ul>
                </p>
                <br>
                <input type="submit" class="btn btn_primary" value="Buy Tickets" :disabled="selectedSeats.length === 0 ">
                <br><br>
                <button @click='this.$emit("closeBuy")' class="btn">cancel</button>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import gsap from 'gsap'

export default {
    props: {
        title: {
            type: String
        }
    },

    setup (props, { emit }) {
        const store = useStore()
        const selectedSeats = ref([])
        const selectedDate = ref('selectedData')
        const selectedHour = ref('Hours')

        const afterEnter = (el) => {
            setTimeout(() => {
                gsap.to(el, {
                    duration: 2,
                    rotationX: -60,
                    width: 300,
                    height: 200,
                    transformPerspective: 400,
                    transformStyle: 'preserve-3d',
                    x: 'auto'
                })
            }, 3000)
        }

        const userData = computed(() => {
            return store.getters.user
        })

        const seats = computed(() => {
            return store.getters.seats
        })

        const buyTicket = () => {
            store.dispatch('createUserColection', {
                user: userData.value.id,
                movie: props.title,
                seat: selectedSeats.value,
                datetime: '20.10.2021'
            })
            emit('closeBuy')
        }

        return {
            seats, selectedSeats, selectedDate, selectedHour, userData, buyTicket, afterEnter
        }
    }

}
</script>
