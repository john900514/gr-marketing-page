<script>
  export let handler;
</script>

<button>
  <slot />
</button>

<style>
  button {
    @apply text-secondary bg-neutral-900 text-[1rem] leading-[1.2] lg:text-xl font-bold uppercase;
    @apply border-4 border-secondary rounded-2xl h-full px-8;
    @apply hover:bg-accent-content hover:text-secondary;
  }
</style>
