<script>
    import { onMount } from "svelte";

    onMount(() => {});

    export let data = {};

    // let mouseOverContainer = document.getElementById("ex1");
    // let ex1Layer = document.getElementById("ex1-layer");

    // let card;
    // let ex1,ex1Layer;

    function transforms(x, y, el) {
        let box = el.getBoundingClientRect();
        let calcY = x - box.x - box.width / 2;
        let calcX = y - box.y - box.height / 2;

        console.log(calcY, calcX)
        return "perspective(1000px) " + "   rotateX(" + calcX + "deg) ";
        // return "perspective(1000px) " + "   rotateY(" + calcY + "deg) ";
        // return "perspective(1000px) " + "   rotateY(" + calcY + "deg) " + "   rotateX(" + calcX + "deg) ";
    }

    function transformElement(el, xyEl) {
        el.style.transform = transforms.apply(null, xyEl);
    }

    let rotateAble = false;
    let down = (e) => {
        rotateAble = true;
    };

    let up = (e) => {
        debugger;
        rotateAble = false;
    };

    let rotate = (e) => {
        if (rotateAble) {

            let card1 = e.target.parentElement
            let xy = [e.clientX, e.clientY];
            let position = xy.concat([card1]);

            window.requestAnimationFrame(function () {
                transformElement(card1, position);
            });
        }
        // let mouseX = e.pageX / getWidth();
        // let mouseY = e.pageY / getHeight();

        // let card = e.target.parentElement;

        // card.style.transform = "rotate3d(1, 1, 1, 45deg)";
    };
</script>

<!-- <div
    class="container"
    on:pointerdown={down}
    on:pointerup={up}
    on:pointermove={rotate}
>
    <div id="ex1Layer" class="box" />
    <div class="text">rotateY = mouseX - box.x - (box.width / 2)</div>
</div> -->

<div
    class="container"
    on:pointerdown={down}
    on:pointerup={up}
    on:pointermove={rotate}
>
    <div id="card" class="card">
        <div class="card__face card--front">
            <img src={data.images.large} alt={data.name} />
        </div>
        <!-- <div class="card__face card--back">back</div> -->
    </div>
</div>

<style>
    :root {
        --card-height: 400px;
        --card-width: 200px;
    }

    .container {
        width: var(--card-width);
        height: var(--card-height);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card {
        width: var(--card-width);
        height: var(--card-height);
        position: relative;
        transition: transform 1s;
        transform-style: preserve-3d;
    }

    img {
        width: var(--card-width);
        height: var(--card-height);
    }

    .card__face {
        position: absolute;
        height: 100%;
        width: 100%;
        /* backface-visibility: hidden; */
    }

    .card--front {
        background: red;
        z-index: 1;
    }

    .card--back {
        background: blue;
        transform: rotateY(180deg);
        z-index: 1;
    }
</style>
