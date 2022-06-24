<script>
  import DemoForm from "$lib/components/DemoForm.svelte";
</script>

<section class="demo">
  <DemoForm />
</section>

<style>
  section{
    @apply pt-4 lg:bg-top bg-no-repeat;
    background-position-y: 65%;
    background-color: #000616;
    background-image: url("/combg/matrix1_bg.png");

    /*  this works to fade the image but affects the entire element, so will
    need to use some sort of pseudo element or just throw an <img> in there
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 70%,
      transparent 100%
    );
    */

    @media (min-width: 1024px) {
      background-image: url("/combg/matrix1_bg.png");
      background-attachment: local;
      background-size: 130% 80%;
    }

    h2 {
      @apply text-[2rem] font-bold text-center mt-4;
    }

    p {
      @apply text-center px-10 mt-4 lg:max-w-[45rem] lg:mx-auto lg:py-16;
    }
  }
</style>
