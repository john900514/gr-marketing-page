<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import Reporting_icon from "$lib/components/icons/Reporting_icon.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
</script>

<PageSection class="pt-8 md:min-h-[600px] md:py-64 lg:py-64">
  <img src="/combg/reporting_bg.png" slot="pre-container" alt="" class="hidden md:block pointer-events-none transform -translate-y-[35%] inset-x-0 bottom-0 absolute w-full filter mix-blend-screen scale-[140%]"/>

  <picture class="md:hidden">
    <source srcset="products/reporting.png" media="(min-width: 30rem)" />
    <img
      class="reporting-product-mobile"
      src="products/reporting_m.png"
      alt=""
    />
  </picture>

  <InfoPanel
    class_="mt-96 lg:mt-[40rem] mr-4 ml-auto max-w-[22rem] lg:max-w-[28rem] relative z-1"
    class="ml-[12vw] mr-[4vw] w-full max-w-[86vw] md:w-1/2 md:max-w-[40rem] md:pr-[10rem] transform md:translate-x-[36%] lg:max-w-[50rem]"
    title="Reporting"
  >
    <Reporting_icon slot="icon" />
    <div class="hidden md:block reporting-product">
      <picture>
        <source srcset="products/reporting.png" media="(min-width: 30rem)" />
        <img class="h-full w-auto" src="products/reporting_m.png" alt="" />
      </picture>
    </div>
    <p>
      Live reporting gives you the opportunity to manage your business in real
      time to make adjustments before it is too late.
      <br />
      <br />
      Be able to pivot accordingly with our business intelligence section to allow
      you to maximize your time and financials.
      <br />
      <br />
      Static reporting, projections, KPI functionalities, RPM, forecasting capabilities
      and much more.
    </p>
  </InfoPanel>
</PageSection>

<style style="postcss">
  .reporting-product-mobile {
    @apply min-w-[12rem] w-screen -mb-16 -translate-x-1;
    @screen sm {
      @apply min-w-[20rem] max-w-[36rem] transform -translate-x-[30%];
    }
  }

  .reporting-product {
    @apply absolute -z-[1] right-full transform translate-x-[25%] -translate-y-[10%] -top-32 bottom-32;
    width: max-content;
  }
</style>
