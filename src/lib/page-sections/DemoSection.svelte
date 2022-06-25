<script>
  import DemoForm from "$lib/components/DemoForm.svelte";
import PageSection from "$lib/components/PageSection.svelte";
</script>

<PageSection class="demo" id="demo">
  <img src="/combg/reporting_bg.png" slot="pre-container" alt="" class="hidden md:block pointer-events-none transform -translate-y-[35%] inset-x-0 bottom-0 absolute w-full filter mix-blend-screen"/>

  <DemoForm />
</PageSection>

<style>
  section{
    @apply pt-4;

    /*  this works to fade the image but affects the entire element, so will
    need to use some sort of pseudo element or just throw an <img> in there
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 70%,
      transparent 100%
    );
    */

    h2 {
      @apply text-[2rem] font-bold text-center mt-4;
    }

    p {
      @apply text-center px-10 mt-4 lg:max-w-[45rem] lg:mx-auto lg:py-16;
    }
  }
</style>
