<script>
    import { onMount } from "svelte";

    import Pokeball from "$lib/components/Pokeball.svelte";

    onMount(() => {});
</script>

<div class="loading">
    <Pokeball --size="100px" />
</div>

<div>
    <slot />
</div>

<style>
    :root {
        --height: 200px;
        --width: 200px;
    }

    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        height: var(--height);
        width: var(--width);
    }
</style>
