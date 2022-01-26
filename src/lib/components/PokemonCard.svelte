<script>
    import { onMount } from "svelte";

    onMount(() => {});

    export let shadow = false;
    export let data = undefined;

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let click = async (e) => {
        dispatch("click", e);
    };
</script>

<div on:click={click} id="card" class="card no-drag">
    <div class="card__face card--front">
        <img src={data.images.large} alt={data.name} />
    </div>
    <div class="card__face card--back">
        <img src="/images/cards/base1_back.png" alt={data.name} />
    </div>
</div>
{#if shadow}
    <div id="shadow" />
{/if}

<style>
    :root {
        --calc-size-width: calc(var(--size) / 16 * 9);
        --height: var(--size, 400px);
        --width: var(--calc-size-width, 300px);
        --bg-color: grey;
    }

    .no-drag {
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
    .container {
        height: var(--height);
        width: var(--width);
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 10000px;
        cursor: move;
    }

    .card {
        height: var(--height);
        width: var(--width);
        padding: calc(var(--height) * 0.02);
        position: relative;
        transition: transform 1s;
        transform-style: preserve-3d;
    }

    #shadow {
        content: "";
        top: var(--height);
        height: calc(var(--height) / 2);
        width: var(--width);
        transform: rotateX(-75deg) rotateZ(15deg);
        position: fixed;
        z-index: -1;
        background-color: rgb(0, 0, 0);
        border-radius: calc(var(--height) / 4);
        opacity: 0.05;
    }

    img {
        height: var(--height);
        width: var(--width);
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
