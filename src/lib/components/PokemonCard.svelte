<script>
    import { onMount } from "svelte";

    onMount(() => {});

    export let shadow = false;
    export let data = undefined;

    import { createEventDispatcher } from "svelte";
    import LoadingIndicator from "./LoadingIndicator.svelte";

    const dispatch = createEventDispatcher();

    let click = async (e) => {
        dispatch("click", e);
    };

    let preload = (src) => {
        return new Promise(function (resolve) {
            let img = new Image();
            img.onload = resolve;
            img.src = src;
        });
    };
</script>

{#if data}
    <div on:click={click} id="card" class="card no-drag">
        <div class="card__face card--front">
            {#await preload(data.images.large)}
                <LoadingIndicator />
            {:then src}
                <img src={data.images.large} alt={data.name} />
            {:catch error}
                <p style="color: red">{error.message}</p>
            {/await}
        </div>
        <div class="card__face card--back">
            <img src="/images/cards/base1_back.png" alt={data.name} />
        </div>
    </div>
    {#if shadow}
        <div id="shadow" />
    {/if}
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

    .card {
        height: var(--height);
        width: var(--width);
        margin: calc(var(--height) * 0.02);
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
