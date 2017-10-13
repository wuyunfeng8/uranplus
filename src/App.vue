<template>
  <div id="app">
    <div class="page-content">
      <router-view name="pageNavBar"></router-view>
      <router-view></router-view>
      <router-view name="pageFooter"></router-view>
    </div>
  </div>
</template>

<script>
import pageNavBar from './components/pageNavBar'
import pageFooter from './components/pageFooter'
export default {
  name: 'app',
}
</script>
