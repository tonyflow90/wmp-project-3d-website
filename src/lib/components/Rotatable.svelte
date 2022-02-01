<script>
    import { onMount } from "svelte";

    onMount(() => {});

    let angle = 0;
    let currentX,
        currentY = 0;
    let rotatable;

    let addListener = (e) => {
        // console.log("add Listener");
        currentX = e.clientX;
        currentY = e.clientY;
        window.document.addEventListener("pointermove", move);
        window.document.addEventListener("touchmove", move);
    };

    let removeListener = () => {
        // console.log("remove Listener");
        (currentX = 0), (currentY = 0);
        window.document.removeEventListener("pointermove", move);
        window.document.removeEventListener("touchmove", move);
    };

    let move = (e) => {
        if (rotatable) {
            rotate(e);
        }
    };

    let rotate = (e) => {
        let x = e.clientX;
        let y = e.clientY;
        var st = window.getComputedStyle(rotatable, null);

        window.requestAnimationFrame(function () {
            let rotateLeft;

            if (currentX < x) rotateLeft = true;
            else rotateLeft = false;


            if (rotateLeft) angle = angle + 1;
            else angle = angle - 1;

            // // let skewAngle = angle % 90 * -.1;
            // let absoluteAngle = Math.abs(angle);

            // let h = 1;
            // if (absoluteAngle <= 90) {
            //     h=h*-1;
            // }
            // let skewAngle = (angle % 90) * 0.1 * h;
            // console.log("Angle: ", angle, "skewAngle: ", skewAngle);
            // rotatable.style.transform = `rotateY(${angle}deg) skew(0deg,${skewAngle}deg)`;

            rotatable.style.transform = `rotateY(${angle}deg)`;

            currentX = x;
            currentY = y;
        });
    };
</script>

<div
    on:mouseup|preventDefault={removeListener}
    on:touchend|preventDefault={removeListener}
    class="container"
    on:mouseleave|preventDefault={removeListener}
    on:touchstart|preventDefault={addListener}
    on:mousedown|preventDefault={addListener}
>
    <div bind:this={rotatable} id="rotatable" class="spin">
        <slot />
    </div>
</div>

<style>
    .container {
        cursor: grab;
    }

    #rotatable {
        cursor: grab;
        transform-style: preserve-3d;
        transition: all 0.1s;
    }

    .spin {
        perspective: 500px;
        transform-style: preserve-3d;
        animation: spin 4s ease-in-out 0.5s 1;
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
            transform: rotateX(0deg) rotateY(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotateX(0deg) rotateY(360deg);
        }
    }
</style>
