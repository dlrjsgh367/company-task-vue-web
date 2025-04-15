<template>
    <div class="container-side">
        <div class="pv20 ph18">
            <div class="fw700 fs22 c5D586C">관리자페이지</div>
        </div>
        <div class="box-tab-list">
            <div class="box-tab" :class="{ 'active': $route.path === '/' }" @click="$router.push('/')">
                <div class="icon" :class="$route.path === '/' ? 'icon-calender-white' : 'icon-calender-gray'"></div>
                <div class="text">Dashboard</div>
            </div>
            <div class="box-tab" :class="{ 'active': $route.path === '/user' }" @click="$router.push('/user')">
                <div class="icon" :class="$route.path === '/user' ? 'icon-people-white' : 'icon-people-gray'"></div>
                <div class="text">고객관리</div>
            </div>
            <div class="box-tab" :class="{ 'active': $route.path === '/setting' }" @click="$router.push('/setting')">
                <div class="icon" :class="$route.path === '/setting' ? 'icon-setting-white' : 'icon-setting-gray'"></div>
                <div class="text">공연관리</div>
            </div>
            <div class="box-tab" :class="{ 'active': $route.path === '/buy' }" @click="$router.push('/buy')">
                <div class="icon" :class="$route.path === '/buy' ? 'icon-file-white' : 'icon-file-gray'"></div>
                <div class="text">모니터링/현장구매</div>
            </div>
        </div>
        <div class="pv15 ph30">
            <div class="fw400 fs11 cA5A2AD">커뮤니티</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideMenu",
}
</script>

<style scoped>

</style>
