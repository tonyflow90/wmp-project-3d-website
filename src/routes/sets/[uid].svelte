<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { base } from "$app/paths";

    import "vanilla-tilt";

    import { sets, cards } from "$lib/stores.js";

    import PokemonCard from "$lib/components/PokemonCard.svelte";
    import Tiltable from "$lib/components/Tiltable.svelte";

    import pokemon from "$lib/pokemon.js";

    const setId = $page.params.uid;

    let set;

    onMount(async () => {
        set = loadSet();
    });

    let loadSet = async () => {
        return await pokemon.getSet(setId);
    };

    let loadCards = async () => {
        return pokemon.getAllCardsp(setId);
    };

    $: title = set ? `${set.name} Set` : "Set";

    let cardHeight = 600,
        cardWidth = cardHeight * (9 / 16);
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="grid">
    {#await loadCards()}
        <p>...waiting for set</p>
    {:then promises}
        {#each promises as item}
            {#await item}
                <p>...waiting for card</p>
            {:then card}
                {#if card}
                    <div
                        style="width: 100px; height: 100px; background-color: red;"
                        class="your-element"
                        data-tilt
                        data-tilt-max="50"
                        data-tilt-speed="400"
                        data-tilt-perspective="500"
                    />
                    <a href="{base}/cards/{card.id}">
                        <PokemonCard
                            data={card}
                            --height={`${cardHeight}px`}
                            --width={`${cardWidth}px`}
                        />
                    </a>
                {/if}
            {:catch error}
                <p style="color: red">{error.message}</p>
            {/await}
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>

<style>
    .grid {
        display: grid;
        justify-content: center;
        align-items: center;
        align-self: center;
        align-content: center;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: auto;
        grid-column-gap: 5px;
        grid-row-gap: 5px;
    }

    @media only screen and (max-width: 1600px) {
        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto;
            grid-column-gap: 5px;
            grid-row-gap: 5px;
        }
    }

    @media only screen and (max-width: 900px) {
        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            grid-column-gap: 5px;
            grid-row-gap: 5px;
        }
    }

    @media only screen and (max-width: 600px) {
        .grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: auto;
            grid-column-gap: 5px;
            grid-row-gap: 5px;
        }
    }
</style>
