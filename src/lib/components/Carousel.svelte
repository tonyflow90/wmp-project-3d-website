<script>
  import { onMount } from "svelte";

  onMount(() => {});

  export let count = 0;
  export let selectedIndex = 0;

  // var isHorizontal = true;
  // var rotateFn = isHorizontal ? "rotateY" : "rotateX";

  // let rotate = () => {
  //   var angle = (360 / count) * selectedIndex * -1;

  //   var cellWidth = carousel.offsetWidth;
  //   var cellHeight = carousel.offsetHeight;
  //   var cellSize = isHorizontal ? cellWidth : cellHeight;
  //   // debugger;
  //   let radius = Math.round(cellSize / 2 / Math.tan(Math.PI / count));
  //   // radius = 3000;
  //   carousel.style.transform =
  //     "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
  // };

  // let previous = () => {
  //   selectedIndex--;
  //   rotate();
  // };

  // let next = () => {
  //   selectedIndex--;
  //   rotate();
  // };

  let currdeg = 0;

  // $(".next").on("click", { d: "n" }, rotate);
  // $(".prev").on("click", { d: "p" }, rotate);

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

<div class="content">
  <div class="carousel-container">
    <div id="carousel" class="carousel-content">
      <slot />
    </div>
  </div>
  <div class="grid">
    <button id="prev" on:click={previous} class="button">previous</button>
    <button id="next" on:click={next} class="button">next</button>
  </div>
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
  }

  .carousel-container {
    display: flex;
    justify-content: center;
    height: 800px;
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
