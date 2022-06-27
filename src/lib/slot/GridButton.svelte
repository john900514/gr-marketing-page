<script>
  export let handler = null;
</script>

{#if handler}
  <button on:click={handler}>
    <slot />
  </button>
{:else}
  <div>
    <slot />
  </div>
{/if}

<style lang="postcss">
  button,div{
    @apply btn btn-outline btn-secondary;
  }
  button,
  div {
    @apply text-secondary bg-neutral-900 text-[1rem] leading-[1.2] lg:leading-none lg:text-lg font-bold uppercase;
    @apply border-4 border-secondary rounded-2xl h-full px-8 duration-150;
    @apply hover:bg-accent-content hover:text-secondary flex items-center justify-center;
  }
</style>
