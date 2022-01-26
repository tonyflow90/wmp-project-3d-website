<script>
    import { onMount } from "svelte";

    import { page } from "$app/stores";

    import { base } from "$app/paths";

    import { routes } from "$lib/routes";

    $: url = $page.url.pathname;

    console.log($page.url);

    import PokemonCard from "$lib/components/PokemonCard.svelte";

    import { sets, cards } from "$lib/stores.js";

    import pokemon from "$lib/pokemon.js";

    onMount(async () => {
        if (!$cards) {
            cards.set(await pokemon.getAllCards("base1"));
        }
    });

    let title = "Set";

    let moveToBack;

    let cardHeight = 400,
        cardWidth = cardHeight * (9 / 16);
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>
{url}
{#await $cards}
    <p>...waiting</p>
{:then aCards}
    {#if aCards}
        <div class="grid">
            {#each aCards as card}
                <PokemonCard
                    data={card}
                    --height={`${cardHeight}px`}
                    --width={`${cardWidth}px`}
                    on:click={moveToBack}
                />
            {/each}
        </div>
    {/if}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<style>
    .grid {
        display: grid;
        justify-content: center;
        align-items: center;
        align-self: center;
        align-content: center;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: auto;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
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
