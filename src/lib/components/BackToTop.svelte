<script>
  import { onMount } from "svelte";
  let isHovering = false;
  import { spring } from "svelte/motion";

  const initial_transforms = {
    translateX0: 0,
    translateY0: 0,
    rotate0: 0,
    translateX1: 0,
    translateY1: 29.895,
    rotate1: 0,
    translateX2: 0,
    translateY2: 59.368,
    rotate2: 0,
  };

  const hover_transforms = {
    translateX0: 0,
    translateY0: 42.575,
    rotate0: -45,
    translateX1: 42.932,
    translateY1: 0,
    rotate1: 45,
    translateX2: 49.07,
    translateY2: 14.122,
    rotate2: 90,
  };
  const transforms = spring(initial_transforms);

  $: {
    if (isHovering) {
      transforms.set(hover_transforms);
    } else {
      transforms.set(initial_transforms);
    }
  }

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  let canHover = false;

  const setCanHover = () => {
    canHover = window.matchMedia("(hover: hover)").matches;
  };
  onMount(setCanHover);
</script>

<svelte:window on:resize={setCanHover} />

{#if canHover}
  <button
    on:click={handleClick}
    on:mouseenter={() => (isHovering = true)}
    on:mouseleave={() => (isHovering = false)}
    {...$$restProps}
  >
    <svg
      id="back_to_top_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="60.211"
      height="72"
      viewBox="0 0 85.507 104.333"
    >
      <rect
        id="Rectangle_1575"
        data-name="Rectangle 1575"
        width="60.211"
        height="12.632"
        rx="6.316"
        fill="currentColor"
        transform="translate({$transforms.translateX0} {$transforms.translateY0}) rotate({$transforms.rotate0})"
      />
      <rect
        id="Rectangle_1576"
        data-name="Rectangle 1576"
        width="60.211"
        height="12.632"
        rx="6.316"
        transform="translate({$transforms.translateX1} {$transforms.translateY1}) rotate({$transforms.rotate1})"
        fill="currentColor"
      />
      <rect
        id="Rectangle_1577"
        data-name="Rectangle 1577"
        width="60.211"
        height="12.632"
        rx="6.316"
        transform="translate({$transforms.translateX2} {$transforms.translateY2}) rotate({$transforms.rotate2})"
        fill="currentColor"
      />
    </svg>
  </button>
{:else}
  <button on:click={handleClick} class="mobile">
    <svg xmlns="http://www.w3.org/2000/svg" width="24.413" height="21.201" viewBox="0 0 24.413 21.201">
        <path id="Polygon_3" data-name="Polygon 3" d="M11.34,1.505a1,1,0,0,1,1.733,0L23.55,19.7a1,1,0,0,1-.867,1.5H1.73a1,1,0,0,1-.867-1.5Z" fill="#fff"/>
      </svg>      
  </button>
{/if}

<style>
  button {
    @apply m-auto;
  }
  .mobile{
    @apply bg-secondary rounded-l-full fixed right-0 bottom-[4rem] p-4 z-10;
  }
</style>
