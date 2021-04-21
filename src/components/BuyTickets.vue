<template>
    <transition appear name="fade">
        <div id="buyOverlay">
            <!-- {{ movieVideos.results[0].key }} -->
            <form @submit.prevent="onSubmit">
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
                <input type="submit" class="btn btn_primary" value="CLick me">
            </form>
            <span>selectedSeats: {{ selectedSeats }}</span>
        </div>
    </transition>
</template>

<script>
import { ref } from 'vue'
// import { useStore } from 'vuex'

export default {
    setup () {
        // const store = useStore()
        const selectedSeats = ref([])
        const selectedDate = ref('selectedData')
        const selectedHour = ref('Hours')

        const seats = {
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

        console.log(typeof (seats))
        console.log(seats)

        const onSubmit = () => {
            console.log('date: ', selectedSeats.value, selectedDate.value, selectedHour.value)
        }

        return {
            seats, selectedSeats, selectedDate, selectedHour, onSubmit
        }
    }

}
</script>
