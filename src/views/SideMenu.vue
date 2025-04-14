<template>
    <div class="container-side">
        <div class="pv20 ph18">
            <div class="fw700 fs22 c5D586C">관리자페이지</div>
        </div>
        <div class="box-tab-list">
            <div class="box-tab active">
                <div class="icon" :class="true ? 'icon-calender-white' : 'icon-calender-gray'"></div>
                <div class="text">Dashboard</div>
            </div>
            <div class="box-tab">
                <div class="icon" :class="false ? 'icon-people-white' : 'icon-people-gray'"></div>
                <div class="text">고객관리</div>
            </div>
            <div class="box-tab">
                <div class="icon" :class="false ? 'icon-setting-white' : 'icon-setting-gray'"></div>
                <div class="text">공연관리</div>
            </div>
            <div class="box-tab">
                <div class="icon" :class="false ? 'icon-file-white' : 'icon-file-gray'"></div>
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