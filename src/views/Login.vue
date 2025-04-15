<template>
    <div class="container-common pa32">
        <div class="w386">
            <div class="fw700 fs26 c5D586C pt10 pb16 ta-c">스마트티켓 발권 서비스</div>
            <div class="fw700 fs13 c5D586C pb56 ta-c">이용문의: 숨비랩 0507-1407-1981</div>

            <div class="fw400 fs13 c5D586C pb4">Email or Username</div>
            <el-input v-model="id" class="mb16"></el-input>

            <div class="box-flex pb4">
                <div class="fw400 fs13 c5D586C">Password</div>
                <div class="fw400 fs13 c7367F0 pointer ml-auto">Forgot Password?</div>
            </div>

            <el-input v-model="password" type="password" class="mb16"></el-input>

            <div class="box-flex a-center gap6 pb16">
                <el-checkbox></el-checkbox>
                <div>Remember Me</div>
            </div>

            <button class="btn-primary w100p h38">
                <div class="fw500 fs15 cFFFFFF">Sign in</div>
            </button>
        </div>
    </div>
    <div class="copy-right login"><span class="fw700 fs18">2025</span> Copyright © <span class="fw700 fs18">SOOMBILAB.</span> All Rights reserved.</div>
</template>

<script>
export default {
    name: `Login`,
    data() {
        return {
            id: '',
            password: '',
        }
    }
}
</script>

<style scoped>

</style>