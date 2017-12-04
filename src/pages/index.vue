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
        <h3 class="header">
            我们的服务
        </h3>
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
        <h3 class="header">打破行业局限的解决方案，满足广泛的业务需求</h3>
        <div class="sub_title">电商、零售、餐饮、医疗、消防、国电、休闲娱乐、大数据云平台，优燃佳都有完整解决方案</div>
        <div class="ui grid">
            <div class="doubling stackable four column row">
                <div class="column">
                    <i class="fa fa-cubes" aria-hidden="true"></i>
                    <header>终端硬件</header>
                    <p>
                        智能硬件终端的一站式采购，支付pos终端、数据采集终端、wifi探测模块、大数据展示大屏、云平台指挥大屏、员工定制操作终端、厂区感应终端等
                    </p>
                </div>
                <div class="column">
                    <header>服务硬件</header>
                </div>
                <div class="column">
                    <header>技术产品</header>
                </div>
                <div class="column">
                    <header>广告推广</header>
                </div>
            </div>
        </div>
    </div>
    <div class="ui blackserve">
        <h3 class="header">强大的研发实力，稳定高效的技术服务</h3>
        <div class="sub_title">年轻且顶尖的技术研发团队，打造99.99%高可用系统</div>
        <div class="centent">
            <div class="image">
                <img src="../assets/images/l6_img1.png" alt="">
            </div>
            <div class="list-box">
                <div class="three-box">
                    <div class="box">
                        <p>99.99 <span>%</span></p>
                        <p class="sub">系统可用</p>
                    </div>
                    <div class="box">
                        123
                    </div>
                    <div class="box">
                        123
                    </div>
                </div>
            </div>
        </div>
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
