<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import Goals_icon from "$lib/components/icons/Goals_icon.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
</script>

<PageSection class="pt-8 md:min-h-[600px] md:py-32">
  <img slot="pre-container" src="/combg/calendar_bg.png" alt="" class="hidden md:block pointer-events-none object-cover absolute transform -translate-x-[20%] scale-x-[170%]  -rotate rotate-[160deg] -left-[5%] bottom-0  w-[140vw] filter mix-blend-screen"/>
  <picture class="md:hidden">
    <source srcset="products/goals.png" media="(min-width: 30rem)" />
    <img class="goal-product-mobile" src="products/goals_m.png" alt="" />
  </picture>
  <InfoPanel
    title="Goals"
    class="mx-[4vw] w-full max-w-[92vw] md:w-1/2 md:max-w-[40rem] md:pr-[16rem] transform md:-translate-x-[36%] lg:max-w-[50rem] mb-16 md:mb-64 lg:mb-128"
  >
    <Goals_icon slot="icon" />
    <div class="hidden md:block goal-product">
      <picture>
        <source srcset="products/goals.png" media="(min-width: 30rem)" />
        <img src="products/goals_m.png" alt="" class="h-full w-auto" />
      </picture>
    </div>

    <p>
      For owners & operators, goal setting has forever been a long tedious pain-point
    within their walls that takes priceless time away from their teams. GR introduces
    an effective, easy and monumental way to set goals. As easy as it is to set one,
    it is just as easy to set 500 locations.
    <br />
    <br />
    Adjust goals manually, rolling averages, or business applied rules to automatically
    set your clubs performance goals to effortlessly review and send out through
    the system.
    </p>
  </InfoPanel>
</PageSection>

<style style="postcss">
  .goal-product-mobile {
    @apply min-w-[12rem] w-screen -mb-16 translate-x-[25%] relative z-[1];
    @screen sm {
      @apply min-w-[20rem] max-w-[42rem] transform translate-x-[30%];
    }
  }

  .goal-product {
    @apply absolute left-full transform -translate-x-[25%]  -inset-y-[36%] scale-75 lg:scale-100;
    width: max-content;
  }
</style>
