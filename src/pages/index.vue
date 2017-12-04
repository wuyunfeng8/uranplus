<template>
<div class="main box">
    <div class="content banner">
        <h1>
            <span v-iType></span>
        </h1>
        <div class="content-box">
            <p>我们专业且有能力制作您的的网站、小程序，强大实用的功能，精简美丽现代的外观，来实现您的一系列梦想</p>
            <button class="ui button blue">洽谈合作</button>
        </div>
    </div>
    <div class="ui container server">
        <div class="header">
            我们的服务
        </div>
        <div class="sub_header">
            无论您是哪个组织、企业还是个人、小商铺这里都能为您的需求找到答案
        </div>
        <div class="ui grid">
            <div class="doubling stackable three column row">
                <div class="column">
                    <div class="ui cards">
                        <div class="image">
                            <img src="../assets/images/top-bg.jpg" alt="">
                        </div>
                        <div class="content">
                            <h3 class="header">
                                创意设计
                            </h3>
                            <div class="description">我们提供简洁和现代的功能及外观设计，以丰富实用的功能来适应于中小企业实现技术创业、活动营销、大数据分析等各种用途，元素的设计在于以多种而一致的方式展示您的内容，拒绝千篇一律的嵌套模版，使您的应用脱颖而出</div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui cards">
                        <div class="image">
                            <img src="../assets/images/top-bg.jpg" alt="">
                        </div>
                        <div class="content">
                            <h3 class="header">
                                创意设计
                            </h3>
                            <div class="description">我们提供简洁和现代的功能及外观设计，以丰富实用的功能来适应于中小企业实现技术创业、活动营销、大数据分析等各种用途，元素的设计在于以多种而一致的方式展示您的内容，拒绝千篇一律的嵌套模版，使您的应用脱颖而出</div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="ui cards">
                        <div class="image">
                            <img src="../assets/images/top-bg.jpg" alt="">
                        </div>
                        <div class="content">
                            <h3 class="header">
                                创意设计
                            </h3>
                            <div class="description">我们提供简洁和现代的功能及外观设计，以丰富实用的功能来适应于中小企业实现技术创业、活动营销、大数据分析等各种用途，元素的设计在于以多种而一致的方式展示您的内容，拒绝千篇一律的嵌套模版，使您的应用脱颖而出</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" name="button" class="ui button blue">更多服务</button>
    </div>
    <div class="ui container solution">
        
    </div>
</div>
</template>

<script>
import { init, destroy } from "ityped";

export default {
  name: "index",
  data() {
    return {
      msg: "首页"
    };
  },
  directives: {
    iType: {
      inserted(el) {
        init(el, {
          strings: [
            "一个很潮的团队，做着一些很潮的事情",
            "运用最先进的技术更友好的解决方案",
            "一个有梦想的年轻团队",
            "一个以解决客户痛点为乐趣的团队"
          ],
          backDelay: 2000,
          loop: true
        });
      }
    }
  }
};
</script>
