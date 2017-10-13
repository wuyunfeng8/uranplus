import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import pageNavBar from '@/components/pageNavBar'
import pageFooter from '@/components/pageFooter'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    components: {
      pageNavBar: pageNavBar,
      pageFooter: pageFooter,
      default: index,
    }
  }, ]
})
