<script>
    import { onMount } from "svelte";

    import Book from "$lib/components/Book.svelte";

    import { page } from "$app/stores";

    import { base } from "$app/paths";

    import { routes } from "$lib/routes";

    import pokemon from "$lib/pokemon.js";
    import SetBox from "$lib/components/SetBox.svelte";
    import LoadingIndicator from "$lib/components/LoadingIndicator.svelte";
    import Headline from "$lib/components/Headline.svelte";

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

    let text = "All Sets";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="content">
    <Headline {text} --width="600px" --hue="165" />

    {#await pokemon.getAllSets()}
        <LoadingIndicator
            --height={`${bookHeight}px`}
            --width={`${bookWidth}px`}
        />
    {:then aSet}
        {#if aSet}
            <div class="grid">
                {#each aSet as set}
                    <a href="{base}/set/{set.id}">
                        <SetBox size="300" darkenLeft darkenBottom>
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
                        </SetBox>
                        <!-- <Book
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
                        </Book> -->
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
        align-items: center;
    }
</style>
