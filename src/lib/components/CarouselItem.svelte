<script>
  import { onMount } from "svelte";

  onMount(() => {});

  export let index = 0;
  export let count = 0;

  $: rotateY = (360 / count) * index;
  $: translateZ = count < 5 ? 360 : 360 * (count / 5);
</script>

<div
  class="carousel-item carousel-item-rotate"
  style="--item-rotateY: {rotateY}; --item-translateZ: {translateZ}"
>
  <slot />
</div>

<style>
  .carousel-item {
    display: block;
    position: absolute;
  }

  .carousel-item-rotate {
    transform: rotateY(calc(var(--item-rotateY) * 1deg))
      translateZ(calc(var(--item-translateZ) * 1px));
  }
</style>
