<script>
    import { fly, fade } from "svelte/transition";

    import { onMount } from "svelte";

    import { base } from "$app/paths";

    import Book from "$lib/components/Book.svelte";
    import Box from "$lib/components/Box.svelte";
    import CardBox from "$lib/components/CardBox.svelte";
    import SetBox from "$lib/components/SetBox.svelte";
    import PokemonCard from "$lib/components/PokemonCard.svelte";
    import Pokeball from "$lib/components/Pokeball.svelte";
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

    let randomHueColor = () => {
        const hueColors = [...Array(12).keys()].map((x) => (x + 1) * 30);
        var hueColor = hueColors[Math.floor(Math.random() * hueColors.length)];
        return hueColor;
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
    <Headline text={randomSetsText} --hue="165" />

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


    
    <Headline text={randomCardsText} --hue="265" />

    {#await loadRandomCards()}
        <LoadingIndicator
            --height={`${cardHeight}px`}
            --width={`${cardWidth}px`}
        />
    {:then promises}
        <div class="grid">
            {#each promises as item, index}
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

</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }

    .grid {
        min-height: 600px;
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 1600px) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media only screen and (max-width: 900px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media only screen and (max-width: 600px) {
        .grid {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
