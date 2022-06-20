<script>
  import GridButton from "$lib/slot/GridButton.svelte";

  export let btns;
</script>

<div>
  {#each btns as btn}
    <GridButton>
      {btn}
    </GridButton>
  {/each}
</div>

<style>
  div {
    @apply grid grid-cols-3 gap-6 px-28 items-center;
    grid-template-rows: repeat(4, 6.25rem);
  }
</style>
