<script>
  import {
    HeroSection,
    KeyFeatures,
    WidgetSection,
    ReportingSection,
    CalendarSection,
    MassCommsSection,
    EmployeeSection,
    TaskSection,
    DripSection,
    LeadAndMemberSection,
    GoalsSection,
    LeaderboardSection,
    UpcomingFeatures,
    DemoSection,
    VideoSection,
    NewsSection
  } from "$lib/page-sections";

</script>

<HeroSection />

<KeyFeatures/>

<WidgetSection />

<ReportingSection />

<CalendarSection/>

<MassCommsSection />

<EmployeeSection />

<VideoSection/>

<TaskSection />

<DripSection />

<LeadAndMemberSection />

<GoalsSection />

<LeaderboardSection/>

<DemoSection/>

<UpcomingFeatures/>

<NewsSection/>

<style lang="postcss">
  /* consider factoring out a "Page Section" component that has this CSS, and handles setting up the BG images */
  :global(section){
    @apply overflow-x-hidden overflow-y-auto;
  }
</style>