<script>
    import { onMount } from "svelte";

    onMount(() => {});

    let angle = 0;
    let currentX,
        currentY = 0;
    let rotatable;

    let addListener = (e) => {
        window.document.addEventListener("pointermove", move);
        window.document.addEventListener("touchmove", move);
    };

    let removeListener = () => {
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

            if (rotateLeft) angle = angle + 2;
            else angle = angle - 2;
            rotatable.style.transform = `rotateY(${angle}deg)`;
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
        transform: rotate(0);
        transition: all 0.1s;
    }

    .spin {
        transform-style: preserve-3d;
        animation: spin 4s ease-in-out .5s 1;
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
