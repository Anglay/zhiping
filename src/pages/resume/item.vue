<template>
    <div class="resume">
        <div class="resume-header">
            <span>歐陽</span>
            <span class="fright">3年</span>
        </div>
        <div class="resume-content">
            <div>
                <span>期望职位：</span>
                <p>前端开发工程师</p>
            </div>
            <div>
                <span>现&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;任：</span>
                <p>杭州弘信控股科技有限公司</p>
            </div>
            <div>
                <span>任&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;职：</span>
                <p>前端开发工程师</p>
            </div>
            <div>
                <span>个人主页：</span>
                <p>https://github.com/Anglay</p>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    props: ["item"]
}
</script>

<style lang="less" scoped>
.resume {
    position: relative;
    width: 250px;
    height: 300px;
    padding: 0 0 1px 0;
    background: #fff;
    background: -webkit-gradient(linear, 0% 20%, 0% 92%, from(#f3f3f3), to(#fff), color-stop(.1, #f3f3f3));
    background: -webkit-linear-gradient(0 0 270deg, #f3f3f3, #f3f3f3 10%, #fff);
    background: -moz-linear-gradient(0 0 270deg, #f3f3f3, #f3f3f3 10%, #fff);
    background: -o-linear-gradient(0 0 270deg, #f3f3f3, #f3f3f3 10%, #fff);
    border: 1px solid #ccc;
    border-bottom-right-radius: 60px;
    -webkit-box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.2);
    box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.2);
    color: #2c3e50;
    .resume-header {
        height: 50px;
        line-height: 50px;
        background: url(../../assets/icon_resume.svg) no-repeat 10px center;
        background-size: 40px;
        padding-left: 60px;
        border-bottom: 1px solid #1F2D3D;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.12);
        span {
            font-size: 16px;
            font-weight: bold;
        }
    }
    .fright {
        float: right;
        margin-right: 10px;
    }
    .resume-content {
        height: auto;
        overflow: hidden;
        padding: 10px;
        >div{
            font-size: 14px;
            margin-bottom: 10px;
            p{
                padding: 10px 0 5px;
                font-weight: bold;
                text-indent: 2rem;
            }
        }
    }
}

.resume:before {
    content: '';
    width: 25px;
    height: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    -webkit-border-radius: 0 0 30px 0;
    -moz-border-radius: 0 0 30px 0;
    border-radius: 0 0 30px 0;
    -webkit-box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.3);
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.3);
    -webkit-transform: rotate(-20deg) skew(-40deg, -3deg) translate(-13px, -13px);
    -moz-transform: rotate(-20deg) skew(-40deg, -3deg) translate(-13px, -13px);
    -o-transform: rotate(-20deg) skew(-40deg, -3deg) translate(-13px, -13px);
    transform: rotate(-20deg) skew(-40deg, -3deg) translate(-13px, -13px);
}


/*这里，我们做出的褶皱阴影*/

.resume:after {
    content: '';
    z-index: -1;
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    display: inline-block;
    -webkit-box-shadow: 20px 20px 8px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 20px 20px 18px rgba(0, 0, 0, 0.2);
    box-shadow: 20px 20px 8px rgba(0, 0, 0, 0.2);
    -webkit-transform: rotate(0deg) translate(-45px, -20px) skew(20deg);
    -moz-transform: rotate(0deg) translate(-45px, -20px) skew(20deg);
    -o-transform: rotate(0deg) translate(-45px, -20px) skew(20deg);
    transform: rotate(0deg) translate(-45px, -20px) skew(20deg);
}
</style>
