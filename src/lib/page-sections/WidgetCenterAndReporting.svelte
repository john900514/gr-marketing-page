<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import Widget_center_icon from "$lib/components/icons/Widget_center_icon.svelte";
  import Reporting_icon from "$lib/components/icons/Reporting_icon.svelte";
</script>

<section>
  <InfoPanel title="Widget Center" class="max-w-[20rem] lg:max-w-[40rem] lg:pr-[20rem]">
    <Widget_center_icon slot="icon" />

    <picture>
      <source srcset="products/widget.png" media="(min-width: 1024px)" />
      <img class="widget-product" src="products/widget_m.png" alt="" />
    </picture>

    The widget center is your hub for customization<wbr />
    pertaining to your access to your account. Add / <wbr />
    remove and share specific widgets that are informative <wbr />
    to your business.
    <br />
    <br />
    Widgets are isolated by type and category and have <wbr />
    the ability to be as customized to your specific needs <wbr />
    and desires.
  </InfoPanel>

  <InfoPanel class="mt-96 lg:mt-[40rem] mr-4 ml-auto max-w-[22rem] lg:max-w-[28rem]" title="Reporting">
    <Reporting_icon slot="icon" />
    <picture>
      <source srcset="products/reporting.png" media="(min-width: 1024px)" />
      <img class="reporting-product" src="products/reporting_m.png" alt="" />
    </picture>
    Live reporting gives you the opportunity to manage your business in real time
    to make adjustments before it is too late.
    <br />
    <br />
    Be able to pivot accordingly with our business intelligence section to allow
    you to maximize your time and financials.
    <br />
    <br />
    Static reporting, projections, KPI functionalities, RPM, forecasting capabilities
    and much more.
  </InfoPanel>
</section>

<style style="postcss">
  section {
    @apply pt-80 relative z-[5] bg-no-repeat bg-bottom;
    @media (min-width: 1024px) {
      background-image: url("/combg/reporting_bg.png");
    }
  }

  .widget-product {
    @apply absolute max-w-[40rem] lg:max-w-[80rem] h-auto translate-x-[-10rem] translate-y-[-29rem];
    @apply lg:right-0 lg:translate-x-[62rem] lg:translate-y-[-28rem];
  }

  .reporting-product {
    @apply absolute z-[-1] max-w-[40rem] lg:max-w-[50rem] h-auto translate-x-[-4rem] translate-y-[-27.5rem];
    @apply lg:translate-x-[-34rem] lg:translate-y-[-30rem] lg:left-0;
  }

  /* p {
      @apply relative lg:relative;
    } */
</style>
