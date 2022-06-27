<script>
  let hovering = false;

  export let text, icon, id;
</script>

<a
  href={id}
  on:mouseenter={() => (hovering = true)}
  on:mouseleave={() => (hovering = false)}
>
  <svelte:component this={icon} />
  {#if hovering}
    <span>{text}</span>
  {/if}
</a>

<style lang="postcss">
  a {
    @apply text-accent-content flex flex-col h-16 w-16 items-center justify-end pb-4;
    @apply hover:bg-primary;

    span {
      @apply absolute bottom-4;
      @apply text-xs text-accent-content uppercase whitespace-nowrap font-bold;
    }
  }
</style>
