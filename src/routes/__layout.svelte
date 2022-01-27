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
  <Footer />
</footer>

<style>
</style>
