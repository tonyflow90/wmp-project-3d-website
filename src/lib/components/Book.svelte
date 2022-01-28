<script>
    import { onMount } from "svelte";

    onMount(() => {});

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let click = async (e) => {
        let el = e.currentTarget;
        toggleOpen(el)
        dispatch("click", el);
    };

    // let toggleScaled = async (e) => {
    //     let el = e;

    //     if (el.classList.contains("scaled")) {
    //         el.classList.remove("scaled");
    //     } else {
    //         el.classList.add("scaled");
    //     }

    //     debugger;
    //     // alert(id)
    // };

    let toggleOpen = async (e) => {
        let el = e;

        if (el.classList.contains("bk-bookdefault")) {
            el.classList.remove("bk-bookdefault");
            el.classList.add("bk-viewinside");
        } else {
            el.classList.remove("bk-viewinside");
            el.classList.add("bk-bookdefault");
        }
    };

</script>

<div class="container" on:click={click}>
    <div class="book">
        <div class="bk-book book-1 bk-bookdefault" >
            <div class="bk-front">
                <div class="bk-cover-back">
                    <slot name="cover-back" />
                </div>
                <div class="bk-cover">
                    <slot name="cover-front" />
                </div>
            </div>
            <div class="bk-page">
                <slot name="content" />
            </div>
            <!-- <div class="bk-page">
                <div class="bk-content bk-content-current">
                    <p>
                        Red snapper Kafue pike fangtooth humums slipmouth,
                        salmon cutlassfish; swallower European perch mola mola
                        sunfish, threadfin bream. Billfish hog sucker
                        trout-perch lenok orbicular velvetfish. Delta smelt
                        striped bass, medusafish dragon goby starry flounder
                        cuchia round whitefish northern anchovy spadefish
                        merluccid hake cat shark Black pickerel. Pacific cod.
                    </p>
                </div>
                <div class="bk-content">
                    <p>
                        Whale catfish leatherjacket deep sea anglerfish
                        grenadier sawfish pompano dolphinfish carp large-eye
                        bream, squeaker amago. Sandroller; rough scad, tiger
                        shovelnose catfish snubnose parasitic eel? Black bass
                        soldierfish duckbill--Rattail Atlantic saury Blind shark
                        California halibut; false trevally warty angler!
                    </p>
                </div>
                <div class="bk-content">
                    <p>
                        Trahira giant wels cutlassfish snapper koi blackchin
                        mummichog mustard eel rock bass whiff murray cod.
                        Bigmouth buffalo ling cod giant wels, sauger pink
                        salmon. Clingfish luderick treefish flatfish Cherubfish
                        oldwife Indian mul gizzard shad hagfish zebra danio.
                        Butterfly ray lizardfish ponyfish muskellunge
                        Long-finned sand diver mullet swordfish limia ghost carp
                        filefish.
                    </p>
                </div>
            </div> -->
            <div class="bk-back">
                <slot name="back" />
            </div>

            <div class="bk-right">
                <slot name="side-right" />
            </div>

            <div class="bk-left">
                <slot name="side-left" />
            </div>
            <div class="bk-top">
                <slot name="side-top" />
            </div>

            <div class="bk-bottom">
                <slot name="side-bottom" />
            </div>
        </div>
    </div>
</div>

<style>
    :root {
        --calc-size-width: calc(var(--size) / 3 * 2);
        --height: var(--size, 400px);
        --width: var(--calc-size-width, 300px);
        --bg-color: grey;
    }

    .container {
        position: relative;
        margin: 10px;
        height: var(--height);
        width: var(--width);
    }

    .book {
        position: relative;
        height: var(--height);
        width: var(--width);
        float: left;
        z-index: 1;
        margin: 0px 50px 40px 0;
        -webkit-perspective: 1800px;
        perspective: 1800px;
    }

    .bk-book {
        position: absolute;
        height: var(--height);
        width: var(--width);
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transition: -webkit-transform 0.5s;
        transition: transform 0.5s;
    }

    .container:hover {
        z-index: 10;
    }

    .container .book .bk-book.bk-bookdefault:hover {
        -webkit-transform: rotate3d(0, 1, 0, 35deg);
        transform: rotate3d(0, 1, 0, 35deg) scale3d(1.2, 1.2, 1.2);
    }

    .container .book .bk-book > div,
    .container .book .bk-front > div {
        display: block;
        position: absolute;
    }

    .container .book .bk-front {
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform-origin: 0% 50%;
        transform-origin: 0% 50%;
        -webkit-transition: -webkit-transform 0.5s;
        transition: transform 0.5s;
        -webkit-transform: translate3d(0, 0, 20px);
        transform: translate3d(0, 0, 20px);
        z-index: 10;
    }

    .container .book .bk-front > div {
        z-index: 1;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }

    .container .book .bk-page {
        -webkit-transform: translate3d(0, 0, 19px);
        transform: translate3d(0, 0, 19px);
        display: none;
        height: calc(var(--height)-10px);
        width: calc(var(--width)-5px);
        top: 5px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        z-index: 9;
    }

    .container .book .bk-front,
    .container .book .bk-back,
    .container .book .bk-front > div {
        height: var(--height);
        width: var(--width);
    }

    .container .book .bk-left,
    .container .book .bk-right {
        width: 40px;
        left: -20px;
    }

    .container .book .bk-top,
    .container .book .bk-bottom {
        width: calc(var(--width)-5px);
        height: calc(var(--height) / 10);
        top: -15px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .container .book .bk-back {
        -webkit-transform: rotate3d(0, 1, 0, -180deg) translate3d(0, 0, 20px);
        transform: rotate3d(0, 1, 0, -180deg) translate3d(0, 0, 20px);
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
        border-radius: 3px 0 0 3px;
    }

    .container .book .bk-cover-back {
        background-color: #000;
        -webkit-transform: rotate3d(0, 1, 0, -179deg);
        transform: rotate3d(0, 1, 0, -179deg);
    }

    .container .book .bk-right {
        height: calc(var(--height)-10px);
        top: 5px;
        -webkit-transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 295px);
        -moz-transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 295px);
        transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 295px);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .container .book .bk-left {
        height: var(--height);
        -webkit-transform: rotate3d(0, 1, 0, -90deg);
        transform: rotate3d(0, 1, 0, -90deg);
    }

    .container .book .bk-top {
        -webkit-transform: rotate3d(1, 0, 0, 90deg);
        transform: rotate3d(1, 0, 0, 90deg);
    }

    .container .book .bk-bottom {
        -webkit-transform: rotate3d(1, 0, 0, -90deg) translate3d(0, 0, 390px);
        transform: rotate3d(1, 0, 0, -90deg) translate3d(0, 0, 390px);
    }

    /* Transform classes */
    /* .container .book .bk-viewinside .bk-front {
        transform: scale(1000px);
    }

    .container .book .bk-viewinside .bk-front {
        -webkit-transform: translate3d(0, 0, 20px) rotate3d(0, 1, 0, -160deg);
        transform: translate3d(0, 0, 20px) rotate3d(0, 1, 0, -160deg);
    }

    .container .book .bk-book.bk-viewinside {
        -webkit-transform: translate3d(0, 0, 150px) rotate3d(0, 1, 0, 0deg);
        transform: translate3d(0, 0, 150px) rotate3d(0, 1, 0, 0deg);
    }

    .container .book .bk-book.bk-viewback {
        -webkit-transform: translate3d(0, 0, 0px) rotate3d(0, 1, 0, 180deg);
        transform: translate3d(0, 0, 0px) rotate3d(0, 1, 0, 180deg);
    } */

    /* Main colors and content */

    .container .book .bk-page,
    .container .book .bk-right,
    .container .book .bk-top,
    .container .book .bk-bottom {
        background-color: #fff;
    }

    .container .book .bk-front > div {
        border-radius: 0 3px 3px 0;
        box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);
    }

    .container .book .bk-front:after {
        content: "";
        position: absolute;
        top: 1px;
        bottom: 1px;
        left: -1px;
        width: 1px;
    }

    .container .book .bk-cover:after,
    .container .book .bk-back:after {
        content: "";
        position: absolute;
        top: 0;
        left: 10px;
        bottom: 0;
        width: 3px;
        background: rgba(0, 0, 0, 0.06);
        box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);
    }

    .container .book .bk-back:after {
        left: auto;
        right: 10px;
    }


    /* .bk-content {
        position: absolute;
        top: 30px;
        left: 20px;
        bottom: 20px;
        right: 20px;
        padding: 30px;
        overflow: hidden;
        background: #fff;
        opacity: 0;
        pointer-events: none;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: opacity 0.3s ease-in-out;
        transition: opacity 0.3s ease-in-out;
        cursor: default;
    }

    .bk-content-current {
        opacity: 1;
        pointer-events: auto;
    }

    .bk-content p {
        padding: 0 0 10px;
        -webkit-font-smoothing: antialiased;
        color: #000;
        font-size: 13px;
        line-height: 20px;
        text-align: justify;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    } */

    /* .bk-page nav {
        display: block;
        text-align: center;
        margin-top: 20px;
        position: relative;
        z-index: 100;
        cursor: pointer;
    }

    .bk-page nav span {
        display: inline-block;
        width: 20px;
        height: 20px;
        color: #aaa;
        background: #f0f0f0;
        border-radius: 50%;
    } */

    /* Individual style & artwork */

    .book-1 .bk-front > div,
    .book-1 .bk-back,
    .book-1 .bk-left,
    .book-1 .bk-front:after {
        background-color: var(--bg-color, #ff924a);
    }

    .bk-cover {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 15px;
    }

    /* Fallbacks */

    .no-csstransforms3d .container .book .bk-book > div,
    .no-csstransforms3d .container .book .bk-book .bk-cover-back {
        display: none;
    }

    .no-csstransforms3d .container .book .bk-book > div.bk-front {
        display: block;
    }
</style>
