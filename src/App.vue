<template>
    <div class="container-temp" :class="'bF0EDED'">
        <div class="container-min" :class="{'login' : $route.path === '/login'}">
            <side-menu v-if="$route.path !== '/login'"></side-menu>
            <page-header v-if="$route.path !== '/login'"></page-header>
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script>
import PageHeader from "@/views/PageHeader.vue";
import SideMenu from "@/views/SideMenu.vue";
export default {
    name: 'App',
    components: {
        PageHeader,
        SideMenu,
    }
}
</script>

<style>
@import "./assets/scss/index.css";
</style>
