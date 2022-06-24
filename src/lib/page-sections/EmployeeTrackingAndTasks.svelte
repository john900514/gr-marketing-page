<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import Employee_tracking_icon from "$lib/components/icons/Employee_tracking_icon.svelte";
  import Tasks_icon from "$lib/components/icons/Tasks_icon.svelte";

</script>

<section>


  <picture class="hidden lg:block">
    <source srcset="combg/reporting_bg.png" media="(min-width: 1024px" />
    <img class="shoddy-img-hack" src="combg/reporting_bg.png" alt="" />
  </picture>

  <InfoPanel class="relative max-w-[22rem] mr-auto ml-4 lg:ml-auto lg:mr-[5rem]" title="Tasks">
    <picture>
      <source srcset="products/tasks_1.png" media="(min-width: 1024px)" />
      <img class="tasks_1" src="products/tasks_1_m.png" alt="" />
    </picture>
    <picture>
      <source srcset="products/tasks_2.png" media="(min-width: 1024px)" />
      <img class="tasks_2" src="products/tasks_2.png" alt="" />
    </picture>
    <Tasks_icon slot="icon" />
    Customizable for your organization to maximize your business needs. Easily add
    automatic tasks to your employee's daily responsibilities and track the competition
    each item.
  </InfoPanel>
</section>

<style style="postcss">
  /* EMPLOYEE TRACKING & TASKS */
  section{
    @apply pt-72 bg-no-repeat;
    background-image: url("combg/employee_bg.png");
    background-position-y: 30rem;
  }
  img.employee_tracking-product {
      @apply absolute h-auto max-w-[40rem] lg:max-w-[80rem] lg:left-0 top-0;
      @apply translate-x-[-5rem] translate-y-[-21rem] lg:translate-x-[14rem] lg:translate-y-[-32rem];
    }

  img.tasks_1 {
    @apply absolute h-auto max-w-[40rem] top-0 z-[1];
    @apply translate-x-[5rem] translate-y-[-5rem] lg:translate-x-[-25rem] lg:translate-y-[18rem];
  }

  img.tasks_2 {
    @apply absolute h-auto max-w-[20rem] top-0 translate-x-0 translate-y-[-18rem];
    @apply lg:translate-x-[-40rem] lg:translate-y-[0rem] lg:max-w-[60rem];
  }

  img.shoddy-img-hack {
    @apply absolute object-none max-w-[200rem] translate-x-[-80rem] translate-y-[-10rem] w-[300rem] rotate-180;
  }

  /* GLOBAL EMPLOYEE TRACKING */
 .emp-tracking {
    p {
      @apply relative font-bold;
    }
  }

  /* woman divider between employee tracking & tasks */
  img.woman-divider {
    @apply mb-96 mt-48 mx-auto lg:max-w-[60rem] lg:mt-[25rem];
  }
</style>
