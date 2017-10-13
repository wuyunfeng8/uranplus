<template>
  <div id="app">
    <div class="page-content">
      <router-view name="PageNav"></router-view>
      <router-view></router-view>
      <router-view name="PageFooter"></router-view>
    </div>
  </div>
</template>

<script>

import PageNav from './components/pageNavBar'
import PageFooter from './components/pageFooter'
export default {
  name: 'app',
}
</script>
