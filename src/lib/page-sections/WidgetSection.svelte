<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import Widget_center_icon from "$lib/components/icons/Widget_center_icon.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
</script>

<PageSection class="pt-8 md:min-h-[600px] md:pt-64 md:pb-16">
  <picture class="md:hidden">
    <source srcset="products/widget.png" media="(min-width: 30rem)" />
    <img class="widget-product-mobile" src="products/widget_m.png" alt="" />
  </picture>
  <InfoPanel
    title="Widget Center"
    class="mx-[4vw] w-full max-w-[92vw] md:w-1/2 md:max-w-[40rem] md:pr-[10rem] transform md:-translate-x-[36%] lg:max-w-[50rem] mb-16 md:mb-64 lg:mb-128"
  >
    <Widget_center_icon slot="icon" />
    <div class="hidden md:block widget-product">
      <picture>
        <source srcset="products/widget.png" media="(min-width: 30rem)" />
        <img src="products/widget_m.png" alt="" class="h-full w-auto" />
      </picture>
    </div>

    <p>
      The widget center is your hub for customization<wbr />
      pertaining to your access to your account. Add / <wbr />
      remove and share specific widgets that are informative <wbr />
      to your business.
      <br />
      <br />
      Widgets are isolated by type and category and have <wbr />
      the ability to be as customized to your specific needs <wbr />
      and desires.
    </p>
  </InfoPanel>
</PageSection>

<style style="postcss">
  .widget-product-mobile {
    @apply min-w-[12rem] w-screen -mb-16 translate-x-16 relative z-[1];
    @screen sm {
      @apply min-w-[20rem] max-w-[36rem] transform translate-x-[30%];
    }
  }

  .widget-product {
    @apply absolute left-full transform -translate-x-[25%] -translate-y-[10%] -inset-y-32;
    width: max-content;
  }
</style>
