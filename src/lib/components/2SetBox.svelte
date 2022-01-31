<script>
    import { onMount } from "svelte";

    import Box from "$lib/components/Box.svelte";

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

    export let hue = 0;

    export let size = 400;
</script>

<div class="content box">
    <Box
        --size-x={`${size * (3 / 4)}px`}
        --size-y={`${size}px`}
        --size-z={`${size / 2}px`}
        --hue={hue}
        --transform="translateZ(0px) rotate3d(1, 1, 0, 25deg)"
        --border="0px solid black"
        lightenFront
        darkenBottom
    >
        <div class="box-content">
            <slot />
        </div>
    </Box>
</div>

<style>
    .content {
        width: calc(var(--size-x) * 1.5);
        height: calc(var(--size-y) * 1.5);
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 10000px;
    }

    .box-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: var(--size-x);
        height: var(--size-y);
    }

    .box:hover {
        transition: ease 0.5s;
        transform: scale3d(1.2, 1.2, 1.2);
    }
</style>
