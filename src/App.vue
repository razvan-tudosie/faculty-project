<template>
    <MainNavigation />
    <router-view />

    <footer>
        This is the footer
    </footer>
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

<style lang="scss" scoped>
footer {
    background-color: #000;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    margin-top:32px;
    padding:16px;
}
</style>
