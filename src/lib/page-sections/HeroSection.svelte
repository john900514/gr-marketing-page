<script>
  import PageSection from "$lib/components/PageSection.svelte";
import Hero from "$lib/layout/Hero.svelte";
</script>

<PageSection class=" flex flex-col bg-bottom bg-cover lg:justify-center min-h-[80vh] md:min-h-screen">
  <img slot="pre-container" src="/combg/hero_bg.jpg" alt="" class="hidden md:block pointer-events-none object-cover absolute inset-0 w-full h-full  filter mix-blend-screen"/>
  <img src="/combg/hero_bg_m.jpg" alt="" class="md:hidden  filter mix-blend-screen transform scale-150 mb-[32%]"/>
  <Hero />
</PageSection>
