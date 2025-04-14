<template>
    <div class="box-flex gap33 mv18">
        <div class="container-common w350 pv16 rd12">
            <div class="box-flex ph16">
                <div class="pl8">
                    <div class="fw400 fs15 c8A9099 pb2">이번주 공연</div>
                    <div class="fw300 fs28 c3F434A">3,500개</div>
                </div>
                <div class="img-line-graph w88 h88 ml-auto"></div>
            </div>
        </div>
        <div class="container-common w350 pv16 rd12">
            <div class="box-flex ph16">
                <div class="pl8">
                    <div class="fw400 fs15 c8A9099 pb2">등록 공연 리스트</div>
                    <div class="fw300 fs28 c3F434A">3,500개</div>
                </div>
                <div class="img-line-graph w88 h88 ml-auto"></div>
            </div>
        </div>
        <div class="container-common w350 pv16 rd12">
            <div class="box-flex ph16">
                <div class="pl8">
                    <div class="fw400 fs15 c8A9099 pb2">회원수</div>
                    <div class="fw300 fs28 c3F434A">3,500개</div>
                </div>
                <div class="img-user w88 h88 ml-auto"></div>
            </div>
        </div>
    </div>
    <div class="container-common">
        <div class="pt24 pr40 pb40 pl24">
            <div class="w173 pa8 bb-1d5-4B465C mb22">
                <div class="fw600 fs20 c4B465C">이번주 공연 리스트</div>
            </div>
            <el-table :data="tableData" style="width: 100%" height="768">
                <el-table-column prop="title" label="공연명" min-width="384"></el-table-column>
                <el-table-column prop="venue" label="공연장" min-width="180"></el-table-column>
                <el-table-column prop="date" min-width="180">
                    <template #header>
                        <div class="box-flex ai-center jc-center gap6 pointer">
                            <span>공연날짜</span>
                            <div class="icon-down w24 h24"></div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="session" label="회차" min-width="150"></el-table-column>
                <el-table-column prop="host" label="주최사" min-width="150"></el-table-column>
                <el-table-column prop="memo" label="메모" min-width="150"></el-table-column>
                <el-table-column prop="createdAt" label="등록일" min-width="180"></el-table-column>
                <!-- 상태 컬럼 -->
                <el-table-column prop="status" min-width="200">
                    <template #header>
                        <div class="box-flex ai-center jc-center gap6 pointer">
                            <span>상태</span>
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
</template>

<script>
export default {
    name: "DashBoard",
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
            tableData: Array.from({ length: 100 }, () => ({ ...row }))
        };
    }
}
</script>

<style>
</style>