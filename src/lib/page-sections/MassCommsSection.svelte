<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import Mass_comm_icon from "$lib/components/icons/Mass_comm_icon.svelte";
import PageSection from "$lib/components/PageSection.svelte";
</script>


<PageSection class="pt-8 md:min-h-[600px] md:pb-[20rem] md:pt-32 lg:pb-[32rem]">

  <img src="/combg/reporting_bg.png" slot="pre-container" alt="" class="hidden md:block pointer-events-none transform -translate-y-[35%] inset-x-0 bottom-0 absolute w-full filter mix-blend-screen scale-[120%]"/>

  <picture class="md:hidden">
    <source srcset="products/masscomm.png" media="(min-width: 30rem)" />
    <img
      class="masscomm-product-mobile"
      src="products/masscomm_m.png"
      alt=""
    />
  </picture>

  <InfoPanel
    class_="mt-96 lg:mt-[40rem] mr-4 ml-auto max-w-[22rem] lg:max-w-[28rem] relative z-1"
    class="ml-[8vw] w-full max-w-[92vw] md:w-1/2 md:max-w-[25rem] transform md:translate-x-[70%] lg:max-w-[32rem]"
    title="Mass Communications"
  >
  <Mass_comm_icon slot="icon" />
  <div class="hidden md:block masscomm-product">
      <picture>
        <source srcset="products/masscomm.png"  media="(min-width: 30rem)"/>
        <img class="h-full w-auto" src="products/masscomm_m.png" alt="" />
      </picture>
    </div>
    <p>    Our Mass Communications component is designed to cater to all forms of messaging.
      Whether you are speaking directly to an individual, featuring your best promotion
      to a specific or broader audience, or creating complex decision tree journeys
      to guide your prospects through your sales funnel. GymRevenue allows you to communicate
      your message without the miscommunication of 3rd party tools.
      <br />
      <br />
      From pre-made templates to allowing you the freedom to create your own specific
      template by specific needs, our mass communication sections gives the operators
      and owners the ability to do everything they need within one section to effectively
      manage expectations for communications with leads and members.</p>
  </InfoPanel>
</PageSection>

<style style="postcss">
  .masscomm-product-mobile {
    @apply min-w-[12rem] w-screen -mb-16 relative z-[1] transform translate-x-[16%];
    @screen sm {
      @apply min-w-[20rem] max-w-[42rem] transform -translate-x-[30%];
    }
  }

  .masscomm-product {
    @apply absolute -z-[1] right-full transform translate-x-[5%] translate-y-[8rem] top-0 -bottom-64 scale-75 lg:scale-100;
    @screen lg{
      @apply  translate-x-[15%] translate-y-[17%];
    }
    width: max-content;
  }

    /* CALENDAR & MASS COMMUNICATIONS  */
  /* section {
    @apply pt-[20rem] lg:pb-96;
    background-image: url("/combg/calendar_bg.png"),
      url("/combg/reporting_bg.png");
    background-repeat: no-repeat;
    background-position: top center, bottom center;
  } */

  /* img.masscomm-product {
    @apply absolute h-auto max-w-[40rem] top-0 translate-x-[4rem] translate-y-[-20rem];
    @apply lg:max-w-[60rem] lg:right-0 lg:translate-x-[-18rem] lg:mt-36;
  } */
</style>
