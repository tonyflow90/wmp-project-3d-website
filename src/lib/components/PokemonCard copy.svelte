<script>
    import { onMount } from "svelte";

    onMount(() => {
        addListener();
    });

    export let data = {};

    // let mouseOverContainer = document.getElementById("ex1");
    // let ex1Layer = document.getElementById("ex1-layer");

    // let card;
    // let ex1,ex1Layer;

    function transforms(x, y, el) {
        let box = el.getBoundingClientRect();
        let calcY = x - box.x - box.width / 2;
        let calcX = y - box.y - box.height / 2;

        debugger;
        calcY = 10;
        console.log(calcY, calcX);
        return "rotateY(" + calcY + "deg) ";
        // return "perspective(1000px) " + "   rotateY(" + calcY + "deg) ";
        // return "perspective(1000px) " + "   rotateY(" + calcY + "deg) " + "   rotateX(" + calcX + "deg) ";
    }

    function transformElement(el, xyEl) {
        el.style.transform = transforms.apply(null, xyEl);
    }

    let rotateAble = false;
    let down = (e) => {
        let el = e.currentTarget.querySelectorAll("#card")[0];
        rotateAble = el;
    };

    let up = (e) => {
        rotateAble = false;
        // debugger;
    };

    let addListener = () => {
        window.document.addEventListener("pointermove", logPointerPosition);
        window.document.addEventListener("pointerup", up);
    };

    let logPointerPosition = (e) => {
        if (rotateAble) {
            console.log("x position: ", e.x, e.clientX);
            console.log("y position: ", e.y, e.clientY);
            rotate(e, rotateAble);
        }
    };

    let getXY = (el) => {
        let y = parseInt(
            el.style.transform.replace("rotateY(", "").replace("deg)", "")
        );
        let x = parseInt(
            el.style.transform.replace("rotateX(", "").replace("deg)", "")
        );
        if (isNaN(x)) x = 0;
        if (isNaN(y)) y = 0;

        return [x, y];
    };

    let rotate = (e, el) => {
        let [x, y] = getXY(el);

        let xp = e.clientX - el.getBoundingClientRect().x > 0;
        let yp = e.clientY - el.getBoundingClientRect().y > 0;

        window.requestAnimationFrame(function () {
            let degY, degX;
            if (yp) degY = y - 2;
            else degY = y + 2;

            if (xp) degX = x - 1;
            else degX = x + 1;

            if (degY > 360) degY = 0;
            if (degX > 360) degX = 0;
            // rotate y
            el.style.transform = `rotateY(${degY}deg)`;
            // rotate x
            // el.style.transform = `rotateX(${degX}deg)`;
            // rotate x & y
            // el.style.transform = `rotateY(${degY}deg) rotateX(${degX}deg)`;
        });
    };
</script>

<!-- <div class="container" on:pointerdown={down} > -->
<div class="container" >
    <div id="card" class="card no-drag">
        <div class="card__face card--front">
            <img src={data.images.large} alt={data.name} />
        </div>
        <div class="card__face card--back">
            <img src='./images/cards/base1_back.png' alt={data.name} />
        </div>
    </div>
</div>

<style>
    :root {
        --size: 600px;
        --card-height: var(--size);
        --card-width: calc(var(--size) / 16 * 9);
    }

    .no-drag {
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    /* .container {
        width: var(--card-width);
        height: var(--card-height);
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 10000px;
        cursor: move;
    } */

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
        pointer-events: none;
    }

    .card__face {
        position: absolute;
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
        border-radius: 10px;
        overflow: hidden;
    }

    .card--front {
        z-index: 1;
    }

    .card--back {
        transform: rotateY(180deg);
        z-index: 1;
    }
</style>
