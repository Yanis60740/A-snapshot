<template>
  <HeroPage/>
  <FirstPage/>
</template>

<script>
import HeroPage from './components/HeroPage.vue';
import FirstPage from './components/FirstPage.vue';
// import GLBViewer from './components/GLBViewer.vue'

export default {
  name: 'App',
  components: {
    HeroPage,
    FirstPage
    // GLBViewer
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 20000px;
}
</style>
