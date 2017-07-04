<template>
  <div>
    <navigation></navigation>
    <div class="container view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navigation from './components/Nav'
export default {
  name: 'app',
  components: {
    navigation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.container.view {
  padding-top: 20px;
}
</style>
