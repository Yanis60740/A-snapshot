<template>
  <div class="footerPage">
    <div class="footerPage__part1">
      <div class="footerPage__part1__title">
        Snapshot Magazine
      </div>
      <div class="footerPage__part1__subtitle">
        “True innovation is born from resilience and a deep understanding of human connection.”
      </div>
    </div>
    <div class="footerPage__part2"></div>
    <div class="footerPage__part3">
      <div class="footerPage__part3__box1">
        <div class="footerPage__part3__box1__content">Privacy Policy</div>
        <div class="footerPage__part3__box1__content">Terms of Service</div>
        <div class="footerPage__part3__box1__content">Cookies Settings</div>
      </div>
      <div class="footerPage__part3__box2">
        <div class="footerPage__part3__box2__content">© 2025 Snapshot Magazine. All rights reserved.</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../css/global.scss";

.footerPage{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 570px;
    box-sizing: border-box;
    padding: 172px 206px 2%;
    background-color: $color-white;
    color: $color-text-black;
    justify-content: space-between;

    &__part1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;

        &__title {
            font-family: $font-tangerine;
            font-weight: 400;
            font-size: 112px;
        }

        &__subtitle {
            font-family: $font-tangerine;
            font-weight: 400;
            font-size: 30px;
        }
    }
    &__part2 {
        border: 0.1px solid $color-gray;
    }

    &__part3 {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__box1 {
            display: flex;
            gap: 22px;

            &__content {
                font-family: $font-pp;
                font-weight: 400;
                font-size: 20px;
                cursor: pointer;
                text-decoration: underline;
            }
        }

        &__box2 {
            display: flex;

            &__content {
                font-family: $font-pp;
                font-weight: 400;
                font-size: 20px;
            }
        }
    }
}
</style>
