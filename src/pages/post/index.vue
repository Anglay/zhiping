<template>
    <div class="page">
        <v-header></v-header>
        <div class="page-container">
            <div class="page-content">
                <div class="grid-tool">
                    <el-button type="primary" size="small" icon="plus">新增招聘岗位</el-button>
                </div>
                <div class="page-grid">
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="post" label="岗位" width="200">
                        </el-table-column>
                        <el-table-column prop="createDate" label="创建日期" width="180">
                        </el-table-column>
                        <el-table-column prop="count" label="招聘人数" width="100">
                        </el-table-column>
                        <el-table-column prop="city" label="需求城市" width="100">
                        </el-table-column>
                        <el-table-column label="操作" fixed="right" min-width="150" class-name="action-column">
                            <template scope="scope" class="action-column">
                                <el-button type="text" size="small">查看</el-button>
                                <el-button type="text" size="small">编辑</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import header from '@/pages/post/header'
export default {
    data() {
        return {
            tableData: [{
                post: '前端开发工程师',
                createDate: '2017-9-1',
                count: 2,
                city: '上海'
            }, {
                post: '前端开发工程师',
                createDate: '2017-9-1',
                count: 2,
                city: '上海'
            },{
                post: '前端开发工程师',
                createDate: '2017-9-1',
                count: 2,
                city: '上海'
            },{
                post: '前端开发工程师',
                createDate: '2017-9-1',
                count: 2,
                city: '上海'
            },{
                post: '前端开发工程师',
                createDate: '2017-9-1',
                count: 2,
                city: '上海'
            },]
        }
    },
    components: {
        'v-header': header
    }
}
</script>

<style lang="less" scoped>
.page {
    position: relative;
    height: 100%;
    overflow: hidden;
    .page-container {
        position: absolute;
        top: 75px;
        left: 0;
        right: -15px;
        bottom: 0;
        overflow-y: scroll;
        .page-content {
            height: auto;
            overflow: hidden;
            padding: 25px 100px;
            .grid-tool {
                height: auto;
                overflow: hidden;
                padding-bottom: 10px;
            }
            .page-grid {
                height: auto;
                overflow: hidden;
                
            }
        }
    }
}

</style>