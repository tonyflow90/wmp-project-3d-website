<script>
  import "../app.css";

  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { page } from "$app/stores";
  import { base } from "$app/paths";

  let styles;
  let backgrounds = [
    `background-color: #cccccc; background-image: url('${base}/images/pokeballs/pokeballs_2.svg')`,
    `background-color: #e3ffe7; background-image: url('${base}/images/pokemon/pokemonset_1.svg')`,
    `background-color: rgb(219, 203, 203); background-image: url('${base}/images/pokemon/pokemonset_2.svg')`,
    `background-color: rgb(255, 240, 255); background-image: url('${base}/images/pokemon/pokemonset_3.svg')`,
  ];

  $: loadBackground($page.url.pathname);

  let loadBackground = (pathname) => {
    let path = pathname.replace(base,'').split("/")[1];
    switch (path) {
      case "setlist":
      styles = backgrounds[2];
        break;
      case "set":
      styles = backgrounds[3];
        break;
      case "card":
      styles = backgrounds[0];
        break;
      default:
        styles = backgrounds[1];
        break;
    }
  };
</script>

<div class="app" style={styles}>
  <header>
    <Header />
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <Footer --hue="165" />
  </footer>
</div>

<style>
  .pokeballs {
    background-color: #cccccc;
    background-image: url("/images/pokeballs/pokeballs_2.svg");
  }

  .background_1 {
    background-color: #e3ffe7;
    background-image: url("/images/pokemon/pokemonset_1.svg");
  }

  .background_2 {
    background-color: rgb(219, 203, 203);
    background-image: var(--b-i);
    /* background-image: url("/images/pokemon/pokemonset_2.svg"); */
  }

  .background_3 {
    background-color: rgb(255, 240, 255);
    background-image: url("/images/pokemon/pokemonset_3.svg");
  }

  .background_4 {
    background-color: rgb(255, 255, 255);
    background-image: url("/images/pokemon/pokemonset_4.svg");
  }
</style>
