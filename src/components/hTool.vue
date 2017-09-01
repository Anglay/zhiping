<template>
    <div class="header-tool">
        <div class="tool-item">
            <span class="login-out" @click="loginOut"></span>
        </div>
        <div class="tool-item">
            <span class="text-label">反馈</span>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    data() {
        return {

        }
    },
    methods: {
        loginOut: function() {
            this.$confirm('确认退出登录吗？', '退出登录', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '退出登录成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消退出登录'
                });
            });
        }
    }
}
</script>

<style lang="less" scoped>
.header-tool{
    display: inline-block;
    float: right;
    height: 70px;
    .tool-item{
        display: inline-block;
        float: right;
        padding: 0 10px;
        .login-out{
            display: inline-block;
            height: 70px;
            width: 50px;
            background: url(../assets/icon_loginout.svg) no-repeat center center;
            background-size: 24px;
        }
        .text-label{
            transition: border-color 0.3s ease 0s, background-color 0.3s ease 0s, color 0.3s ease 0s;
            display: inline-block;
            border:1px solid #2c3e50;
            height: 24px;
            line-height: 24px;
            padding: 0 15px;
            border-radius: 15px;
            font-size: 14px;
            margin: 23px 0;
            cursor: pointer;
        }
        .text-label:hover{
            color:#20a0ff;
            border-color: #20a0ff;
        }
    }
}
</style>
