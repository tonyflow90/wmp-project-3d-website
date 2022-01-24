<script>
  import { onMount } from "svelte";

  onMount(() => {});

  export let count = 0;
  export let selectedIndex = 0;

  let currdeg = 0;

  let previous = () => {
    selectedIndex--;
    rotate("p");
  };

  let next = () => {
    selectedIndex--;
    rotate("n");
  };

  let rotate = (e) => {
    if (e == "n") {
      currdeg = currdeg - 360/count;
    }
    if (e == "p") {
      currdeg = currdeg + 360/count;
    }
    carousel.style.transform = "rotateY(" + currdeg + "deg)";
  };
</script>

<!-- <div class="content"> -->
  <div class="carousel-container">
    <div id="carousel" class="carousel-content">
      <slot />
    </div>
  </div>
  <!-- <div class="grid">
    <button id="prev" on:click={previous} class="button">previous</button>
    <button id="next" on:click={next} class="button">next</button>
  </div>
</div> -->

<style>
  .content {
    /* display: flex;
    flex-direction: column; */
  }

  .carousel-container {
    display: flex;
    justify-content: center;
    min-height: 80vh;
    overflow-x: hidden;
    perspective: 10000px;
  }

  .carousel-content {
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transition: transform 1s;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
</style>
