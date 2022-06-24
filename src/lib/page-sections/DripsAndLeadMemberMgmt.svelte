<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import Auto_drip_icon from "$lib/components/icons/Auto_drip_icon.svelte";
  import Leads_members_icon from "$lib/components/icons/Leads_members_icon.svelte";
</script>

<section>
  <InfoPanel class="drip-panel relative max-w-[22rem] ml-auto mr-4 lg:ml-[5rem] lg:pb-[5rem] lg:max-w-[50rem] lg:pr-[12rem  z-[8]" title="Automated Drip Functionality">
    <Auto_drip_icon slot="icon" />

    <picture>
      <source srcset="products/calendar.png" media="(min-width: 1024px)" />
      <img class="drip-product" src="products/drip_m.png" alt="" />
    </picture>
    This feature enables clients to create dripp campaigns and configure their operation,
    such as linking it to an audience, linking SMS and email templates to them and
    deciding when and how often the communications should relay.
  </InfoPanel>

  <picture>
    <source srcset="combg/calendar_bg.png" media="(min-width: 1024px" />
    <img class="dripbg hidden lg:block" src="combg/calendar_bg.png" alt="" />
  </picture>

  <InfoPanel class="relative max-w-[22rem] lg:max-w-[30rem] mt-64 pt-16 ml-4 mr-auto lg:mt-[60rem] lg:mr-12 lg:ml-auto" title="Lead and Member Management">
    <Leads_members_icon slot="icon" />
    <picture>
      <source srcset="products/lead.png" media="(min-width: 1024px)" />
      <img class="lead-product" src="products/lead_m.png" alt="" />
    </picture>

    The lead and member sourcing is a suite of independent but key features that
    log and keep track of an interested customer/consumer and their journey from
    interested party to paying member.
  </InfoPanel>

  <picture class="hidden lg:block">
    <source srcset="combg/employee_bg.png" media="(min-width: 1024px)" />
    <img class="employbg" src="combg/employee_bg.png" alt="" />
  </picture>
</section>

<style style="postcss">
  /* AUTOMATED DRIP & MEMBER MANAGEMENT */
  section {
    @apply py-64 lg:pt-[80rem] lg:min-h-[300vh];
  }

  img.dripbg {
    @apply absolute object-contain max-w-[150rem] w-[300rem] max-h-[80rem] rotate-[4deg] scale-x-[1] translate-x-[-40rem] translate-y-[-30rem];
  }

  img.drip-product {
    @apply absolute h-auto max-w-[40rem] lg:max-w-[80rem] top-0;
    @apply translate-x-[-10rem] translate-y-[26rem];
    @apply lg:translate-x-[10rem] lg:translate-y-[-25rem];
  }

  img.lead-product {
    @apply absolute h-auto max-w-[50rem] lg:max-w-[90rem] scale-110 top-0 translate-x-[-20rem] translate-y-[-20rem];
    @apply lg:translate-x-[-80rem] lg:translate-y-[-20rem] z-[1];
  }

  img.employbg {
    @apply absolute object-cover max-w-[100rem];
  }

  /* GLOBAL DRIP */
  .drip-panel {
    p {
      @apply relative;
    }
  }

</style>
