<template>
    <div class="thirdPage">
        <div class="thirdPage__box1">
            <!-- <ModelViewer :page="3" class="thirdPage__box1__3dItem"/> -->
             <div class="thirdPage__box1__picBox">
                <img src="/assets/third-pic1.png"/>
             </div>
            <div class="thirdPage__box1__content">
                <div class="thirdPage__box1__content__title">
                    <span>The Spark: How a Korean TV Drama Reignited a Global Phenomenon</span>
                </div>
                <div class="thirdPage__box1__content__text">
                    <span> By 2007, Fujifilm's Instax line was on life support. The cameras, first introduced in 1998 with the Instax Mini 10, had failed to capture significant market share despite nearly a decade of availability. Sales had plummeted to their lowest point in 2004, with only 100,000 units sold worldwide—a figure so dismal that Fujifilm executives were seriously considering discontinuing the entire product line. The writing seemed to be on the wall: instant photography was a relic of the past, and even Fujifilm's engineering excellence couldn't resurrect a dead format.</span>
                </div>
                <div class="thirdPage__box1__content__text">
                    <span> The numbers tell a stark story. Film photography peaked around the year 2000, with billions of photographs captured on traditional film annually. Then came the precipitous fall. By the mid-2000s, digital camera sales were eclipsing film camera sales globally, and the decline accelerated with each passing year. The convenience was undeniable: digital photography offered instant gratification, unlimited shots, immediate deletion of mistakes, and the ability to share images across the globe in thirds.</span>
                </div>
                <div class="thirdPage__box1__content__frame"></div>
            </div>
        </div>
        <div class="thirdPage__box2">
            <div class="thirdPage__box2__part1">
                <div> "Coffee Prince" (커피프린스 1호점) premiered on MBC in July 2007, starring Gong Yoo and Yoon Eun-hye in a romantic comedy about a tomboyish girl who disguises herself as a boy to work at a coffee shop. The show was an immediate sensation in South Korea, particularly among younger viewers and teenagers who were drawn to its fresh take on gender roles and romantic relationships. But what made "Coffee Prince" truly significant for Fujifilm wasn't its compelling storyline or charismatic leads—it was a small, seemingly insignificant prop that appeared throughout the series.</div>
            </div>
            <div class="thirdPage__box2__part2">
                <div> The response was immediate and overwhelming. Young viewers in South Korea, many of whom had never seen an instant camera before, were captivated by this analog technology that seemed both retro and novel. To a generation raised on digital cameras and early smartphones, the Instax represented something entirely different—a way of taking photos that was deliberate, limited, and tangible. The demand for Instax cameras in South Korea skyrocketed almost overnight.</div>
            </div>
            <div class="thirdPage__box2__part3">
                <div>The Korean drama phenomenon taught Fujifilm a crucial lesson: their product wasn't just a camera—it was a cultural artifact that could tap into deep human desires for connection, memory, and authentic experience. The success in South Korea proved that instant photography could thrive in the digital age, not by competing with digital technology, but by offering something fundamentally different and irreplaceable.</div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import ModelViewer from './ModelViewer.vue';


</script>





<style lang="scss" scoped>
@import "../css/global.scss";

.thirdPage {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 172px 206px;
    box-sizing: border-box;
    background-color: $color-beige;
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

        &__picBox {
            transform: scale(0.9);
            transform-origin: center center;

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
