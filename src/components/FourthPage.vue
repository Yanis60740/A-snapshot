<template>
    <div class="fourthPage">
        <div class="fourthPage__box1">
            <!-- <ModelViewer :page="4" class="fourthPage__box1__3dItem"/> -->
            <div class="fourthPage__box1__picBox">
                <img src="/assets/fourth-pic1.png"/>
            </div>
            <div class="fourthPage__box1__content">
                <div class="fourthPage__box1__content__title">
                    <span>Democratizing the Moment: Why Instax Won the Hearts of Millions</span>
                </div>
                <div class="fourthPage__box1__content__text">
                    <span> The first and most immediate appeal was simplicity. In an era when digital cameras were becoming increasingly complex, with countless settings, modes, and post-processing options, the Instax offered refreshing straightforwardness. Point, shoot, wait. There were no menus to navigate, no files to manage, no editing decisions to make. The camera made the creative choices, leaving users free to focus on the moment itself rather than the technical aspects of capturing it.</span>
                </div>
                <div class="fourthPage__box1__content__text">
                    <span> The ritual of instant photography became as important as the final image. Users would gather around as the photo emerged from the camera, watching with anticipation as the image slowly developed before their eyes. This process, which took several minutes, created a shared experience that digital photography couldn't replicate. The waiting period built suspense and excitement, turning each photo into a small event rather than just another digital file.</span>
                </div>
                <div class="fourthPage__box1__content__frame"></div>
            </div>
        </div>
        <div class="fourthPage__box2">
            <div class="fourthPage__box2__part1">
                <div> The numbers reflected this growing enthusiasm. From the low point of 100,000 cameras sold in 2004, Instax sales began their remarkable ascent. By 2015, Fujifilm was selling 5 million Instax cameras annually—a 50-fold increase in just over a decade. The growth continued to accelerate, reaching 10 million cameras sold in 2019. By 2023, the Instax division was generating ¥150 billion ($960 million) in annual revenue, making it one of Fujifilm's most profitable business segments.</div>
            </div>
            <div class="fourthPage__box2__part2">
                <div> The success of Instax also sparked a broader revival of analog photography. Film camera sales began to recover, darkroom workshops experienced renewed interest, and a new generation of photographers discovered the joys of chemical processes and physical prints. Instax had proven that there was still a place for analog technology in the digital age—not as a replacement for digital photography, but as a complement to it.</div>
            </div>
            <div class="fourthPage__box2__part3">
                <div>The therapeutic aspects of instant photography also gained recognition. Mental health professionals noted that the mindful, present-focused nature of instant photography could serve as a form of meditation and stress relief. The physical act of creating and holding a photograph provided a grounding experience that digital photography couldn't match.</div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import ModelViewer from './ModelViewer.vue';


</script>





<style lang="scss" scoped>
@import "../css/global.scss";

.fourthPage {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 172px 206px;
    box-sizing: border-box;
    background-color: $color-lightGray;
    color: $color-red-dark;
    justify-content: space-around;
    line-height: 1.4;
        gap: 40px;

    &__box1 {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;

        &__picBox {
            transform: scale(0.8);
            transform-origin: center left;

            & img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
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
