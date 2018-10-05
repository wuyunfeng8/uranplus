<template>
    <div class="ui navbar">
        <div class="ui container">
            <div class="content">
                <a href="#" class="header">
                    <img src="../assets/images/logo.png" alt="logo">
                    <span>UranPlus</span>
                </a>
                <ul id="nav-mobile" class="menu">
                    <li>
                        <router-link to="/">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/1">关于我们</router-link>
                    </li>
                    <li>
                        <router-link to="/1">技术服务</router-link>
                    </li>
                    <li>
                        <router-link to="/1">产品方案</router-link>
                    </li>
                </ul>
                <button type="button" name="button" class="ui blue button">联系我们</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pageNavBar",
        data() {
            return {
                prdId: parseInt(Math.random())
            };
        }
    };
</script>