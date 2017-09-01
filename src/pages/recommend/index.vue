<template>
    <div class="page">
        <v-header></v-header>
        <div class="page-container">
            <div class="page-content">
                <div class="page-list">
                    <div class="page-list-item" v-for="item in list" :key="item">
                        <v-item :item="item"></v-item>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import header from '@/pages/recommend/header'
import item from '@/pages/recommend/item'
export default {
    data() {
        return {
            list:[1,2,3,4,5,6]
        }
    },
    components: {
        'v-header':header,
        'v-item':item
    }
}
</script>

<style lang="less" scoped>
.page{
    position: relative;
    height: 100%;
    overflow: hidden;
    .page-container{
        position: absolute;
        top: 75px;
        left: 0;
        right: -15px;
        bottom: 0;
        overflow-y:scroll;
        .page-content{
            height: auto;
            overflow: hidden;
            padding: 25px 100px;
            .page-list{
                height: auto;
                overflow: hidden;
                .page-list-item{
                    height: auto;
                    overflow: hidden;
                    background: #fff;
                    padding: 25px;
                    margin-bottom: 25px;
                }

            }
        }
    }
}
</style>