<script>
  import { fade, fly } from "svelte/transition";

  let userScrollPos;
</script>

<svelte:window bind:scrollY={userScrollPos} />

{#if userScrollPos > 60}
  <header
    in:fly={{ y: -200, duration: 250 }}
    out:fly={{ y: -200, duration: 250 }}
  >
    <nav>
      <span>GYMREVENUE</span>
      <ul>
        {#each Array(10) as icon}
          <li>icon</li>
        {/each}
      </ul>
    </nav>
  </header>
{:else}
  <header
    in:fly={{ y: -200, duration: 250 }}
    out:fly={{ y: -200, duration: 250 }}
    class="simple"
  >
    <span>GYMREVENUE</span>
  </header>
{/if}

<style>
  header {
    @apply h-[6.25rem];
    @apply bg-secondary fixed w-full;

    nav ul {
      @apply flex justify-between w-full;
    }
  }

  header.simple {
    @apply h-[7.825rem] bg-red-400;
  }
</style>
