<template>
    <div class="main">
        <Navbar></Navbar>
        <div class="container">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script type="text/javascript">
import Navbar from '@/components/navbar'
export default {
    data() {
        return {

        }

    },
    components: {
        Navbar
    }
}
</script>

<style lang="less">
.main {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #f0f0f0;
    .container {
        position: absolute;
        left: 190px;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .el-table__fixed-right {
        right: 1px;
    }
    .el-table th.action-column,.el-table td.action-column {
        text-align: right;
    }
}
</style>
