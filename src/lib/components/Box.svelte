<script>
    import { onMount } from "svelte";

    onMount(() => {});
    export let lightenFront,
        lightenBack,
        lightenLeft,
        lightenRight,
        lightenTop,
        lightenBottom,
        darkenFront,
        darkenBack,
        darkenLeft,
        darkenRight,
        darkenTop,
        darkenBottom,
        spin = false;
</script>

<div class="scene">
    <div class="cube {spin ? 'spin' : ''}">
        <div
            class="cube__face cube__face--front {lightenFront
                ? 'lighten'
                : ''} {darkenFront ? 'darken' : ''}"
        >
            <slot />
        </div>
        <div
            class="cube__face cube__face--back {lightenBack
                ? 'lighten'
                : ''} {darkenBack ? 'darken' : ''}"
        >
            <slot name="back" />
        </div>
        <div
            class="cube__face cube__face--right {lightenRight
                ? 'lighten'
                : ''} {darkenRight ? 'darken' : ''}"
        >
            <slot name="right" />
        </div>
        <div
            class="cube__face cube__face--left {lightenLeft
                ? 'lighten'
                : ''} {darkenLeft ? 'darken' : ''}"
        >
            <slot name="left" />
        </div>
        <div
            class="cube__face cube__face--top {lightenTop
                ? 'lighten'
                : ''} {darkenTop ? 'darken' : ''}"
        >
            <slot name="top" />
        </div>
        <div
            class="cube__face cube__face--bottom {lightenBottom
                ? 'lighten'
                : ''} {darkenBottom ? 'darken' : ''}"
        >
            <slot name="bottom" />
        </div>
    </div>
</div>

<style>
    :root {
        --size-x: 200px;
        --size-y: 200px;
        --size-z: 200px;
        --hue: 265;
        --saturation: 64%;
        --light: 44%;
        --transform: translateZ(0px) rotate3d(1, -3, 0, -30deg);
        --border: 2px solid black;
    }

    * {
        box-sizing: border-box;
    }
    div {
        --color: hsl(var(--hue), var(--saturation), var(--light));
        --color-lighten: hsl(
            var(--hue),
            var(--saturation),
            calc(var(--light) + 10%)
        );
        --color-darken: hsl(
            var(--hue),
            var(--saturation),
            calc(var(--light) - 10%)
        );
    }

    .scene {
        /* width: calc(var(--size-x)*1.3);
        height: calc(var(--size-y)*1.3); */
        /* display: flex;
        align-items: center;
        justify-content: center; */
        /* perspective: 10000px; */
    }

    .cube {
        width: var(--size-x);
        height: var(--size-y);
        position: relative;
        transform-style: preserve-3d;
        transform: var(--transform);
        transition: transform 1s;
    }

    .cube__face {
        position: absolute;
        background: var(--color);
        border: var(--border);
        text-align: center;
    }

    .lighten {
        background: var(--color-lighten);
    }

    .darken {
        background: var(--color-darken);
    }

    .cube__face--front {
        width: var(--size-x);
        height: var(--size-y);
        transform: rotateY(0deg) translateZ(calc(var(--size-z) / 2));
    }
    .cube__face--back {
        width: var(--size-x);
        height: var(--size-y);
        transform: rotateY(180deg) translateZ(calc(var(--size-z) / 2));
    }
    .cube__face--right {
        width: var(--size-z);
        height: var(--size-y);
        transform: rotateY(90deg)
            translateZ(calc(var(--size-x) - var(--size-z) / 2));
    }
    .cube__face--left {
        width: var(--size-z);
        height: var(--size-y);
        transform: rotateY(-90deg) translateZ(calc(var(--size-z) / 2));
    }
    .cube__face--top {
        width: var(--size-x);
        height: var(--size-z);
        transform: rotateX(90deg) translateZ(calc(var(--size-z) / 2));
    }
    .cube__face--bottom {
        width: var(--size-x);
        height: var(--size-z);
        transform: rotateX(-90deg)
            translateZ(calc(var(--size-y) - var(--size-z) / 2));
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
            transform: translateZ(0px) rotate3d(1, 0, 0, -30deg);
            transform: rotateX(-10deg) rotateY(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: translateZ(0px) rotate3d(1, 0, 0, -30deg);
            transform: rotateX(-10deg) rotateY(360deg);
        }
    }
</style>
