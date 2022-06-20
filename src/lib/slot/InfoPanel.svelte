<script>
  export let title = "Title";
  export let icon = "icon";
</script>

<article class="info-panel {$$props.class}">
  <div class="icon">
    <span>{icon}</span>
  </div>
  <h3>{title}</h3>
  <p><slot /></p>
</article>

<style>
  article {
    @apply bg-[#000816] border-secondary border-4 rounded-3xl p-9;
    @apply max-w-md;
  }

  h3 {
    @apply text-[2rem] text-accent-content py-2;
  }

  .icon {
    @apply text-secondary;
  }
</style>
