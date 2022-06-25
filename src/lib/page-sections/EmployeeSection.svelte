<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
  import Employee_tracking_icon from "$lib/components/icons/Employee_tracking_icon.svelte";
</script>

<PageSection class="pt-8 md:min-h-[600px] md:py-32">
  <img src="/combg/employee_bg.png" slot="pre-container"  alt="" class="hidden pointer-events-none md:block transform -translate-y-[35%] inset-x-0 bottom-0 absolute w-full filter mix-blend-screen"/>
  <picture class="md:hidden">
    <source
      srcset="products/employee_tracking.png"
      media="(min-width: 30rem)"
    />
    <img
      class="employee_tracking-product-mobile"
      src="products/employee_tracking_m.png"
      alt=""
    />
  </picture>
  <InfoPanel
    title="Employee Tracking"
    class="ml-[4vw] mr-[12vw] w-full max-w-[88vw] md:w-1/2 md:max-w-[40rem] md:pr-[10rem] transform md:-translate-x-[36%] lg:max-w-[50rem] mb-16 md:mb-64 lg:mb-128"
  >
    <Employee_tracking_icon slot="icon" />
    <div class="hidden md:block employee_tracking-product">
      <picture>
        <source
          srcset="products/employee_tracking.png"
          media="(min-width: 30rem)"
        />
        <img
          class="h-full w-auto"
          src="products/employee_tracking_m.png"
          alt=""
        />
      </picture>
    </div>

    <p>
      GymRevenue gives owners and operators the opportunity to manage in real
      time and effectively by their employees.
      <br />
      <br />
      Specifically filter between top performers and employees who need more training
      and development pertaining to specific areas in their role. point out these
      opportunities before it is too late.
      <br />
      <br />
      Leaderboards are based by employee type, location, category and even customizable
      items.
    </p>
  </InfoPanel>
</PageSection>

<style style="postcss">
  .employee_tracking-product-mobile {
    @apply min-w-[12rem] w-screen -mb-16 translate-x-16 relative z-[1];
    @screen sm {
      @apply min-w-[20rem] max-w-[42rem] transform translate-x-[30%];
    }
  }

  .employee_tracking-product{
    @apply absolute left-full transform -translate-x-[15%] -translate-y-[10%] -inset-y-16;
    width: max-content;
  }
</style>
