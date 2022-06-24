<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import Goals_icon from "$lib/components/icons/Goals_icon.svelte";
  import Leaderboards_icon from "$lib/components/icons/Leaderboards_icon.svelte";
</script>

<section>
  <InfoPanel class="relative max-w-[24rem] lg:max-w-[30rem] lg:pr-20 pt-16 mr-4 ml-auto lg:mx-auto lg:ml-[5rem]" title="Goals">
    <Goals_icon slot="icon" />
    <picture>
      <source srcset="products/goals.png" media="(min-width: 1024px)" />
      <img class="goals-product" src="products/goals_m.png" alt="" />
    </picture>
    For owners & operators, goal setting has forever been a long tedious pain-point
    within their walls that takes priceless time away from their teams. GR introduces
    an effective, easy and monumental way to set goals. As easy as it is to set one,
    it is just as easy to set 500 locations.
    <br />
    <br />
    Adjust goals manually, rolling averages, or business applied rules to automatically
    set your clubs performance goals to effortlessly review and send out through
    the system.
  </InfoPanel>

  <InfoPanel class="relative max-w-[22rem] mt-64 mb-28 ml-4 mr-auto lg:max-w-[26rem] lg:mr-[3rem] lg:ml-auto" title="Leaderboards">
    <Leaderboards_icon slot="icon" />
    <picture>
      <source srcset="products/leaderboard.png" media="(min-width: 1024px)" />
      <img
        class="leaderboard-product"
        src="products/leaderboard_m.png"
        alt=""
      />
    </picture>
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
  </InfoPanel>
</section>

<style lang="postcss">
  .goals-leaderboards {
    @apply lg:pt-[30rem] bg-no-repeat bg-left;
    background-image: url("combg/calendar_bg.png");
    background-attachment: local;
    background-size: 130% 50%;
    background-position-x: center;
    background-position-y: left;
  }
  img.goals-product {
    @apply absolute h-auto max-w-[40rem] lg:max-w-[80rem] top-0 translate-y-[-15rem] translate-x-0;
    @apply lg:translate-x-[12rem] lg:translate-y-[-20rem];
  }

  img.leaderboard-product {
    @apply absolute h-auto max-w-[40rem] top-0 lg:max-w-[80rem] translate-x-[-18rem] translate-y-[-22rem];
    @apply lg:translate-x-[-75rem] lg:translate-y-[-30rem];
  }
</style>
