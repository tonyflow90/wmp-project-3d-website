<script>
    import { onMount } from "svelte";

    onMount(() => {});

    export let cardSize = "600px";
    export let data = {};

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let click = async (e) => {
        dispatch("click", data);
    };
</script>

<!-- {#if data != null} -->
    <div
        on:click={click}
        id="card"
        class="card no-drag"
        style="--card-size: {cardSize}"
    >
        <div class="card__face card--front">
            <img src={data.images.large} alt={data.name} />
        </div>
        <div class="card__face card--back">
            <img src="./images/cards/base1_back.png" alt={data.name} />
        </div>
    </div>
    <div id="shadow" style="--card-size: {cardSize}" />
<!-- {/if} -->

<style>
    :root {
        --card-height: var(--card-size);
        --card-width: calc(var(--card-size) / 16 * 9);
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
        height: var(--card-size);
        width: calc(var(--card-size) / 16 * 9);
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 10000px;
        cursor: move;
    }

    .card {
        height: var(--card-size);
        width: calc(var(--card-size) / 16 * 9);
        position: relative;
        transition: transform 1s;
        transform-style: preserve-3d;
    }

    #shadow {
        content: "";
        top: calc(var(--card-size));
        height: calc(var(--card-size) / 2);
        width: calc(var(--card-size) / 16 * 9);
        transform: rotateX(-75deg) rotateZ(15deg);
        position: fixed;
        z-index: -1;
        background-color: rgb(0, 0, 0);
        border-radius: calc(var(--card-size) / 4);
        opacity: 0.05;
    }

    img {
        height: var(--card-size);
        width: calc(var(--card-size) / 16 * 9);
        /* pointer-events: none; */
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
