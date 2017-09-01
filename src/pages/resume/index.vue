<template>
    <div class="page">
        <v-header></v-header>
        <div class="page-container">
            <div class="page-content">
                <div class="page-list">
                    <ul>
                        <li v-for="item in list" :key="item">
                            <router-link :to="'/resume?type=team&id='+item" exact>
                                <v-item :item="item"></v-item>
                            </router-link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import header from '@/pages/resume/header'
import item from '@/pages/resume/item'
export default {
    data() {
        return {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        }
    },
    components: {
        'v-header': header,
        'v-item': item
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
            .page-list {
                height: auto;
                overflow: hidden;
                ul {
                    width: 1080px;
                    margin: 0 auto;
                    li {
                        display: inline-block;
                        float: left;
                        width: 252px;
                        height: auto;
                        overflow: hidden;
                        margin: 8px;
                    }
                }
            }
        }
    }
}
</style>