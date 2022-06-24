<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import Calendar_icon from "$lib/components/icons/Calendar_icon.svelte";
  import Mass_comm_icon from "$lib/components/icons/Mass_comm_icon.svelte";
  import CalendarIcon from "$lib/components/icons/Calendar_icon.svelte";
</script>

<section>
  <InfoPanel class="max-w-[26rem] lg:max-w-[28rem] lg:ml-[4rem] relative ml-4 mr-auto" title="Calendar" icon={CalendarIcon}>
    <Calendar_icon slot="icon" />
    <picture>
      <source srcset="products/calendar.png" media="(min-width: 1024px)" />
      <img class="calendar-product" src="products/calendar_m.png" alt="" />
    </picture>
    The calendar section is a key feature that is devoted to management of time-sensitive
    tasks, appointments, meetings, or any action that can be described as an "event"
    within your customizable experience. Users can create new events sorted into
    categories or tags, while other events derived from other Features generate automatically.
    <br />
    <br />
    Users can share their custom events with other users across any of their authorized
    teams within GymRevenue. Additionally, calendar events can trigger alerts and
    reminders either internally or via emails or text messages.
  </InfoPanel>

  <InfoPanel
    class="max-w-[26rem] lg:max-w-[30rem] mt-96 relative mr-4 ml-auto"
    title="Mass Communications"
  >
    <Mass_comm_icon slot="icon" />
    <picture>
      <source srcset="products/masscomm.png" media="(min-width: 1024px)" />
      <img class="masscomm-product" src="products/masscomm_m.png" alt="" />
    </picture>
    Our Mass Communications component is designed to cater to all forms of messaging.
    Whether you are speaking directly to an individual, featuring your best promotion
    to a specific or broader audience, or creating complex decision tree journeys
    to guide your prospects through your sales funnel. GymRevenue allows you to communicate
    your message without the miscommunication of 3rd party tools.
    <br />
    <br />
    From pre-made templates to allowing you the freedom to create your own specific
    template by specific needs, our mass communication sections gives the operators
    and owners the ability to do everything they need within one section to effectively
    manage expectations for communications with leads and members.
  </InfoPanel>
</section>

<style style="postcss">
  /* CALENDAR & MASS COMMUNICATIONS  */
  section {
    @apply pt-[20rem] lg:pb-96;
    background-image: url("/combg/calendar_bg.png"),
      url("/combg/reporting_bg.png");
    background-repeat: no-repeat;
    background-position: top center, bottom center;
  }

  img.calendar-product {
    @apply absolute h-auto max-w-[40rem] lg:max-w-[65rem] top-0 -translate-y-64 -translate-x-32;
    @apply lg:translate-x-[10rem] lg:translate-y-[0];
  }

  img.masscomm-product {
    @apply absolute h-auto max-w-[40rem] top-0 translate-x-[4rem] translate-y-[-20rem];
    @apply lg:max-w-[60rem] lg:right-0 lg:translate-x-[-18rem] lg:mt-36;
  }
</style>
