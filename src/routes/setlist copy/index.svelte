<script>
    import { onMount } from "svelte";

    import { fly } from "svelte/transition";

    import Error from "$lib/components/Error.svelte";

    import { base } from "$app/paths";

    import pokemon from "$lib/pokemon.js";

    import Page from "$lib/components/Page.svelte";
    import SetBox from "$lib/components/SetBox.svelte";
    import LoadingIndicator from "$lib/components/LoadingIndicator.svelte";
    import Headline from "$lib/components/Headline.svelte";

    onMount(async () => {
    });

    let title = "All Cards";

    let bookHeight = 400,
        bookWidth = bookHeight * (3 / 4);

    let text = "All Cards";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<Page>
    <Headline --hue="165">
        {text}
    </Headline>

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
                        <SetBox {set} />
                    </a>
                {/each}
            </div>
        {/if}
    {:catch error}
        <Error message={error.message} />
    {/await}
</Page>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
