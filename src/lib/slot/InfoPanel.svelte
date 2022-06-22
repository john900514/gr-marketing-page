<script>
  export let title = "Title";
</script>

<article class="info-panel {$$props.class}">
  <div class="icon">
    <slot name="icon" />
  </div>
  <h3>{title}</h3>
  <p class="relative"><slot /></p>
</article>

<style>
  h3 {
    @apply text-[2rem] py-2;
  }

  .icon {
    @apply text-secondary;
  }
</style>
