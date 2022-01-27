<script>
    import { fly, fade } from "svelte/transition";

    import { onMount } from "svelte";

    import { base } from "$app/paths";

    import Book from "$lib/components/Book.svelte";
    import PokemonCard from "$lib/components/PokemonCard.svelte";
    import Tiltable from "$lib/components/Tiltable.svelte";
    import Headline from "$lib/components/Headline.svelte";

    import pokemon from "$lib/pokemon.js";
    import LoadingIndicator from "$lib/components/LoadingIndicator.svelte";

    onMount(async () => {});

    let title = "Home";

    let randomColor = () => {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    let loadRandomSets = () => {
        return pokemon.getRandomSets(3);
    };

    let loadRandomCards = () => {
        return pokemon.getRandomCards(3);
    };

    let bookHeight = 400,
        bookWidth = bookHeight * (3 / 4);

    let cardHeight = 500,
        cardWidth = cardHeight * (9 / 16);

    let randomCardsText = "Random Cards";
    let randomSetsText = "Random Sets";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="content">

    <Headline text={randomCardsText} --width="600px" --hue="265" />

    {#await loadRandomCards()}
        <LoadingIndicator
            --height={`${cardHeight}px`}
            --width={`${cardWidth}px`}
        />
    {:then promises}
        <div class="grid">
            {#each promises as item, index}
                {#await item}
                    <!-- <LoadingIndicator
                        --height={`${cardHeight}px`}
                        --width={`${cardWidth}px`}
                    /> -->
                {:then card}
                    {#if card}
                    <!-- <div
                    in:fly={{
                        x: index * -1 * cardWidth,
                        y: 0,
                        duration: 2000,
                    }}
                    out:fade
                > -->
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
        </div>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}

    <Headline text={randomSetsText} --width="600px" --hue="165" />

    {#await loadRandomSets()}
        <p>...waiting</p>
    {:then aSet}
        {#if aSet}
            <div class="grid">
                {#each aSet as set}
                    <a href="{base}/set/{set.id}">
                        <Book
                            --height={`${bookHeight}px`}
                            --width={`${bookWidth}px`}
                            --bg-color={randomColor()}
                        >
                            <div slot="cover-front">
                                <img
                                    style={`width:${
                                        bookWidth - bookWidth * 0.5
                                    }px; height:${bookWidth * 0.5}px;`}
                                    src={set.images.logo}
                                    alt={set.name}
                                />
                                <h2>
                                    <span>{set.name}</span>
                                </h2>
                                <span>{set.series}</span>
                            </div>
                        </Book>
                    </a>
                {/each}
            </div>
        {/if}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }

    Headline {

    }

    .grid {
        min-height: 600px;
        grid-template-columns: repeat(3, 1fr);
    }
</style>
