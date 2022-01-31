<script>
    import { fly, fade } from "svelte/transition";

    // debugger;

    let innerWidth, width, widthn; // = $document.body.clientWidth;
    $: log(innerWidth);

    let log = (w) => {
        width = w;
        widthn = w * -1;
    };
</script>

<svelte:window bind:innerWidth />

<div
    class="content"
    in:fly={{
        y: -300,
        duration: 500,
        delay: 700
    }}
    out:fly={{
        y: 300,
        duration: 500,
    }}
>
    <slot />
</div>
