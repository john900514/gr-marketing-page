<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import Auto_drip_icon from "$lib/components/icons/Auto_drip_icon.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
</script>

<PageSection class="pt-8 md:min-h-[600px] md:pt-64 pb-32">
  <img slot="pre-container" src="/combg/calendar_bg.png" alt="" class="hidden md:block pointer-events-none object-cover absolute transform translate-x-[20%] scale-x-[170%]  -rotate -rotate-[160deg] -left-[5%] bottom-0  w-[140vw] filter mix-blend-screen"/>
  <picture class="md:hidden">
    <source srcset="products/drip.png"  media="(min-width: 30rem)" />
      <img class="drip-product-mobile" src="products/drip_m.png" alt="" />
  </picture>
  <InfoPanel
    title="Automated Drip Functionality"
    class="mx-[4vw] w-full max-w-[92vw] md:w-1/2 md:max-w-[40rem] md:pr-[10rem] transform md:-translate-x-[36%] lg:max-w-[50rem] mb-16 md:mb-64 lg:mb-128"
  >
    <Auto_drip_icon slot="icon" />
    <div class="hidden md:block drip-product">
      <picture>
        <source srcset="products/drip.png"  media="(min-width: 30rem)" />
        <img src="products/drip_m.png" alt="" class="h-full w-auto" />
      </picture>
    </div>

    <p>
      This feature enables clients to create dripp campaigns and configure their operation,
    such as linking it to an audience, linking SMS and email templates to them and
    deciding when and how often the communications should relay.
    </p>
  </InfoPanel>
</PageSection>

<style style="postcss">
  .drip-product-mobile {
    @apply min-w-[12rem] w-screen -mb-16 translate-x-16 relative z-[1];
    @screen sm {
      @apply min-w-[20rem] max-w-[42rem] transform translate-x-[30%];
    }
  }

  .drip-product {
    @apply absolute left-full transform -translate-x-[25%] -translate-y-[10%] -inset-y-32;
    width: max-content;
  }
</style>
