<script>
    import { fly, fade } from "svelte/transition";

    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { base } from "$app/paths";

    import Page from "$lib/components/Page.svelte";
    import Error from "$lib/components/Error.svelte";

    import PokemonCard from "$lib/components/PokemonCard.svelte";
    import Tiltable from "$lib/components/Tiltable.svelte";

    import pokemon from "$lib/pokemon.js";
    import Headline from "$lib/components/Headline.svelte";
    import LoadingIndicator from "$lib/components/LoadingIndicator.svelte";

    const setId = $page.params.uid;

    let set;

    onMount(() => {
        loadSet();
    });

    let loadSet = async () => {
        set = await pokemon.getSet(setId);
    };

    let loadCards = async () => {
        return pokemon.getAllCardsp(setId);
    };

    $: title = set ? `${set.name} Set` : "Set";
    $: text = set != undefined ? `${set.name} Set - All Cards` : "All Cards";

    let cardHeight = 300,
        cardWidth = cardHeight * (9 / 16);
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<Page>
    <Headline --hue="165">
        {text}
    </Headline>

    <div
        id="setGrid"
        class="grid"
        in:fly={{
            x: 900,
            duration: 500,
            delay: 700,
        }}
        out:fly={{
            x: 300,
            duration: 500,
        }}
    >
        {#await loadCards()}
            <LoadingIndicator
                --height={`${cardHeight}px`}
                --width={`${cardWidth}px`}
            />
        {:then promises}
            {#each promises as item, index}
                <!-- {#await item}
                    <LoadingIndicator
                        --height={`${cardHeight}px`}
                        --width={`${cardWidth}px`}
                    />
                {:then card} -->
                {#await item then card}
                    {#if card}
                        <!-- <div
                            in:fade={{
                                duration: 1000,
                            }}
                            out:fade
                        > -->
                        <div
                            in:fly={{
                                y: -4000,
                                x: -900,
                                opacity: 1,
                                delay:700,
                                duration: 1000,
                            }}
                            out:fade
                        >
                            <Tiltable>
                                <a href="{base}/card/{card.id}">
                                    <PokemonCard
                                        data={card}
                                        --card-size-y={`${cardHeight}px`}
                                        --card-size-x={`${cardWidth}px`}
                                    />
                                </a>
                            </Tiltable>
                        </div>
                    {/if}
                {:catch error}
                    <Error message={error.message} />
                {/await}
            {/each}
        {:catch error}
            <Error message={error.message} />
        {/await}
    </div>
</Page>

<style>
    .grid {
        min-height: 300px;
        grid-template-columns: repeat(6, 1fr);
    }

    @media only screen and (max-width: 1600px) {
        .grid {
            grid-template-columns: repeat(6, 1fr);
        }
    }

    @media only screen and (max-width: 900px) {
        .grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media only screen and (max-width: 600px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
