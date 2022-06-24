<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import Leaderboards_icon from "$lib/components/icons/Leaderboards_icon.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
</script>

<PageSection class="pt-8 md:min-h-[600px] md:py-64 lg:py-64">
  <picture class="md:hidden">
    <source srcset="products/leaderboard.png" media="(min-width: 30rem)" />
    <img class="leaderboard-product-mobile" src="products/leaderboard_m.png" alt="" />
  </picture>
  <InfoPanel
    title="Leaderboards"
    class="mx-[4vw] w-full max-w-[92vw] md:w-1/2 md:max-w-[30rem] transform md:translate-x-[76%] lg:max-w-[32rem] mb-16 md:mb-64 lg:mb-128"
  >
    <Leaderboards_icon slot="icon" />
    <div class="hidden md:block leaderboard-product">
      <picture>
        <source srcset="products/leaderboard.png" media="(min-width: 30rem)" />
        <img src="products/leaderboard_m.png" alt="" class="h-full w-auto" />
      </picture>
    </div>

    <p>
      Leaderboards are customizable based on what is important to focus on. Easily
      change categories on a monthly basis to drive specific categories of the business.
      <br />
      <br />
      Track the top and bottom employees with ease. Allowing you the opportunity as
      an operator to focus on areas of need with employees that might need some extra
      attention with their training and development needs.
      <br />
      <br />
      In addition, see where your location ranks within your organization.
    </p>
  </InfoPanel>
</PageSection>

<style style="postcss">
  .leaderboard-product-mobile {
    @apply min-w-[12rem] w-screen -mb-16 -translate-x-16 relative z-[1];
    @screen sm {
      @apply min-w-[20rem] max-w-[42rem] transform translate-x-[30%];
    }
  }

  .leaderboard-product {
    @apply absolute right-full transform -translate-x-[5%] -translate-y-[10%] -inset-y-32;
    width: max-content;
  }
</style>
