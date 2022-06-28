<script>
  import { fly } from "svelte/transition";
  import { iconList } from "$lib/icons.js";
  import HeaderButton from "./chunks/HeaderButton.svelte";
  import Gymrevenue from "$lib/components/icons/Gymrevenue.svelte";
  import MobileMenu from "./MobileMenu.svelte";

  let userScrollPos;
  let scrWidth;
</script>

<svelte:window bind:innerWidth={scrWidth} bind:scrollY={userScrollPos} />

<header class:nav-visible={userScrollPos > 60}>
  <div class="relative">
    {#if userScrollPos > 60 && scrWidth > 1024}
      <div
        class="complex"
        in:fly={{ y: -200, duration: 600 }}
        out:fly={{ y: -200, duration: 600 }}
      >
        <nav class="inner-container">
          <span class="gr-icon">
            <Gymrevenue />
          </span>
          <ul class="mt-2">
            {#each iconList as { id, name, icon }, i}
              <HeaderButton {icon} text={name} {id} />
            {/each}
            <a class="news-btn self-end" href="#news">News</a>
          </ul>
        </nav>
      </div>
    {:else}
      <div
        in:fly={{ y: -200, duration: 600 }}
        out:fly={{ y: -200, duration: 600 }}
        class="simple"
      >
        <nav class="inner-container">
          <span class="gr-icon">
            <Gymrevenue class="max-w-[70vw]" />
          </span>
          <div class="flex flex-row flex-grow items-center justify-end">
            <MobileMenu class="md:hidden">
              <a  href="#news" class="news-btn">News</a>
            </MobileMenu>
            <a class="news-btn !hidden md:!block" href="#news">News</a>
          </div>
        </nav>
      </div>
    {/if}
  </div>
</header>

<style lang="postcss">
  header {
    @apply sticky top-0 w-full h-32 z-10 bg-transparent;

    div.complex {
      @apply h-32 absolute bg-secondary w-full;

      nav {
        @apply h-full flex items-center justify-center;

        ul {
          @apply px-16 w-full justify-between items-center mb-8;
          @apply hidden lg:grid;
          grid-template-columns: repeat(11, auto);
          grid-template-rows: 1fr;
        }
      }
    }

    div.simple {
      @apply h-32 bg-secondary w-full absolute flex flex-row items-center;

      span {
        @apply flex flex-col h-full justify-center mx-auto lg:mx-0;
      }
    }

    span.gr-icon {
      @apply max-w-xs mr-8;
    }
  }
  .inner-container {
    @apply px-4 md:px-0 container flex flex-row items-center flex-grow;
  }
  .news-btn {
    @apply btn rounded-full;
  }
</style>
