<script>
    import { onMount } from "svelte";

    import { fly, fade } from "svelte/transition";

    import { base } from "$app/paths";

    import Error from "$lib/components/Error.svelte";

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
                <img
                    in:fade={{
                        duration: 500,
                    }}
                    src={data.images.large}
                    alt={data.name}
                />
            {:catch error}
                <Error message={error.message} />
                <!-- <p style="color: red">{error.message}</p> -->
            {/await}
        </div>
        <div class="card__face card--back">
            <img src="{base}/images/cards/base1_back.png" alt={data.name} />
        </div>
        <div class="card__side card--right" />
        <div class="card__side card--left" />
        <div class="card__side card--top" />
        <div class="card__side card--bottom " />
    </div>
    {#if shadow}
        <div id="shadow" />
    {/if}
{/if}

<style>
    :root {
        --calc-size-width: calc(var(--size) / 16 * 9);
        --card-size-y: var(--size, 400px);
        --card-size-x: var(--calc-size-width, 300px);
        --card-size-z: 2px;
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
        height: var(--card-size-y);
        width: var(--card-size-x);
        margin: calc(var(--card-size-y) * 0.02);
        position: relative;
        transition: transform 1s;
        transform-style: preserve-3d;
        /* transform: rotateX(45deg) */
    }

    img {
        height: var(--card-size-y);
        width: var(--card-size-x);
    }

    .card__face {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
        border-radius: 10px;
        background-color: lightgray;
        overflow: hidden;
    }

    .card--front {
        z-index: 1;
    }

    .card--back {
        transform: rotateY(180deg) translateZ(calc(var(--card-size-z)));
    }

    .card__side {
        position: absolute;
        height: 100%;
        width: var(--card-size-z);
        /* backface-visibility: hidden;
        border-radius: 10px; */
        background-color: gray;
        /* overflow: hidden; */
    }

    /* .card--left {
        background-color: green;
        transform: rotateY(90deg) translateZ(-20px);
    }

    .card--right {
        background-color: red;
        transform: rotateY(-90deg) translateZ(-20px);
    } */

    .card--right {
        width: var(--card-size-z);
        height: calc(var(--card-size-y) - 20px);
        transform: rotateY(90deg)
            translateZ(calc(var(--card-size-x) - var(--card-size-z) / 2))
            translateX(calc(var(--card-size-z) / 2)) translateY(calc(10px));
        /* transform: rotateY(90deg)
            translateZ(calc(var(--card-size-x) - var(--card-size-z) )); */
    }
    .card--left {
        width: var(--card-size-z);
        height: var(--card-size-y);
        transform: rotateY(-90deg) translateZ(calc(var(--card-size-z) / 2))
            translateX(calc(var(--card-size-z) / -2));
    }
    .card--top {
        width: var(--card-size-x);
        height: var(--card-size-z);
        transform: rotateX(90deg) translateZ(calc(var(--card-size-z) / 2))
            translateY(calc(var(--card-size-z) * -0.5));
    }
    .card--bottom {
        width: var(--card-size-x);
        height: var(--card-size-z);
        transform: rotateX(-90deg)
            translateZ(calc(var(--card-size-y) - var(--card-size-z) / 2))
            translateY(calc(var(--card-size-z) * 0.5));
    }
</style>
