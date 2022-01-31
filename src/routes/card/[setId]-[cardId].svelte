<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";

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

    onMount(async () => {});

    let loadCard = async () => {
        let data = await pokemon.getCard(cardId);
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
            <Headline --hue="265">
                {card.name}
            </Headline>

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
                    <Trapezoid top bottom --hue="200">
                        <Headline --hue="265">Details</Headline>

                        <LoadingIndicator />
                    </Trapezoid>
                </div>

                <div class="data-grid-element stats">
                    <Trapezoid top bottom --hue="20">
                        <Headline --hue="265">Stats</Headline>

                        <LoadingIndicator />
                    </Trapezoid>
                </div>

                <div class="data-grid-element card-info">
                    <Trapezoid top bottom --hue="20">
                        <Headline --hue="265">Card Info</Headline>

                        <LoadingIndicator />
                    </Trapezoid>
                </div>
            </div>
        {/if}
    {:catch error}
        <Error message={error.message} />
    {/await}
</Page>

<style>
    #shadow {
        content: "";
        /* position: relative; */
        /* height: calc(var(--card-size-y) / 2);
        width: calc(var(--card-size-x)); */
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
