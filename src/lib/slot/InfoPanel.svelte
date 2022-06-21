<script>
  export let title = "Title";
</script>

<article class="info-panel {$$props.class}">
  <div class="icon">
    <slot name="icon" />
  </div>
  <h3>{title}</h3>
  <p><slot /></p>
</article>

<style>
  article {
    @apply max-w-[26rem] lg:max-w-md;
  }

  h3 {
    @apply text-[2rem] py-2;
  }

  .icon {
    @apply text-secondary;
  }
</style>
