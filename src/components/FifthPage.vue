<template>
    <div class="fifthPage">
        <div class="fifthPage__box1">
            <!-- <ModelViewer :page="5" class="fifthPage__box1__3dItem"/> -->
             <div class="fifthPage__box1__picBox">
                <img src="/assets/fifth-pic1.png"/>
             </div>
            <div class="fifthPage__box1__content">
                <div class="fifthPage__box1__content__title">
                    <span>90 Years of Innovation in Every Snapshot</span>
                </div>
                <div class="fifthPage__box1__content__text">
                    <span> When Fuji Photo Film Co., Ltd. was established on January 20, 1934, it represented more than just another business venture. The company was founded as part of a strategic Japanese government initiative to establish domestic photographic film manufacturing capabilities, reducing the nation's dependence on foreign suppliers. From its very inception, Fujifilm was built with a sense of national purpose and long-term thinking that would shape its corporate culture for generations to come.</span>
                </div>
                <div class="fifthPage__box1__content__text">
                    <span> The company inherited the split-off photographic film operations of Dainippon Celluloid Company Limited, but it quickly established its own identity through relentless focus on quality and innovation. The Ashigara Factory, which began operations in February 1934, wasn't just a manufacturing facility—it was a laboratory for perfecting the complex chemistry and precision engineering required for photographic film production.</span>
                </div>
                <div class="fifthPage__box1__content__text">
                    <span> This commitment to quality became evident in the reliability and consistency of Instax products. While competitors might focus on flashy features or aggressive pricing, Fujifilm concentrated on ensuring that every camera worked reliably and every photo developed properly. This reliability built trust with consumers and contributed to the strong word-of-mouth recommendations that fueled Instax's growth.</span>
                </div>
            </div>
        </div>
        <div class="fifthPage__box2">
        </div>
    </div>
</template>

<script setup>
// import ModelViewer from './ModelViewer.vue';


</script>





<style lang="scss" scoped>
@import "../css/global.scss";

.fifthPage {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 2% 10%;
    background-color: $color-green;
    color: $color-white;
    justify-content: space-around;
    line-height: 1.4;
        gap: 40px;

    &__box1 {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;

        &__3dItem {
            width: 500px;
            height: 500px;
            cursor: grab;
        }

        &__content {
            display: flex;
            width: 30%;
            flex-direction: column;
            gap: 40px;

            &__title {
                font-family: $font-tangerine;
                font-weight: 400;
                font-size: 40px;
                
                display: flex;
                flex-direction: column;
                
                span {
                    display: inline-block;
                    transition: transform 0.1s ease-out;
                }
            }
            
            &__text {
                font-family: $font-pp;
                font-weight: 400;
                font-size: 18px;
            }

            &__frame {
                border: 0.1px solid $color-red-dark;

            }
        }
    }

    &__box2 {
        display: flex;
        flex-direction: row;
        gap: 76px;

        &__part1, &__part2, &__part3 {
            font-family: $font-pp;
                font-weight: 400;
                font-size: 18px;
                width: 33%;
        }
    }
}

</style>
