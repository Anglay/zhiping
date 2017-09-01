<template>
    <div class="header">
        <div class="header-title">简历管理</div>
        </el-form>
        <hTool></hTool>
    </div>
</template>

<script type="text/javascript">
import hTool from '@/components/hTool'
export default {
    components: {
        hTool
    }
}
</script>

<style lang="less" scoped>
.header {
    position: fixed;
    left: 190px;
    top: 0;
    right: 0;
    height: 70px;
    padding-top: 5px;
    background: #fff;
    z-index: 9999;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.12);
    .header-title {
        display: inline-block;
        float: left;
        height: 70px;
        line-height: 70px;
        padding: 0 25px;
        font-weight: bold;
        font-size: 16px;
    }
}
</style>
