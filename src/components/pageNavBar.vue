<template>
<div class="ui navbar">
    <div class="ui container">
        <div class="content">
            <a href="#" class="header">
                <img src="../assets/images/logo.png" alt="logo">
                <span>优燃佳</span>
            </a>
            <ul id="nav-mobile" class="menu">
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/about">关于我们</router-link>
                </li>
                <li>
                    <router-link to="/service">技术服务</router-link>
                </li>
                <li>
                    <router-link to="/service">产品方案</router-link>
                </li>
            </ul>
            <button type="button" name="button" class="ui blue button">预约我们</button>
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
