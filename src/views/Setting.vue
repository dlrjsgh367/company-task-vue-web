<template>
    <div class="container-common mt20 ">
        <div class="pt24 pr40 pb40 pl24">
            <div class="w173 pa8 bb-1d5-4B465C mb22">
                <div class="fw600 fs20 c4B465C">공연관리</div>
            </div>
            <div class="pa8 mb8">검색</div>
            <div class="box-flex maw760 mb8">
                <el-input placeholder="고객명" class="w102 h38"></el-input>
                <el-input placeholder="검색어를 입력해주세요." class="ml20 mr12 h38">
                    <template #prefix>
                        <div class="icon-search-gray w24 h24 poiner"></div>
                    </template>
                </el-input>
                <button class="btn-primary w88 h40">
                    <div class="fw500 fs15 cFFFFFF">검색</div>
                </button>

            </div>
            <div class="box-flex maw760 mb30">
                <el-input placeholder="고객명" class="w102 h38"></el-input>
                <el-input placeholder="검색어를 입력해주세요." class="ml20 mr12 h38">
                    <template #prefix>
                        <div class="icon-search-gray w24 h24 poiner"></div>
                    </template>
                </el-input>
                <button class="btn-primary w88 h40">
                    <div class="fw500 fs15 cFFFFFF">검색</div>
                </button>

            </div>
            <el-table :data="tableData" style="width: 100%" height="768">
                <el-table-column type="selection" label="No" width="55"/>
                <el-table-column prop="title" label="이름" min-width="384"></el-table-column>
                <el-table-column prop="venue" label="핸드폰번호" min-width="180"></el-table-column>
                <el-table-column prop="date" min-width="180">
                    <template #header>
                        <div class="box-flex ai-center jc-center gap6 pointer">
                            <span>등록일</span>
                            <div class="icon-down w24 h24"></div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="session" label="구매처" min-width="150"></el-table-column>
                <el-table-column prop="host" label="최근접속일" min-width="150"></el-table-column>
                <el-table-column prop="memo" label="최근 관람 공연" min-width="150"></el-table-column>
                <el-table-column prop="createdAt" label="지역" min-width="180"></el-table-column>
                <!-- 상태 컬럼 -->
                <el-table-column prop="status" min-width="200">
                    <template #header>
                        <div class="box-flex ai-center jc-center gap6 pointer">
                            <span>상세보기</span>
                            <div class="icon-down w24 h24"></div>
                        </div>
                    </template>

                    <template v-slot="scope">
                        <button class="btn-red w125 h36" v-if="scope.row.status === 'PENDING'">
                            <div class="fw800 fs15 cFFFFFF">DB 대기중</div>
                        </button>
                        <button class="btn-blue w125 h36" v-else>
                            <div class="fw800 fs15 cFFFFFF">등록완료</div>
                        </button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
    <div class="copy-right"><span class="fw700 fs18">2025</span> Copyright © <span class="fw700 fs18">SOOMBILAB.</span> All Rights reserved.</div>
</template>

<script>
export default {
    name: `Setting`,
    data() {
        const row = {
            title: '최고다! 호기심딱지 시즌3',
            venue: '울산대공연장',
            date: '2025-03.24',
            session: '1회차',
            host: '숨비랩',
            memo: '목요일 티켓 마감',
            createdAt: '2025.03.24 12:23',
            status: 'COMPLETED',
        };

        return {
            baseRow: row,
            tableData: Array.from({length: 100}, () => ({...row}))
        };
    }
}
</script>

<style>
</style>