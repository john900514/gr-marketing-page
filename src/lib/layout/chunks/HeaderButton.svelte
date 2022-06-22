<script>
  let hovering = false;

  export let text, src, id;
</script>

<a
  href={id}
  on:mouseenter={() => (hovering = true)}
  on:mouseleave={() => (hovering = false)}
>
  <p>
    <img {src} alt />
  </p>
  {#if hovering}
    <span>{text}</span>
  {/if}
</a>

<style>
  a {
    @apply text-accent-content flex flex-col h-16 w-16 items-center justify-end;
    @apply hover:bg-primary;

    p {
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
