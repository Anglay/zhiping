<template>
    <div class="header">
        <div class="header-title">推荐牛人</div>
        <el-form :inline="true" :model="searchForm" class="search-form">
            <el-form-item label="岗位">
                <el-select v-model="searchForm.post" placeholder="岗位">
                    <el-option v-for="(item,index) in postList" :key="index" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="薪资范围">
                <el-select v-model="searchForm.salary" placeholder="薪资范围">
                    <el-option v-for="(item,index) in salaryList" :key="index" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <hTool></hTool>
    </div>
</template>

<script type="text/javascript">
import hTool from '@/components/hTool'
export default {
    data() {
        return {
            postList: ["前端工程师", "JAVA工程师", "Android工程师", "IOS工程师", "UI设计师"],
            salaryList: ["3K以下", "3K~5K", "5K~8K", "8K~12K", "12K~18K", "18K~25K", "25K以上"],
            searchForm: {
                post: '',
                salary: ''
            }
        }
    },
    components: {
        hTool
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
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
    .search-form {
        display: inline-block;
        float: left;
        padding-top: 15px;
    }
}
</style>
