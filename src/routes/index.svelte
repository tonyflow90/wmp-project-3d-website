<script>
    import { onMount } from "svelte";

    import Carousel from "$lib/components/Carousel.svelte";
    import CarouselItem from "$lib/components/CarouselItem.svelte";
    import PokemonCard from "$lib/components/PokemonCard.svelte";

    import { cards } from "$lib/cards";

    import pokemon from "pokemontcgsdk";

    onMount(() => {
        pokemon.configure({ apiKey: "2a30334b-5d51-4afd-b7fc-c999fb16ee61" });
    });

    let title = "Home";

    const url = "https://api.pokemontcg.io/v2/sets/swsh1";
    const cardSet = "base1";
    let pokemonCards = [];

    let getPokemon = async () => {
        let cardCount = 0;
        await pokemon.set.find(cardSet).then((set) => {
            console.log(set);
            cardCount = set.printedTotal;
        });

        for (let i = 1; i < 3; i++) {
            let cardId = `${cardSet}-${i}`;
            pokemon.card.find(cardId).then((card) => {
                console.log(card.name); // "Charizard"
                pokemonCards.push(card);
            });
        }
    };
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main>
    <button on:click={getPokemon}>GET THEM ALL</button>
    <div class="carousel">
        <Carousel selectedIndex=0 count={cards.length}>
            {#each cards as card}
                <CarouselItem index={cards.indexOf(card)} count={cards.length}>
                    <PokemonCard data={card.data} />
                </CarouselItem>
            {/each}
        </Carousel>
    </div>
</main>

<style>
    /* .carousel {
        display: flex;
        flex-direction: row;
        min-height: 80vh;
        justify-content: center;
        align-items: center;
        perspective: 1000px;
    } */

    /* .scene {
        border: 1px solid #ccc;
        margin: 40px 0;
        position: relative;
        width: 210px;
        height: 140px;
        margin: 80px auto;
        perspective: 1000px;
    } */
</style>
