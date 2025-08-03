<template>
    <div class="secondPage">
        <div class="secondPage__box1">
            <!-- <ModelViewer :page="2" class="secondPage__box1__3dItem"/> -->
            <div class="secondPage__box1__picBox">
                <img src="/assets/second-pic1.png"/>
             </div>
            <div class="secondPage__box1__content">
                <div class="secondPage__box1__content__title">
                    <span>The Digital Tsunami and the Fading Polaroid</span>
                </div>
                <div class="secondPage__box1__content__text">
                    <span> To understand the magnitude of Fujifilm's achievement, we must first grasp the seismic shift that rocked the photography industry in the early 2000s. The digital revolution wasn't merely a technological upgrade—it was a complete reimagining of how humans capture, store, and share visual memories. The transformation was swift, merciless, and seemingly absolute.</span>
                </div>
                <div class="secondPage__box1__content__text">
                    <span> The numbers tell a stark story. Film photography peaked around the year 2000, with billions of photographs captured on traditional film annually. Then came the precipitous fall. By the mid-2000s, digital camera sales were eclipsing film camera sales globally, and the decline accelerated with each passing year. The convenience was undeniable: digital photography offered instant gratification, unlimited shots, immediate deletion of mistakes, and the ability to share images across the globe in seconds.</span>
                </div>
                <div class="secondPage__box1__content__frame"></div>
            </div>
        </div>
        <div class="secondPage__box2">
            <div class="secondPage__box2__part1">
                <div> For companies built on the foundation of film manufacturing, this shift represented an existential crisis. Kodak, once synonymous with photography itself, would eventually file for bankruptcy in 2012. But perhaps no company's fall was more symbolic of the analog era's end than that of Polaroid Corporation.</div>
            </div>
            <div class="secondPage__box2__part2">
                <div> Polaroid had been the undisputed king of instant photography since Edwin Land's revolutionary invention in the 1940s. The company's instant cameras and film had captured some of the most intimate moments of the 20th century—from family gatherings to artistic expressions by photographers like Andy Warhol. The distinctive white-bordered Polaroid print had become an icon of spontaneous creativity and authentic memory-making.</div>
            </div>
            <div class="secondPage__box2__part3">
                <div>Yet by the 1990s, Polaroid was already struggling. The company had become complacent, failing to innovate meaningfully while digital photography emerged as a formidable threat. The lengthy legal battles with Kodak over instant photography patents in the 1980s and 1990s had drained resources and stifled creativity precisely when the company needed to be most agile and forward-thinking.</div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import ModelViewer from './ModelViewer.vue';


</script>





<style lang="scss" scoped>
@import "../css/global.scss";

.secondPage {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 172px 206px;
    box-sizing: border-box;
    background-color: $color-gray;
    color: $color-red-dark;
    justify-content: space-around;
    line-height: 1.4;
        gap: 40px;

    &__box1 {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: flex-end;
        gap: 17%;

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
