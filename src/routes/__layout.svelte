<script>
  import "../app.css";
  import Header from "$lib/layout/Header.svelte";
  import Footer from "$lib/layout/Footer.svelte";
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style lang="postcss">
  main {
    @apply w-full bg-top bg-cover;
    grid-template-rows: auto;
    background-image: url(grad_bg.png);
  }
</style>
