<script>
  import "../app.css";

  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  
</script>

<header>
  <Header />
</header>

<main>
  <slot />
</main>

<footer>
  <Footer --hue=165 />
</footer>

<style>
</style>
