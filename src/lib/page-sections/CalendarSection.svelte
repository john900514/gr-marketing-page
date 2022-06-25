<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import Calendar_icon from "$lib/components/icons/Calendar_icon.svelte";

  import PageSection from "$lib/components/PageSection.svelte";
</script>

<PageSection class="pt-8 md:min-h-[600px] md:py-32">
  <img slot="pre-container" src="/combg/calendar_bg.png" alt="" class="hidden md:block pointer-events-none object-cover absolute transform translate-x-[20%] scale-x-[170%] -left-[5%] bottom-0  w-[140vw] filter mix-blend-screen"/>

  <picture class="md:hidden">
    <source srcset="products/calendar.png" media="(min-width: 30rem)" />
    <img class="calendar-product-mobile" src="products/calendar_m.png" alt="" />
  </picture>

  <InfoPanel
    title="Calendar"
    class="mr-[8vw] w-full max-w-[92vw] md:w-1/2 md:max-w-[30rem] transform md:-translate-x-[66%] mb-16 md:mb-64 lg:mb-128"
  >
    <Calendar_icon slot="icon" />
    <div class="hidden md:block calendar-product">
      <picture>
        <source srcset="products/calendar.png" media="(min-width: 30rem)" />
        <img class="h-full w-auto" src="products/calendar_m.png" alt="" />
      </picture>
    </div>

    <p>
      The calendar section is a key feature that is devoted to management of
      time-sensitive tasks, appointments, meetings, or any action that can be
      described as an "event" within your customizable experience. Users can
      create new events sorted into categories or tags, while other events
      derived from other Features generate automatically.
      <br />
      <br />
      Users can share their custom events with other users across any of their authorized
      teams within GymRevenue. Additionally, calendar events can trigger alerts and
      reminders either internally or via emails or text messages.
    </p>
  </InfoPanel>
</PageSection>

<style style="postcss">
  .calendar-product-mobile {
    @apply min-w-[12rem] w-screen -mb-16 translate-x-16 relative z-[1];
    @screen sm {
      @apply min-w-[20rem] max-w-[42rem] transform translate-x-[30%];
    }
  }

  .calendar-product {
    @apply absolute left-full transform -translate-x-[15%] translate-y-[25%] -inset-y-32 max-w-[50rem];
    width: max-content;
  }

  /* img.calendar-product {
    @apply absolute h-auto max-w-[40rem] lg:max-w-[65rem] top-0 -translate-y-64 -translate-x-32;
    @apply lg:translate-x-[10rem] lg:translate-y-[0];
  } */
</style>
