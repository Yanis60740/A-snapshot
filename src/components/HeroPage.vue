<template>
    <div class="heroPage" >
        <GLBViewer v-show="!hideModel"/>
        <div class="heroPage__navbar" >
            <div class="heroPage__navbar__menu">
                <span>Menu</span>
            </div>
            <div class="heroPage__navbar__logo">
                <img src="/assets/logo/logo.svg" alt="Logo" />
            </div>
            <div class="heroPage__navbar__search">
              <svg width="28" height="28" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
        </div>
        <div class="heroPage__content" ref="scalableGroup">
            <div class="heroPage__content__box" :style="{ filter: `blur(${blur}px)` }" >
                <div class="heroPage__content__box__title" >
                    <span >Snapshot Magazine</span>
                </div>
                <div class="heroPage__content__box__subtitle">
                    <span >Vol. 1 - Fujifilm retrospective</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import GLBViewer from '@/components/GLBViewer.vue'
import { ref, computed, provide, onMounted, onUnmounted } from 'vue'
import {defineProps, watch} from 'vue'

const props = defineProps({
  scrollPosition: Number
})


const virtualScroll = ref(0)
provide('virtualScroll', virtualScroll)

const SCROLL_HIDE_THRESHOLD = 300
const hideModel = computed(() => virtualScroll.value > SCROLL_HIDE_THRESHOLD)
watch(hideModel, (newVal) => {
  if (newVal) {
    // autorise le scroll quand le modèle est caché
    document.body.style.overflow = 'auto'
  } else {
    // bloque le scroll tant que le modèle est visible
    document.body.style.overflow = 'hidden'
  }
})
const scalableGroup = ref(null)

const blur = computed(() => {
  const y = Math.min(Math.max(0, props.scrollPosition - 300), 300)
  return 10 - (y / 300) * 10 // blur: 10px -> 0px
})

// const blurAmount = ref(0) // de 0 à ~10px

// const MAX_BLUR_SCROLL = 150 // plus tu scrolles, plus le texte est flou (max à 10px)

 function onWheel(event)  {
    event.preventDefault()
    virtualScroll.value += event.deltaY

    const scalePercent = Math.min(Math.max(virtualScroll.value, 0), 300) / 300
    const scaleValue = 1 + scalePercent

    // const scrollClamped = Math.min(Math.max(virtualScroll.value - 300, 0), MAX_BLUR_SCROLL)
    // blurAmount.value = (scrollClamped / MAX_BLUR_SCROLL) * 10 // flou commence après 300px de scroll

    if (scalableGroup.value) {
      const spans = scalableGroup.value.querySelectorAll('span')
      spans.forEach(span => {
        // console.log('ScaleValue:', scaleValue, 'Scroll:', virtualScroll.value)

        span.style.transform = `scale(${scaleValue})`
        span.style.transformOrigin = 'center'
      })
    }
      
      
    }

onMounted(() => {
  window.addEventListener('wheel', onWheel, { passive: true })
  document.body.style.overflow = 'hidden' // reset scroll
})

onUnmounted(() => {
  window.removeEventListener('wheel', onWheel, { passive: true })
  document.body.style.overflow = 'auto' // reset scroll
})


</script>


<style lang="scss" scoped>

@import "../css/global.scss";

.heroPage {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: $color-white;
  &__navbar {
    display: flex;
    justify-content: space-between;
    height: auto;
    padding: 33px;
    box-sizing: border-box;

    &__menu {
      display: flex;
      align-items: center;
    }

    &__logo {
      display: flex;
      align-items: center;
    }

    &__search {
      display: flex;
      align-items: center;
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &__box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 48px;
        
        color: $color-text-black;
        &__title {
            font-family: $font-tangerine;
            font-weight: 400;
            font-size: 28px;
            transition: filter 0.5s ease;

            & span {
                display: inline-block;
                transition: transform 0.1s ease-out;
            }
        }

        &__subtitle {
            font-family: $font-tangerine;
            font-weight: 400;
            font-size: 20px;
            & span {
                display: inline-block;
                transition: transform 0.1s ease-out;
            }
        }
    }
  }
}

.is-blurred {
  filter: blur(var(--blur-amount));
  transition: filter 0.1s ease-out;
}

.blurred {
  filter: blur(10px);
}

</style>
