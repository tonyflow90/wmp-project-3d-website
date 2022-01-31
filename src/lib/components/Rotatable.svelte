<script>
    import { onMount } from "svelte";

    onMount(() => {});

    let angle = 0;
    let currentX,
        currentY = 0;
    let rotatable;

    let addListener = (e) => {
        console.log("add Listener");
        currentX = e.clientX;
        currentY = e.clientY;
        window.document.addEventListener("pointermove", move);
        window.document.addEventListener("touchmove", move);
    };

    let removeListener = () => {
        console.log("remove Listener");
        currentX, (currentY = 0);
        window.document.removeEventListener("pointermove", move);
        window.document.removeEventListener("touchmove", move);
    };

    let move = (e) => {
        let clientX = e.clientX,
            clientY = e.clientY;
        if (rotatable) {
            rotate(e);
            // let { x, y } = rotatable.getBoundingClientRect();
            // debugger;
            // console.log(e);
        }
    };

    let rotate = (e) => {
        let { x, y } = rotatable.getBoundingClientRect();
        // let { degX, degY } = getAngleXY();
        // console.log(degY);
        var st = window.getComputedStyle(rotatable, null);

        window.requestAnimationFrame(function () {
            let rotateLeft;
            if (currentX < x) rotateLeft = true;
            else rotateLeft = false;

            console.log("clientX < x = ", rotateLeft);

            if (rotateLeft) angle = angle + 0.51;
            else angle = angle - 0.51;
            // let degY, degX;
            // if (yp) degY = y - 2;
            // else degY = y + 2;
            // if (xp) degX = x - 1;
            // else degX = x + 1;
            // if (degY > 360) degY = 0;
            // if (degX > 360) degX = 0;
            // rotate y
            rotatable.style.transform = `rotateY(${angle}deg)`;
            // console.log(angle);
            // debugger;
            // rotate x
            // el.style.transform = `rotateX(${degX}deg)`;
            // rotate x & y
            // el.style.transform = `rotateY(${degY}deg) rotateX(${degX}deg)`;
        });
    };

    let getAngleXY = () => {
        let y = parseInt(
            rotatable.style.transform
                .replace("rotateY(", "")
                .replace("deg)", "")
        );
        debugger;
        let x = parseInt(
            rotatable.style.transform
                .replace("rotateX(", "")
                .replace("deg)", "")
        );
        if (isNaN(x)) x = 0;
        if (isNaN(y)) y = 0;
        return { degX: x, degY: y };
    };

    let rotate2 = (a) => {
        // debugger;
        let angle = a.currentTarget.value;
        // window.requestAnimationFrame(function () {
        rotatable.style.transform = `rotateY(${angle}deg)`;
        // console.log(angle);
        // debugger;
        // rotate x
        // el.style.transform = `rotateX(${degX}deg)`;
        // rotate x & y
        // el.style.transform = `rotateY(${degY}deg) rotateX(${degX}deg)`;
        // });
    };
    // let angle2 = 180;
    import { writable } from "svelte/store";

    const angle2 = writable(0);
    angle2.set(0);
</script>

<!-- <progress value={$progress}></progress> -->

<svelte:body
    on:mouseup|preventDefault={removeListener}
    on:touchend|preventDefault={removeListener} />

<!-- <div class="slidecontainer">
    <input
        on:change={rotate2}
        type="range"
        step="2"
        min="0"
        max="360"
        value={$angle2}
        class="slider"
        id="myRange"
    />
</div> -->
<div
    bind:this={rotatable}
    class="container"
    on:touchstart|preventDefault={addListener}
    on:mousedown|preventDefault={addListener}
>
    <slot />
</div>

<style>
    .container {
        cursor: grab;
        transform-style: preserve-3d;
        transform: rotate(0);
        transition: all .1s;
    }

    .spin {
        transform-style: preserve-3d;
        animation: spin 4s linear infinite;
    }

    @-moz-keyframes spin {
        100% {
            -moz-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
            /* transform: translateZ(0px) rotate3d(1, 0, 0, -30deg); */
            transform: rotateX(-10deg) rotateY(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            /* transform: translateZ(0px) rotate3d(1, 0, 0, -30deg); */
            transform: rotateX(-10deg) rotateY(360deg);
        }
    }
</style>
