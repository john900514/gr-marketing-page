<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import Leads_members_icon from "$lib/components/icons/Leads_members_icon.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
</script>

<PageSection class="pt-8 md:min-h-[600px] md:py-64 lg:py-64">
  <picture class="md:hidden">
    <source srcset="products/lead.png" media="(min-width: 30rem)" />
    <img class="lead-product-mobile" src="products/lead_m.png" alt="" />
  </picture>
  <InfoPanel
    title="Lead and Member Management"
    class=" pt-16 mx-[4vw] w-full max-w-[92vw] md:w-1/2 md:max-w-[32rem] transform md:translate-x-[66%] lg:max-w-[35rem] mb-16 md:mb-64 lg:mb-128"
  >
    <Leads_members_icon slot="icon" />
    <div class="hidden md:block lead-product">
      <picture>
        <source srcset="products/lead.png" media="(min-width: 30rem)" />
        <img src="products/lead_m.png" alt="" class="h-full w-auto" />
      </picture>
    </div>

    <p>
      The lead and member sourcing is a suite of independent but key features that
    log and keep track of an interested customer/consumer and their journey from
    interested party to paying member.
    </p>
  </InfoPanel>
</PageSection>

<style style="postcss">
  .lead-product-mobile {
    @apply min-w-[12rem] w-screen -mb-16 -translate-x-16 relative z-[1];
    @screen sm {
      @apply min-w-[20rem] max-w-[42rem] transform translate-x-[30%];
    }
  }

  .lead-product {
    @apply absolute right-full transform translate-x-[-5%] translate-y-[30%] -inset-y-32;
    width: max-content;
  }
</style>
