<script>
  import { fly } from "svelte/transition";
  import { iconList } from "$lib/icons.js";
  import HeaderButton from "./chunks/HeaderButton.svelte";
  import Gymrevenue from "$lib/components/icons/Gymrevenue.svelte";

  let userScrollPos;
  let scrWidth;
</script>

<svelte:window bind:innerWidth={scrWidth} bind:scrollY={userScrollPos} />

<header class:nav-visible={userScrollPos > 60}>
  <div class="wrap">
    {#if userScrollPos > 60 && scrWidth > 1024}
      <div
        class="complex"
        in:fly={{ y: -200, duration: 600 }}
        out:fly={{ y: -200, duration: 600 }}
      >
        <nav>
          <span class="gr-icon">
            <Gymrevenue/>
          </span>
          <ul>
            {#each iconList as { id, name, icon }, i}
              <HeaderButton {icon} text={name} {id} />
            {/each}
          </ul>
        </nav>
      </div>
    {:else}
      <div
        in:fly={{ y: -200, duration: 600 }}
        out:fly={{ y: -200, duration: 600 }}
        class="simple"
      >
        <span class="gr-icon">
          <Gymrevenue/>
        </span>
      </div>
    {/if}
  </div>
</header>

<style lang="postcss">
  header {
    @apply sticky top-0 w-full h-32 z-10 bg-transparent;

    div.wrap {
      @apply relative;
    }

    div.complex {
      @apply h-32 absolute bg-secondary w-full;

      nav {
        @apply h-full flex items-center justify-center;

        ul {
          @apply px-16 w-full justify-between items-center mb-8;
          @apply hidden lg:grid;
          grid-template-columns: repeat(10, auto);
          grid-template-rows: 1fr;
        }
      }
    }

    div.simple {
      @apply h-32 bg-secondary w-full absolute;

      span {
        @apply flex flex-col h-full justify-center mx-auto lg:mx-0;
      }
    }

    span.gr-icon {
      @apply max-w-xs pl-0 lg:pl-8;
    }
  }
</style>
