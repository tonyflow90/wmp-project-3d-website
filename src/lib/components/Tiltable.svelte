<script>
    import { onMount } from "svelte";

    import VanillaTilt from "vanilla-tilt";

    onMount(() => {
        const elements = document.querySelectorAll("#tilt");
        VanillaTilt.init(elements);
    });
</script>

<div id="tilt" class="container">
    <slot />
</div>

<style>
    .container {
        cursor: move;
    }
</style>
