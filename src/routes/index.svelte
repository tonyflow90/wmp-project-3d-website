<script>
    import { fly, fade } from "svelte/transition";

    import { onMount } from "svelte";

    import { base } from "$app/paths";

    import Page from "$lib/components/Page.svelte";
    import Error from "$lib/components/Error.svelte";
    import SetBox from "$lib/components/SetBox.svelte";
    import PokemonCard from "$lib/components/PokemonCard.svelte";
    import Tiltable from "$lib/components/Tiltable.svelte";
    import Headline from "$lib/components/Headline.svelte";
    import LoadingIndicator from "$lib/components/LoadingIndicator.svelte";

    import pokemon from "$lib/pokemon.js";

    onMount(async () => {});

    let title = "Home";

    let loadRandomSets = () => {
        return pokemon.getRandomSets(6);
    };

    let loadRandomCards = () => {
        return pokemon.getRandomCards(6);
    };

    let bookHeight = 400,
        bookWidth = bookHeight * (3 / 4);

    let cardHeight = 300,
        cardWidth = cardHeight * (9 / 16);

    let randomCardsText = "Random Cards";
    let randomSetsText = "Random Sets";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<Page>
    <Headline --hue="165">
        {randomSetsText}
    </Headline>

    {#await loadRandomSets()}
        <LoadingIndicator
            --height={`${bookHeight}px`}
            --width={`${bookWidth}px`}
        />
    {:then aSet}
        {#if aSet}
            <div class="grid">
                {#each aSet as set}
                    <a href="{base}/set/{set.id}">
                        <SetBox {set} />
                    </a>
                {/each}
            </div>
        {/if}
    {:catch error}
        <Error message={error.message} />
    {/await}

    <div class="randomCards">
        <Headline --hue="265">
            {randomCardsText}
        </Headline>

        {#await loadRandomCards()}
            <LoadingIndicator
                --height={`${cardHeight}px`}
                --width={`${cardWidth}px`}
            />
        {:then promises}
            <div class="card-grid">
                {#each promises as item}
                    {#await item}
                        <LoadingIndicator
                            --height={`${cardHeight}px`}
                            --width={`${cardWidth}px`}
                        />
                    {:then card}
                        {#if card}
                            <div
                                in:fade={{
                                    duration: 500,
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
            </div>
        {:catch error}
            <Error message={error.message} />
        {/await}
    </div>
</Page>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .randomCards {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }

    .grid {
        display: grid;
        min-height: 400px;
        grid-template-columns: repeat(6, 1fr);
    }

    @media only screen and (max-width: 1600px) {
        .grid {
            grid-template-columns: repeat(6, 1fr);
        }
    }

    @media only screen and (max-width: 900px) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media only screen and (max-width: 600px) {
        .grid {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    .card-grid {
        display: grid;
        min-height: 300px;
        grid-template-columns: repeat(6, 1fr);
    }

    @media only screen and (max-width: 1600px) {
        .card-grid {
            grid-template-columns: repeat(6, 1fr);
        }
    }

    @media only screen and (max-width: 900px) {
        .card-grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media only screen and (max-width: 600px) {
        .card-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
