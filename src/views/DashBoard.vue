<template>
    <div class="container-common">
        <div class="mt12 mb8">
            <div class="pt24 pr40 pb40 pl24">
                <div class="w173 pa8 bb-1d5-4B465C mb22">
                    <div class="fw600 fs20 c4B465C">이번주 공연 리스트</div>
                </div>
                <el-table :data="tableData" style="width: 100%" height="768">
                    <el-table-column prop="title" label="공연명" min-width="384"></el-table-column>
                    <el-table-column prop="venue" label="공연장" min-width="180"></el-table-column>
                    <el-table-column prop="date" label="공연날짜" min-width="180"></el-table-column>
                    <el-table-column prop="session" label="회차" min-width="150"></el-table-column>
                    <el-table-column prop="host" label="주최사" min-width="150"></el-table-column>
                    <el-table-column prop="memo" label="메모" min-width="150"></el-table-column>
                    <el-table-column prop="createdAt" label="등록일" min-width="180"></el-table-column>
                    <!-- 상태 컬럼 -->
                    <el-table-column prop="status" label="상태" min-width="200">
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
    </div>
</template>

<script>
export default {
    name: "DashBoard",
    data() {
        return {
            tableData: [
                {
                    title: '최고다! 호기심딱지 시즌3',
                    venue: '울산대공연장',
                    date: '2025-03.24',
                    session: '1회차',
                    host: '숨비랩',
                    memo: '목요일 티켓 마감',
                    createdAt: '2025.03.24 12:23',
                    status: 'PENDING',
                },
                {
                    title: '최고다! 호기심딱지 시즌3',
                    venue: '울산대공연장',
                    date: '2025-03.24',
                    session: '1회차',
                    host: '숨비랩',
                    memo: '목요일 티켓 마감',
                    createdAt: '2025.03.24 12:23',
                    status: 'PENDING',
                },
                {
                    title: '최고다! 호기심딱지 시즌3',
                    venue: '울산대공연장',
                    date: '2025-03.24',
                    session: '1회차',
                    host: '숨비랩',
                    memo: '목요일 티켓 마감',
                    createdAt: '2025.03.24 12:23',
                    status: 'COMPLETED',
                },
            ]
        };
    }
}
</script>

<!--<style>-->
<!--.el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf {-->
<!--    border-bottom: unset !important;-->
<!--}-->
<!--</style>-->