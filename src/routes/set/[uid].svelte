<script>
    import { fly, fade } from "svelte/transition";

    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { base } from "$app/paths";

    import PokemonCard from "$lib/components/PokemonCard.svelte";
    import Tiltable from "$lib/components/Tiltable.svelte";

    import pokemon from "$lib/pokemon.js";
    import Headline from "$lib/components/Headline.svelte";
    import LoadingIndicator from "$lib/components/LoadingIndicator.svelte";

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

    let deb = (c, index) => {
        let gridX = setGrid.getBoundingClientRect().x;
        let cardX = c.getBoundingClientRect().x;
        console.log(gridX, cardX);
    };

    $: title = set ? `${set.name} Set` : "Set";

    let cardHeight = 600,
        cardWidth = cardHeight * (9 / 16);

    let text = "All Cards";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div
    class="content"
    in:fly={{
        y: 500,
        duration: 1000,
    }}
    out:fly={{
        y: 500,
        duration: 500,
    }}
>
    <Headline {text} --hue="165" />

    <div id="setGrid" class="grid">
        {#await loadCards()}
            <LoadingIndicator
                --height={`${cardHeight}px`}
                --width={`${cardWidth}px`}
            />
        {:then promises}
            {#each promises as item, index}
                {#await item}
                    <LoadingIndicator
                        --height={`${cardHeight}px`}
                        --width={`${cardWidth}px`}
                    />
                {:then card}
                    {#if card}
                        <!-- <div
                            in:fly={{
                                x: index * -1 * cardWidth,
                                y: (index / 6) * 1 * cardHeight,
                                opacity: 1,
                                duration: 1000,
                            }}
                            out:fade
                        > -->
                        <div
                            in:fade={{
                                duration: 1000,
                            }}
                            out:fade
                        >
                            <Tiltable>
                                <a href="{base}/card/{card.id}">
                                    <PokemonCard
                                        data={card}
                                        --height={`${cardHeight}px`}
                                        --width={`${cardWidth}px`}
                                    />
                                </a>
                            </Tiltable>
                        </div>
                    {/if}
                {:catch error}
                    <p style="color: red">{error.message}</p>
                {/await}
            {/each}
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </div>
</div>

<style>
</style>
