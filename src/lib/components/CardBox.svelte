<script>
    import { onMount } from "svelte";

    import Box from "$lib/components/Box.svelte";
    import Pokeball from "$lib/components/Pokeball.svelte";

    onMount(async () => {});

    export let lightenFront,
        lightenBack,
        lightenLeft,
        lightenright,
        lightenTop,
        lightenBottom,
        darkenFront,
        darkenBack,
        darkenLeft,
        darkenright,
        darkenTop,
        darkenBottom = false;
        
    export let size = 200;
</script>

<div class="box" >
    <Box
        --size-x={`${size * (3 / 4)}px`}
        --size-y={`${size}px`}
        --size-z={`${size / 2}px`}
        --hue="240"
        --transform="translateZ(0px) rotate3d(1, 2, 0, 45deg)"
        --border="{`${size * 0.02}px`} solid black"
    >
        <div class="content">
            <Pokeball --size={`${size / 2}px`} />
        </div>
    </Box>
</div>

<style>
    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--size-x);
        height: var(--size-y);
    }

    .box:hover {
        transition: ease .5s;
        transform: scale3d(1.2, 1.2, 1.2);
    }
</style>
