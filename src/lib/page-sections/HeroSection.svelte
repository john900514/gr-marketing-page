<script>
  import Hero from "$lib/layout/Hero.svelte";
</script>

<section class="hero-sect">
  <Hero />
</section>

<style>
  section {
    @apply flex flex-col bg-bottom bg-cover lg:justify-end lg:justify-center min-h-screen bg-[#000616];

    background-attachment: local;
    background-blend-mode: lighten;
    @screen lg {
      background-image: url("/combg/hero_bg.jpg");
    }
  }
</style>
