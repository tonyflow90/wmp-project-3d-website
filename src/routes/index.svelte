<script>
    import { onMount } from "svelte";

    import Carousel from "$lib/components/Carousel.svelte";
    import CarouselItem from "$lib/components/CarouselItem.svelte";
    import Rotatable from "$lib/components/Rotatable.svelte";
    import PokemonCard from "$lib/components/PokemonCard.svelte";
    import Book from "$lib/components/Book.svelte";

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
            // el.classList.add("scaled");
        }
        // Book.toggleScaled(e)
        // let el = e.detail.currentTarget;
        // // e.detail.currentTarget.style.transform = "scale3d(3,3,3)"
        // // e.detail.currentTarget.style.position = "absolute"

        // if (el.classList.contains("scaled")) {
        //     el.classList.remove("scaled");
        // } else {
        //     el.classList.add("scaled");
        // }

        // debugger;
        // // alert(id)
    };

    let bookHeight = 400,
        bookWidth = bookHeight * (3 / 4);
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<!-- <Book on:click={openSet} --height="180px" --width="120px" --bg-color="purple">
        <div slot='cover-front'>
            {set.name}
            {set.series}
            {set.total}
            {set.releaseDate}
        </div>

        <div slot='side-left'>
            {set.name}
            {set.series}
            {set.total}
            {set.releaseDate}
        </div>
    </Book> -->

<!-- <Book on:click={openSet} --size="200px" /> -->

{#await $sets}
    <p>...waiting</p>
{:then aSet}
    {#if aSet}
        <div class="grid">
            {#each aSet as set}
                    <Book
                    on:click={openSet}
                    --height={`${bookHeight}px`}
                    --width={`${bookWidth}px`}
                    --bg-color={randomColor()}
                >
                    <div slot="cover-front">
                        <img
                            style={`width:${
                                bookWidth - bookWidth * 0.1
                            }px; height:${bookHeight * 0.5}px;`}
                            src={set.images.logo}
                            alt={set.name}
                        />
                        <h2>
                            <span>{set.name}</span>
                        </h2>
                        <span>{set.series}</span>
                    </div>
                    <!-- <div slot="content">
                        <div class="bk-content bk-content-current">
                            <p>
                                Red snapper Kafue pike fangtooth humums
                                slipmouth, salmon cutlassfish; swallower
                                European perch mola mola sunfish, threadfin
                                bream. Billfish hog sucker trout-perch lenok
                                orbicular velvetfish. Delta smelt striped bass,
                                medusafish dragon goby starry flounder cuchia
                                round whitefish northern anchovy spadefish
                                merluccid hake cat shark Black pickerel. Pacific
                                cod.
                            </p>
                        </div>
                    </div> -->
                </Book>
            {/each}
        </div>
    {/if}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
<!-- <div id="sCard" class="card">
        {#if selectedCard != null}
            <PokemonCard data={selectedCard} cardSize="30vh" />
        {/if}
    </div> -->

<!-- {#if selectedCard != null}
        <div id="sCard" class="card">
            <PokemonCard data={selectedCard} cardSize="30vh" />
        </div>
    {:else}
        <div class="carousel">
            {$cards.length}
            <Carousel selectedIndex="0" count={$cards.length}>
            <Carousel selectedIndex=0 count=3>
                    {#each $cards as card}
                    <CarouselItem
                        on:click={moveToBack}
                        index={$cards.indexOf(card)}
                        count=0
                    >
                        <Rotatable angle="5">
                        <PokemonCard
                            data={card.data}
                            cardSize="30vh"
                            on:click={moveToBack}
                        />
                        </Rotatable>
                    </CarouselItem>
                {/each}
            </Carousel>
        </div>
    {/if} -->

<!-- {#await $cards}
        <p>...waiting</p>
    {:then aCards}
        {#if aCards}
            <div class="carousel">
                <Carousel selectedIndex="0" count={!aCards ? 0 : aCards.length}>
                    {#each aCards as card}
                        <CarouselItem
                            on:click={moveToBack}
                            index={aCards.indexOf(card)}
                            count={!aCards ? 0 : aCards.length}
                        >
                            <PokemonCard
                                data={card}
                                cardSize="30vh"
                                on:click={moveToBack}
                            />
                        </CarouselItem>
                    {/each}
                </Carousel>
            </div>
        {/if}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await} -->
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
