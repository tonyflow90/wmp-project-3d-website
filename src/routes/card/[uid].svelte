<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { base } from "$app/paths";

    import { fly, fade } from "svelte/transition";

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

<div
    class="content"
    in:fly={{
        y: -500,
        duration: 1000,
    }}
    out:fly={{
        y: 500,
        duration: 1000,
    }}
>
    {#await loadCard() then card}
        {#if card}
            <PokemonCard
                data-tilt
                data={card}
                --height={`${cardHeight}px`}
                --width={`${cardWidth}px`}
            />
        {/if}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>

<style>
</style>
