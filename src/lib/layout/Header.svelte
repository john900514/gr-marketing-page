<script>
  import { fly } from "svelte/transition";
  import { iconList } from "$lib/icons.js";
  import HeaderButton from "./chunks/HeaderButton.svelte";
  import Gymrevenue from "$lib/components/icons/Gymrevenue.svelte";

  let userScrollPos;
</script>

<svelte:window bind:scrollY={userScrollPos} />

<header class:nav-visible={userScrollPos > 60}>
  {#if userScrollPos > 60}
    <div
      class="complex"
      in:fly={{ y: -200, duration: 250 }}
      out:fly={{ y: -200, duration: 250 }}
    >
      <nav>
        <span class="gr-icon">
          <img src="/icons/gymrevenue.svg" alt="gym revenue" />
        </span>
        <ul>
          {#each iconList as { index, name, src }, i}
            <HeaderButton {src} text={name} />
          {/each}
        </ul>
      </nav>
    </div>
  {:else}
    <div
      in:fly={{ y: -200, duration: 250 }}
      out:fly={{ y: -200, duration: 250 }}
      class="simple"
    >
      <span class="gr-icon">
        <img src="/icons/gymrevenue.svg" alt="gym revenue" />
      </span>
    </div>
  {/if}
</header>

<style>
  header {
    @apply sticky w-full h-[7rem] top-0 z-10 bg-[#010b18];

    div.complex {
      @apply h-[7rem] absolute bg-secondary w-full;

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
      @apply h-[7rem] bg-secondary w-full absolute;

      span {
        @apply flex flex-col h-full justify-center mx-auto lg:mx-0;
      }
    }

    span.gr-icon {
      @apply max-w-xs pl-0 lg:pl-8;
    }
  }
</style>
