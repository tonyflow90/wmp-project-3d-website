<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { base } from "$app/paths";

    import { sets, cards } from "$lib/stores.js";

    import PokemonCard from "$lib/components/PokemonCard.svelte";

    import pokemon from "$lib/pokemon.js";

    const cardId = $page.params.uid;

    onMount(async () => {});

    let loadCard = async () => {
        return pokemon.getCard(cardId);
    };

    let title = "Card";

    let cardHeight = 600,
        cardWidth = cardHeight * (9 / 16);
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

{#await loadCard()}
    <p>...waiting for card</p>
{:then card}
    {#if card}
        <PokemonCard data-tilt
            data={card}
            --height={`${cardHeight}px`}
            --width={`${cardWidth}px`}
        />
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
