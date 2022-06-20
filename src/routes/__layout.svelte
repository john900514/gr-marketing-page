<script>
  import "../app.css";
  import Header from "$lib/layout/Header.svelte";
  import Hero from "$lib/layout/Hero.svelte";

  let name = "hi";
</script>

<main>
  <Header />
  <section>
    <Hero />
  </section>

  <slot />
</main>

<style lang="postcss">
  main {
    @apply grid h-full w-full;
    grid-template-rows: repeat(3, 100%);

    section {
      @apply min-h-16;
    }
  }
</style>
