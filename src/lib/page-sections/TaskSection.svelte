<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import Tasks_icon from "$lib/components/icons/Tasks_icon.svelte";
import PageSection from "$lib/components/PageSection.svelte";
</script>


<PageSection class="pt-8 md:min-h-[600px] md:pt-32 md:pb-[32rem]">
  <picture class="md:hidden">
    <source srcset="products/tasks_2.png" media="(min-width: 30rem)" />
    <img
      class="task-product-mobile"
      src="products/tasks_2_m.png"
      alt=""
    />
  </picture>
  <picture class="md:hidden">
    <source srcset="products/tasks_1.png" media="(min-width: 30rem)" />
    <img
      class="task-product2-mobile"
      src="products/tasks_1_m.png"
      alt=""
    />
  </picture>
  <!-- <picture>
    <source srcset="products/tasks_2.png" media="(min-width: 1024px)" />
    <img class="tasks_2" src="products/tasks_2.png" alt="" />
  </picture> -->

  <InfoPanel
    class_="mt-96 lg:mt-[40rem] mr-4 ml-auto max-w-[22rem] lg:max-w-[28rem] relative z-1"
    class="mx-[4vw] w-full max-w-[92vw] md:w-1/2 md:max-w-[22rem] transform md:translate-x-[79%] md:translate-y-[-20%]"
    title="Tasks"
  >
  <Tasks_icon slot="icon" />
  <div class="hidden md:block task-product">
      <picture>
        <source srcset="products/tasks_2.png"  media="(min-width: 30rem)"/>
        <img class="h-full w-auto" src="products/tasks_2_m.png" alt="" />
      </picture>
      <picture>
        <source srcset="products/tasks_1.png" media="(min-width: 30rem)" />
        <img class="task-product2" src="products/tasks_1.png" alt="" />
      </picture>
    </div>
    <p>
      Customizable for your organization to maximize your business needs. Easily add
    automatic tasks to your employee's daily responsibilities and track the competition
    each item.
    </p>
  </InfoPanel>
</PageSection>

<style style="postcss">
  .task-product-mobile {
    @apply min-w-[12rem] w-[80vw] -mb-16 -translate-x-1;
    @screen sm {
      @apply min-w-[20rem] max-w-[36rem];
    }
  }

  .task-product2-mobile {
    @apply min-w-[12rem] w-[80vw] -my-16 translate-x-32 relative z-[1];
    @screen sm {
      @apply min-w-[20rem] max-w-[26rem];
    }
  }

  .task-product {
    @apply absolute -z-[1] right-full transform -translate-x-[10%] -translate-y-[10%] top-8 -bottom-32;
    width: max-content;
  }

  .task-product2 {
    @apply absolute z-[2] right-[-50%] transform -translate-x-[20%] -translate-y-[-100%] top-8 -bottom-32;
    width: max-content;
  }
  /* img.tasks_1 {
    @apply absolute h-auto max-w-[40rem] top-0 z-[1];
    @apply translate-x-[5rem] translate-y-[-5rem] lg:translate-x-[-25rem] lg:translate-y-[18rem];
  }

  img.tasks_2 {
    @apply absolute h-auto max-w-[20rem] top-0 translate-x-0 translate-y-[-18rem];
    @apply lg:translate-x-[-40rem] lg:translate-y-[0rem] lg:max-w-[60rem];
  } */
</style>
