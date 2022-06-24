<script>
  import "../app.css";
  import Header from "$lib/layout/Header.svelte";
  import Footer from "$lib/layout/Footer.svelte";
</script>

<Header />
<main class="flex flex-col flex-grow">
  <slot />
  <div class="flex-grow" />
  <Footer />
</main>

<style>
  :global(#app) {
    background: rgb(0, 9, 22);
    background: linear-gradient(
      180deg,
      rgba(0, 9, 22, 1) 0%,
      rgba(3, 47, 78, 1) 24%,
      rgba(1, 75, 129, 1) 59%,
      rgba(23, 40, 52, 1) 91%,
      rgba(0, 1, 7, 1) 100%
    );
  }
</style>
