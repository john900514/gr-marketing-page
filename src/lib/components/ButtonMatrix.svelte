<script>
  import GridButton from "$lib/slot/GridButton.svelte";

  export let btns,
    title = "",
    showbg = false;
</script>

<div class="container" class:showbg>
  {#if showbg}
    <p>
      This Visionary single-source platform <wbr />
      seamlessly integrates all of the daily <wbr />
      tasks and data that gym owners and <wbr />
      operators need to accurately assess <wbr />
      operations & performance. With ONE <wbr />
      simple login, GymRevenue gives you the <wbr />
      ability to switch between GR <wbr />
      components to gain critical insight into <wbr />
      your organization.
    </p>
  {/if}

  <h2>{title}</h2>

  <div class="matrix-container">
    <div class="btn-matrix">
      {#each btns as btn}
        <GridButton>
          {btn}
        </GridButton>
      {/each}
    </div>
  </div>

  <div class="m-btn-group">
    <span>o</span>
    <span>o</span>
    <span>o</span>
  </div>
</div>

<style>
  div.showbg {
    @apply bg-cover bg-no-repeat;
    background-image: url("combg/matrix1_m_bg.png");
  }

  div.container {
    @apply relative;
    @apply bg-cover bg-no-repeat w-full;

    /*   ::-webkit-scrollbar {
    @apply hidden;
  } */

    p {
      @apply text-center relative max-w-full px-6;
    }

    h2 {
      @apply text-[2rem] font-bold text-accent-content text-center py-8;
    }

    div.m-btn-group {
      @apply flex justify-center mt-6;

      span {
        @apply px-4;
      }
    }
  }

  div.matrix-container {
    @apply overflow-x-scroll;
  }

  div.btn-matrix {
    @apply grid gap-6 px-28 items-center w-[80rem];
    grid-template-rows: repeat(3, 6.25rem);
    grid-template-columns: repeat(4, minmax(0, 14.5rem));

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, minmax(0, 14.5rem));
    }
  }
</style>
