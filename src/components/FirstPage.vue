<template>
    <div class="firstPage">
        <div class="firstPage__box1">
            <div class="firstPage__box1__3dItem">
            </div>
            <div class="firstPage__box1__content">
                <div class="firstPage__box1__content__title">
                    <span>Instant Memories,<br>
                        Lasting Impact:<br>
                        How Fujifilm Saved the <br>
                        Physical Photograph</span>
                </div>
                <div class="firstPage__box1__content__text">
                    <span> In the early 2000s, the photography world<br> 
                        witnessed what seemed like an irreversible<br> 
                        transformation. Digital cameras were rapidly<br> 
                        replacing film, and the very concept of physical<br>
                        photographs appeared destined for<br>
                        obsolescence. Industry giants crumbled under<br>
                        the weight of technological change, with<br>
                        Polaroid—the original pioneer of instant<br>
                        photography—filing for bankruptcy in 2001 and<br>
                        ceasing film production entirely by 2008. The<br>
                        message was clear: in a world of infinite digital<br>
                        storage and instant sharing, there was no place<br>
                        for the tangible, finite nature of analog<br>
                        photography. </span>
                </div>
            </div>
        </div>
        <div class="firstPage__box2">
            <div class="firstPage__box2__part1">
                <div> This remarkable transformation didn't happen<br> 
                    through traditional marketing campaigns or technological breakthroughs. Instead, it emerged from an unexpected source: South Korean television dramas that introduced a new generation to the magic of instant photography. What followed was a global phenomenon that proved a fundamental truth—in our increasingly digital world, the desire to hold a memory in our hands has become more precious than ever.</div>
            </div>
            <div class="firstPage__box2__part2">
                <div> The Fujifilm story challenges everything we thought we knew about technological progress and consumer behavior. It demonstrates that true innovation isn't always about moving forward—sometimes it's about understanding what we've left behind and why it still matters. In an age of ephemeral digital content and endless scrolling, Fujifilm proved that some experiences are better off-screen, and some moments deserve to exist in the physical world.</div>
            </div>
            <div class="firstPage__box2__part3">
                <div>This is the story of how a 90-year-old Japanese company turned the photography industry's greatest disruption into its most unexpected opportunity, and in doing so, saved the physical photograph for a new generation.</div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>


<style lang="scss" scoped>
@import "../css/global.scss";

.firstPage {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 4% 10%;
    background-color: $color-red-dark;
    justify-content: space-around;
        align-items: center;

    &__box1 {
        display: flex;
        flex-direction: row;
        width: 60%;
        // height: 50%;
        justify-content: space-around;

        &__3dItem {
            width: 500px;  // à adapter à 'lobjet 3D'
            height: 1200px;
            // background-color: $color-pink;
        }

        &__content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 500px;

            &__title {
                font-family: $font-tangerine;
                font-weight: 400;
                font-size: 40px;
                color: $color-pink;

                span {
                    display: inline-block;
                    transition: transform 0.1s ease-out;
                }
            }
            
            &__text {
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
        height: 50%;
        // background-color: black;
        &__part1, &__part2, &__part3 {
            font-family: $font-pp;
                font-weight: 400;
                font-size: 18px;
                color: $color-pink;
        }
    }
}

</style>
