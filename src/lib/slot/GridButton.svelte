<script>
  export let handler;

  // w: 332
  // h: 100
</script>

<button>
  <slot />
</button>

<style>
  button {
    @apply text-secondary bg-neutral-900 text-xl font-bold uppercase;
    @apply border-4 border-secondary rounded-2xl h-full px-8;
    @apply hover:bg-accent-content hover:text-secondary;
  }
</style>
