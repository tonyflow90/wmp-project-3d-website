<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    import { base } from "$app/paths";

    import Page from "$lib/components/Page.svelte";

    import Error from "$lib/components/Error.svelte";

    import Trapezoid from "$lib/components/Trapezoid.svelte";

    import Headline from "$lib/components/Headline.svelte";

    import PokemonCard from "$lib/components/PokemonCard.svelte";

    import LoadingIndicator from "$lib/components/LoadingIndicator.svelte";

    import Rotatable from "$lib/components/Rotatable.svelte";

    import pokemon from "$lib/pokemon.js";

    const setId = $page.params.setId;
    const cId = $page.params.cardId;

    $: cardId = `${setId}-${cId}`;

    onMount(async () => {
        // let data = await pokemon.getCard(cardId);
        // debugger;
        // return pokemon.getCard(cardId);
    });

    let loadCard = async () => {
        return pokemon.getCard(cardId);
    };

    let title = "Card";

    let dataElementWidth = 400,
        headlineWidth = dataElementWidth * 0.8;
    let cardHeight = 400,
        cardWidth = cardHeight * (9 / 16);
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<Page>
    {#await loadCard() then card}
        {#if card}
            <!-- <Headline --hue="265">
                {card.name}
            </Headline> -->

            <div class="card">
                <Rotatable>
                    <PokemonCard
                        data={card}
                        --card-size-y={`${cardHeight}px`}
                        --card-size-x={`${cardWidth}px`}
                    />
                </Rotatable>
                <div
                    id="shadow"
                    style="height:{`${
                        cardHeight / 2
                    }px`};width={`${cardWidth}px`}"
                />
            </div>

            <div class="data-grid">
                <div class="data-grid-element details">
                    <Trapezoid top bottom --hue="165">
                        <h1>Pokemon</h1>

                        <p class="title">{card.name}</p>
                        <span class="small">Name</span>
                        <ul class="card-info-grid" />

                        <div class="background">
                            <ul class="card-info-grid">
                                <li>
                                    <p class="text">{card.level ? card.level : '-'}</p>
                                    <span class="small">Level</span>
                                </li>
                                <li>
                                    <p class="text">{card.hp ? card.hp : '-'}</p>
                                    <span class="small">HP</span>
                                </li>
                                <li>
                                    <p class="text">{card.types ? card.types : '-'}</p>
                                    <span class="small">Type</span>
                                </li>
                                <li>
                                    <p class="text">{card.evolvesFrom ? card.evolvesFrom : '-'}</p>
                                    <span class="small">evolves From</span>
                                </li>
                            </ul>

                            <ul class="card-info-description">
                                <li>
                                    <p class="text">{card.flavorText ? card.flavorText : '-'}</p>
                                    <span class="small">Flavor Text</span>
                                </li>
                            </ul>
                        </div>

                        <!-- attacks: [
                            {
                                name: "Fetch",
                                cost: ["Colorless"],
                                convertedEnergyCost: 1,
                                damage: "",
                                text: "Draw a card.",
                            },
                            {
                                name: "Comet Punch",
                                cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
                                convertedEnergyCost: 4,
                                damage: "20×",
                                text: "Flip 4 coins. This attack does 20 damage times the number of heads.",
                            },
                        ],
                        weaknesses: [
                            {
                                type: "Fighting",
                                value: "×2",
                            },
                        ],
                        resistances: [
                            {
                                type: "Psychic",
                                value: "-30",
                            },
                        ], -->
                        <!-- <p class="title">Attacks</p>
                        <div class="background">
                            <ul class="card-info-grid">
                                {#each card.attacks as attack}
                                    <li>
                                        <p class="text">
                                            {attack.name}
                                        </p>
                                        <span class="small">Price</span>
                                    </li>
                                {/each}
                            </ul>
                        </div> -->
                    </Trapezoid>
                </div>

                <div class="data-grid-element card-info">
                    <Trapezoid top bottom --hue="175">
                        <!-- <h1>Card</h1> -->

                        <p class="title">Card Info</p>
                        <ul class="card-info-grid background">
                            <li>
                                <p class="text">{card.number}</p>
                                <span class="small">Number</span>
                            </li>
                            <li>
                                <p class="text">{card.artist}</p>
                                <span class="small">Artist</span>
                            </li>
                            <li>
                                <p class="text">{card.rarity}</p>
                                <span class="small">Rarity</span>
                            </li>
                        </ul>

                        <p class="title">Set Info</p>
                        <ul class="card-info-grid background">
                            <li>
                                <p class="text">{card.set.name}</p>
                                <span class="small">Set</span>
                            </li>
                            <li>
                                <p class="text">{card.set.series}</p>
                                <span class="small">Series</span>
                            </li>
                            <li>
                                <p class="text">{card.set.releaseDate}</p>
                                <span class="small">Release Date</span>
                            </li>
                            <li>
                                <p class="text">{card.set.printedTotal}</p>
                                <span class="small">Cards</span>
                            </li>
                        </ul>
                    </Trapezoid>
                </div>

                <div class="data-grid-element stats">
                    <Trapezoid top bottom --hue="185">
                        <h1>Prices</h1>

                        <img
                            class="logo"
                            src="{base}/images/cardmarket_logo.png"
                            alt="Cardmarket Logo"
                        />

                        <ul class="card-info-grid background">
                            <li>
                                <p class="text">
                                    {card.cardmarket.prices.averageSellPrice} €
                                </p>
                                <span class="small">Avg. Price</span>
                            </li>
                            <li>
                                <p class="text">
                                    {card.cardmarket.prices.trendPrice} €
                                </p>
                                <span class="small">Trend</span>
                            </li>
                            <li>
                                <p class="text">
                                    {card.cardmarket.prices.lowPrice} €
                                </p>
                                <span class="small">Lowest Price</span>
                            </li>
                            <li>
                                <p class="text">
                                    {card.cardmarket.prices.averageSellPrice} €
                                </p>
                                <span class="small">Card</span>
                            </li>
                        </ul>

                        <img
                            class="logo"
                            src="{base}/images/tcgplayer_logo.png"
                            alt="Cardmarket Logo"
                        />

                        {#each Object.entries(card.tcgplayer.prices) as entry}
                            <p class="title">{entry[0]}</p>
                            <div class="background">
                                <ul class="card-info-grid">
                                    <li>
                                        <p class="text">
                                            {entry[1].market} €
                                        </p>
                                        <span class="small">Price</span>
                                    </li>
                                    <li>
                                        <p class="text">
                                            {entry[1].mid} €
                                        </p>
                                        <span class="small">Avg. Price</span>
                                    </li>
                                    <li>
                                        <p class="text">
                                            {entry[1].high} €
                                        </p>
                                        <span class="small">Highest Price</span>
                                    </li>
                                    <li>
                                        <p class="text">
                                            {entry[1].low} €
                                        </p>
                                        <span class="small">Lowest Price</span>
                                    </li>
                                </ul>
                            </div>
                        {/each}
                    </Trapezoid>
                </div>
            </div>
        {/if}
    {:catch error}
        <Error message={error.message} />
    {/await}
</Page>

<style>
    .logo {
        height: 100px;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
    }

    .background {
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
        background-color: rgba(255, 255, 255, 0.25);
        width: 100%;
        border-radius: 25px;
        padding-bottom: 20px;
    }

    .card-info-description {
        display: flex;
        justify-self: center;
        width: 100%;
    }

    .card-info-grid {
        display: grid;
        justify-self: center;
        grid-template-rows: repeat(auto, 1fr);
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
    }

    li {
        list-style: none;
        text-align: start;
    }

    .title {
        font-size: 1.8em;
        font-weight: 600;
        margin-bottom: 0px;
    }

    .text {
        font-size: 1.2em;
        font-weight: 600;
        margin-bottom: 0px;
    }

    .small {
        margin-top: 0px;
        font-weight: 400;
        font-variant-caps: all-petite-caps;
        letter-spacing: 0.1em;
        font-size: 0.8em;
    }

    #shadow {
        content: "";
        transform: translateY(calc(var(--card-size-y) * -0.1)) rotateX(-75deg)
            rotateZ(15deg);
        z-index: -1;
        margin-bottom: calc(var(--card-size-y) * -0.25);
        background-color: rgb(0, 0, 0);
        border-radius: calc(var(--card-size-y) / 2);
        opacity: 0.15;
    }
    .data-grid {
        display: grid;
        grid-auto-flow: row dense;
        grid-template-columns: repeat(3, 1fr);
    }

    .data-grid-element {
        width: 400px;
        padding: 0px 20px;
    }

    .details,
    .stats,
    .card-info {
        /* background-color: violet; */
        margin: 10px;
    }

    @media only screen and (max-width: 1600px) {
        .data-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media only screen and (max-width: 900px) {
        .data-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media only screen and (max-width: 600px) {
        .data-grid {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
