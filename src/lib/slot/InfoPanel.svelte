<script>
  export let title = "Title";
</script>

<article id={title} class="relative {$$restProps.class}">
  <div class="icon">
    <slot name="icon" />
  </div>
  <h3>{title}</h3>
 <slot />
</article>

<style lang="postcss">
  h3 {
    @apply text-[2rem] py-2;
  }

  .icon {
    @apply text-secondary;
  }
</style>
