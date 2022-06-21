<script>
  let hovering = false;

  export let text, src;
</script>

<li
  on:mouseenter={() => (hovering = true)}
  on:mouseleave={() => (hovering = false)}
>
  <button>
    <img {src} alt />
  </button>
  {#if hovering}
    <span>{text}</span>
  {/if}
</li>

<style>
  li {
    @apply text-accent-content flex flex-col h-16 w-16 items-center justify-end;
    @apply hover:bg-primary;

    button {
      img {
        @apply pb-2;
      }
    }

    span {
      @apply absolute bottom-4;
      @apply text-xs text-accent-content uppercase whitespace-nowrap font-bold;
    }
  }
</style>
