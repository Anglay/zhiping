<template>
    <div class="item">
        <el-row>
            <el-col :span="12">
                <div class="base-info">
                    <div class="info-header">
                        <span>杭州</span>
                        <span>本科</span>
                        <span>3年</span>
                        <span>在职，考虑机会</span>
                    </div>
                    <div class="info-content">
                        <span class="photo"><img src="../../assets/photo.jpg" alt=""></span>
                        <dl>
                            <dd>
                                <span class="mr25">歐陽</span>
                                <span>期望职位：</span>
                                <span class="primary">前端开发工程师</span>
                            </dd>
                            <dd>
                                <span>现任：</span>
                                <span class="mr25">杭州弘信控股科技有限公司</span>
                                <span>任职：</span>
                                <span>前端开发工程师</span>
                            </dd>
                            <dd>
                                <span class="mr25">中南名族大学工商学院</span>
                                <span>阳新实验高级中学</span>
                            </dd>
                            <dd>
                                <span>个人主页：</span>
                                <span class="primary">https://github.com/Anglay</span>
                            </dd>
                        </dl>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="info-remark">
                    <div>
                        <span>个人优势</span>
                        <a class="view">查看简历</a>
                    </div>
                    <p>
                        1、熟练掌握HTML/CSS/HTML5/CSS3，能够书写语义合理、结构清晰、易维护的HTML结构；2、熟练掌前端框架的使用,如：JQuery/bootstrap/ avalon.JS； 3、熟练掌握页面组件化、模块化开发（require.js/sea.js），并有项目经验； 4、熟练Vue.js框架的使用，包括vue-router，vue-resourse等，熟练掌握vue-cli单页面的开发。
                    </p>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="touch">
                    <div>
                        <div>
                            <el-button type="primary" size="mini">职位邀请</el-button>
                        </div>
                        <div>
                            <el-button type="warning" size="mini">交换微信</el-button>
                        </div>
                        <div>
                            <el-button type="warning" size="mini">交换QQ</el-button>
                        </div>
                        <div>
                            <el-button type="warning" size="mini">交换手机</el-button>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/javascript">
export default {
    data() {
        return {

        }

    },
    props: ["item"],
    components: {

    }
}
</script>

<style lang="less" scoped>
.item {
    height: auto;
    overflow: hidden;
    .base-info {
        height: auto;
        overflow: hidden;
        .info-header {
            height: auto;
            overflow: hidden;
            span {
                display: inline-block;
                margin-right: 25px;
                font-size: 14px;
                font-weight: bold;
            }
        }
        .info-content {
            height: auto;
            overflow: hidden;
            .photo {
                display: inline-block;
                float: left;
                width: 120px;
                height: 120px;
                margin: 30px 25px 15px;
                overflow: hidden;
                border-radius: 100%;
                img {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                }
            }
            >dl {
                height: auto;
                overflow: hidden;
                margin-left: 200px;
                padding: 30px 0 15px;
                dd {
                    height: 40px;
                    line-height: 40px;
                    span {
                        font-size: 14px;
                    }
                    .mr25 {
                        margin-right: 25px;
                    }
                    .primary {
                        color: #20a0ff;
                    }
                }
            }
        }
    }
    .info-remark {
        height: auto;
        overflow: hidden;
        padding: 30px 0;
        >div {
            position: relative;
            .view{
                position: absolute;
                right: 0;
                top: 0;
                color: #20a0ff;
                font-size: 14px;
                cursor: pointer;
            }
            span {
                font-size: 14px;
                font-weight: bold;
            }
        }
        >p {
            padding: 10px 0;
            line-height: 24px;
            white-space: normal;
            word-break: break-all;
            font-size: 14px;
        }
    }
    .touch {
        display: table;
        width: 100%;
        height: 205px;
        >div {
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            width: 100%;
            height: 100%;
            div {
                padding: 5px 0;
            }
        }
    }
}
</style>
