<template>
  <div id="app">
      <HeroPage/>
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      <FifthPage/>
      <FooterPage/>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HeroPage from './components/HeroPage.vue';
import FirstPage from './components/FirstPage.vue';
import SecondPage from './components/SecondPage.vue';
import ThirdPage from './components/ThirdPage.vue';
import FourthPage from './components/FourthPage.vue';
import FifthPage from './components/FifthPage.vue';
import FooterPage from './components/FooterPage.vue';

const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.scrollTo(0, 0)
  window.addEventListener('scroll', handleScroll)
   
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.scrollTo(0, 0)
})
</script>

<style>
#app {
  width: 100%;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
#app::-webkit-scrollbar {
  display: none !important; /* Chrome/Safari */
}

.page-wrapper {
  height: 100vh;
  /* position: relative; */
}


</style>
