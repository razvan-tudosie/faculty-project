<template>
    <MainNavigation />
    <router-view />
</template>

<script>
// @ is an alias to /src
import MainNavigation from '@/components/MainNavigation.vue'

export default {
    name: 'App',
    components: {
        MainNavigation
    }
}
</script>
