<template>
    <div class="firstPage">
        <div class="firstPage__box1">
            <ModelViewer :page="1" class="firstPage__box1__3dItem"/>
            <div class="firstPage__box1__content">
                <div class="firstPage__box1__content__title">
                    <span>Instant Memories,
                        Lasting Impact:
                    </span>
                    <span>
                        How Fujifilm Saved the 
                        Physical Photograph</span>
                </div>
                <div class="firstPage__box1__content__text">
                    <span> In the early 2000s, the photography world
                        witnessed what seemed like an irreversible
                        transformation. Digital cameras were rapidly 
                        replacing film, and the very concept of physical
                        photographs appeared destined for
                        obsolescence. Industry giants crumbled under
                        the weight of technological change, with
                        Polaroid—the original pioneer of instant
                        photography—filing for bankruptcy in 2001 and
                        ceasing film production entirely by 2008. The
                        message was clear: in a world of infinite digital
                        storage and instant sharing, there was no place
                        for the tangible, finite nature of analog
                        photography. </span>
                </div>
                <div class="firstPage__box1__content__frame"></div>
            </div>
        </div>
        <div class="firstPage__box2">
            <div class="firstPage__box2__part1">
                <div> This remarkable transformation didn't happen
                    through traditional marketing campaigns or 
                    technological breakthroughs. Instead, it 
                    emerged from an unexpected source: South 
                    Korean television dramas that introduced a 
                    new generation to the magic of instant 
                    photography. What followed was a global 
                    phenomenon that proved a fundamental truth—in 
                    our increasingly digital world, the desire to 
                    hold a memory in our hands has become more 
                    precious than ever.</div>
            </div>
            <div class="firstPage__box2__part2">
                <div> The Fujifilm story challenges everything we 
                    thought we knew about technological progress 
                    and consumer behavior. It demonstrates that 
                    true innovation isn't always about moving 
                    forward—sometimes it's about understanding 
                    what we've left behind and why it still matters. In 
                    an age of ephemeral digital content and 
                    endless scrolling, Fujifilm proved that some 
                    experiences are better off-screen, and some 
                    moments deserve to exist in the physical world.</div>
            </div>
            <div class="firstPage__box2__part3">
                <p>This is the story of how a 90-year-old Japanese
                    company turned the photography industry's 
                    greatest disruption into its most unexpected 
                    opportunity, and in doing so, saved the physical 
                    photograph for a new generation.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import ModelViewer from './ModelViewer.vue';


</script>





<style lang="scss" scoped>
@import "../css/global.scss";

.firstPage {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 172px 206px;
    box-sizing: border-box;
    background-color: $color-red-dark;
    color: $color-pink;
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
                border: 0.1px solid $color-pink;

            }
        }
    }

    &__box2 {
        display: flex;
        flex-direction: row;
        // width: 100%;
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
