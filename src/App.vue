<template>
    <div class="container-top">
        <RouterView></RouterView>
    </div>
</template>

<script>

export default {
    name: 'App',
}
</script>

<style>
.container-top {
    z-index: 10;
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    background-color: white;
}
</style>
