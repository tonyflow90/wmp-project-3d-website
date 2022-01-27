<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { base } from "$app/paths";


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

{#await loadCard() then card}
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

</style>
