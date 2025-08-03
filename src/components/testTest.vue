<template>
  <div
    class="firstPage"
    :style="{
      opacity: opacity,
      filter: `blur(${blur}px)`,
    }"
  >
    <div class="firstPage__box1">
      <ModelViewer :page="1" />
      <div class="firstPage__box1__contentBox">
        <div class="firstPage__box1__contentBox__part1">
          <div>
            This remarkable transformation didn't happen<br />
            through traditional marketing campaigns or<br />
            technological breakthroughs. Instead, it<br />
            emerged from an unexpected source: South<br />
            Korean television dramas that introduced a<br />
            new generation to the magic of instant<br />
            photography. What followed was a global<br />
            phenomenon that proved a fundamental truth—in<br />
            our increasingly digital world, the desire to<br />
            hold a memory in our hands has become more<br />
            precious than ever.
          </div>
        </div>
        <div class="firstPage__box1__contentBox__part2">
          <div>
            The Fujifilm story challenges everything we<br />
            thought we knew about technological progress<br />
            and consumer behavior. It demonstrates that<br />
            true innovation isn't always about moving<br />
            forward—sometimes it's about understanding<br />
            what we've left behind and why it still matters. In<br />
            an age of ephemeral digital content and<br />
            endless scrolling, Fujifilm proved that some<br />
            experiences are better off-screen, and some<br />
            moments deserve to exist in the physical world.
          </div>
        </div>
      </div>
    </div>

    <div class="firstPage__box2">
      <div class="firstPage__box2__content">
        <div class="firstPage__box2__content__title">
          <span
            >Instant Memories,<br />
            Lasting Impact:
          </span>
          <span>
            How Fujifilm Saved the <br />
            Physical Photograph</span
          >
        </div>
        
        <div class="firstPage__box2__content__text1">
          <span>
            In the early 2000s, the photography world<br />
            witnessed what seemed like an irreversible<br />
            transformation. Digital cameras were rapidly<br />
            replacing film, and the very concept of physical<br />
            photographs appeared destined for<br />
            obsolescence. Industry giants crumbled under<br />
            the weight of technological change, with<br />
            Polaroid—the original pioneer of instant<br />
            photography—filing for bankruptcy in 2001 and<br />
            ceasing film production entirely by 2008. The<br />
            message was clear: in a world of infinite digital<br />
            storage and instant sharing, there was no place<br />
            for the tangible, finite nature of analog<br />
            photography.
          </span>
        </div>
        <div class="firstPage__box2__content__frame"></div>

        <div class="firstPage__box2__content__text2">
          <p>
            This is the story of how a 90-year-old Japanese<br />
            company turned the photography industry's<br />
            greatest disruption into its most unexpected<br />
            opportunity, and in doing so, saved the physical<br />
            photograph for a new generation.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ModelViewer from "./ModelViewer.vue";
import { defineProps, computed } from "vue";

const props = defineProps({
  scrollPosition: Number,
});

console.log(props.scrollPosition);

const opacity = computed(() => {
  if (props.scrollPosition < 200) return 0;
  if (props.scrollPosition > 600) return 1;
  return (props.scrollPosition - 200) / 400;
});

const blur = computed(() => {
  const y = Math.min(Math.max(0, props.scrollPosition - 300), 300);
  return 10 - (y / 300) * 10; // blur: 10px -> 0px
});
</script>

<style lang="scss" scoped>
@import "../css/global.scss";

.firstPage {
  display: flex;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 2% 10%;
  background-color: $color-red-dark;
  justify-content: space-around;
  align-items: center;
  line-height: 1.4;

  &__box1 {
    display: flex;
        flex-direction: column;
    width: 100%;
    width: 80%;
    justify-content: space-between;

    &__3dItem {
      width: 800px; // à adapter à 'lobjet 3D'
      cursor: grab;
      display: flex;
      justify-content: center;
    }

    &__contentBox {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      gap: 20px;

      &__part1,
      &__part2 {
        font-family: $font-pp;
        font-weight: 400;
        font-size: 18px;
        color: $color-pink;
      }
    }
  }

  &__box2 {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 118px;

    &__content {
      display: flex;
      flex-direction: column;
      gap: 25px;

      &__title {
        font-family: $font-tangerine;
        font-weight: 400;
        font-size: 40px;
        color: $color-pink;
        display: flex;
        flex-direction: column;

        span {
          display: inline-block;
          transition: transform 0.1s ease-out;
        }
      }

      &__text1 {
        font-family: $font-pp;
        font-weight: 400;
        font-size: 18px;
        color: $color-pink;
      }

      &__text2 {
        font-family: $font-pp;
        font-weight: 400;
        font-size: 18px;
        color: $color-pink;
      }

      &__frame {
        border: 0.1px solid $color-pink;
      }
    }
  }
}
</style>
