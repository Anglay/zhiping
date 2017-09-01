<template>
    <div class="navbar">
        <div class="title">
            <h1>招聘
                <span>企业版</span>
            </h1>
        </div>
        <div class="user">
            <div class="photo">
                <span><img src="../assets/photo.jpg" /></span>
            </div>
            <div class="name-text">
                下午好，艾薇兒
            </div>
        </div>
        <div class="menu-list">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <router-link :to="item.menuCode">
                        {{item.text}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    data() {
        return {
            list: [{
                text: "推荐牛人",
                menuCode: "recommend"
            }, {
                text: "我的收藏",
                menuCode: "collection"
            }, {
                text: "招聘管理",
                menuCode: "post"
            }, {
                text: "简历管理",
                menuCode: "resume"
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.navbar {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 190px;
    background: #324057;
    .user {
        height: auto;
        overflow: hidden;
        .photo {
            width: 150px;
            height: 150px;
            border-radius: 100%;
            background: #fff;
            overflow: hidden;
            margin: 20px 20px 5px;
            span {
                display: block;
                width: 144px;
                height: 144px;
                margin: 3px;
                border-radius: 100%;
                overflow: hidden;
            }
            img {
                width: auto;
                height: 100%;
            }
        }
        .name-text {
            height: 45px;
            line-height: 45px;
            border-bottom: 1px solid #1F2D3D;
            font-size: 16px;
            text-align: center;
            color: #fff;
            padding: 0 25px;
        }
    }
    .title {
        background: #20a0ff;
        text-align: center;
        padding: 25px 0;
        h1 {
            height: 25px;
            line-height: 25px;
            font-size: 22px;
            color: #fff;
            span {
                color: #E5E9F2;
                padding: 5px;
            }
        }
    }
    .menu-list {
        height: auto;
        overflow: hidden;
        ul {
            li {
                height: 55px;
                line-height: 55px;
                a {
                    display: block;
                    height: 55px;
                    padding: 0 20px;
                    transition: border-color 0.3s ease 0s, background-color 0.3s ease 0s, color 0.3s ease 0s;
                    font-size: 16px;
                    text-align: center;
                    letter-spacing: 2px;
                }
                a:hover {
                    background: #48576a;
                }
                a.router-link-exact-active {
                    color: #fff;
                }
            }
        }
    }
}
</style>
