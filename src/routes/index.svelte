<script>
  import {
    HeroSection,
    KeyFeatures,
    WidgetCenterAndReporting,
    CalendarAndMassComms,
    EmployeeTrackingAndTasks,
    DripsAndLeadMemberMgmt,
    GoalsAndLeaderboards,
    UpcomingFeatures,
    DemoSection
  } from "$lib/page-sections";

</script>

<HeroSection />

<KeyFeatures/>

<WidgetCenterAndReporting />

<CalendarAndMassComms />

<EmployeeTrackingAndTasks />

<DripsAndLeadMemberMgmt />

<GoalsAndLeaderboards />

<DemoSection/>

<UpcomingFeatures/>

<style lang="postcss">
  /* consider factoring out a "Page Section" component that has this CSS, and handles setting up the BG images */
  :global(section){
    @apply overflow-x-hidden overflow-y-auto;
  }
</style>