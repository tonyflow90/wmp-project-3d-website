<script>
    import { onMount } from "svelte";

    import Carousel from "$lib/components/Carousel.svelte";
    import CarouselItem from "$lib/components/CarouselItem.svelte";
    import Rotatable from "$lib/components/Rotatable.svelte";
    import PokemonCard from "$lib/components/PokemonCard.svelte";
    import Book from "$lib/components/Book.svelte";

    import { page } from "$app/stores";

    import { base } from "$app/paths";

    import { routes } from "$lib/routes";

    // import { cards } from "$lib/cards";
    import { sets, cards } from "$lib/stores.js";

    // cards.subscribe(val => localStorage.setItem("cards", val));

    import pokemon from "$lib/pokemon.js";

    let pokemonCards = [];

    // cards.subscribe((arr) => (pokemonCards = arr));

    onMount(async () => {
        if (!$sets) {
            sets.set(await pokemon.getAllSets());
        }
        if (!$cards) {
            // cards.set(await pokemon.getAllCards("base1"));
        }
    });

    let title = "Home";

    let getPokemon = async () => {
        let aCards = await pokemon.getAll();
        cards.set(aCards);
    };

    let moveToBack = async (e) => {
        let selectedCard = e.detail;
        sCard.style.display = "flex";
        carousel.style.transform = "translateZ(-100000px) translateY(1000px)";
    };

    let randomColor = () => {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    let openSet = async (e) => {
        let el = e.detail;
        if (el.classList.contains("scaled")) {
            el.classList.remove("scaled");
        } else {
            el.classList.add("scaled");
        }
    };

    let bookHeight = 400,
        bookWidth = bookHeight * (3 / 4);
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

{#await pokemon.getAllSets()}
    <p>...waiting</p>
{:then aSet}
    {#if aSet}
        <div class="grid">
            {#each aSet as set}
                <a href="{base}/sets/{set.id}">
                    <Book
                        on:click={openSet}
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
