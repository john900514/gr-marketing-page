<script>
  import GridButton from "$lib/slot/GridButton.svelte";
  import { Swiper, SwiperSlide } from 'swiper/svelte';

  export let btns,
    title = "",
    showbg = false;

  let mobile_grp1 = [btns[0], btns[1], btns[2]];
  let mobile_grp2 = [btns[3], btns[4], btns[5]];
  let mobile_grp3 = [btns[6], btns[7], btns[8]];
  let mobile_grp4 = [btns[9], btns[10], btns[11]];

  let mobile_btns = [mobile_grp1, mobile_grp2, mobile_grp3, mobile_grp4];
</script>

<div class="container mob" class:showbg>
  {#if showbg}
    <p>
      This Visionary single-source platform <wbr />
      seamlessly integrates all of the daily <wbr />
      tasks and data that gym owners and <wbr />
      operators need to accurately assess <wbr />
      operations & performance. With ONE <wbr />
      simple login, GymRevenue gives you the <wbr />
      ability to switch between GR <wbr />
      components to gain critical insight into <wbr />
      your organization.
    </p>
  {/if}

  <h2>{title}</h2>

  <div class="matrix-container">
    <Swiper
    centeredSlides={true}
    spaceBetween={0}
    slidesPerView={1.4}
    on:slideChange={() => console.log('slide change')}
    on:swiper={(e) => console.log(e.detail[0])}
  >
  {#each mobile_btns as btn, i (btn)}
  <SwiperSlide>
    <div class="matrix-col grid grid-cols-1 grid-rows-3 gap-4">
      <GridButton>
        {btn[0]}
      </GridButton>
      <GridButton>
        {btn[1]}
      </GridButton>
      <GridButton>
        {btn[2]}
      </GridButton>
    </div>
  </SwiperSlide>
{/each}
  </Swiper>
  </div>
</div>
<!-- desktop below -->
<div class="desktop relative z-[1]" class:showbg>
  {#if showbg}
    <p>
      This Visionary single-source platform <wbr />
      seamlessly integrates all of the daily <wbr />
      tasks and data that gym owners and <wbr />
      operators need to accurately assess <wbr />
      operations & performance. With ONE <wbr />
      simple login, GymRevenue gives you the <wbr />
      ability to switch between GR <wbr />
      components to gain critical insight into <wbr />
      your organization.
    </p>
  {/if}

  <h2>{title}</h2>

  <div class="matrix-container">
    <div class="btn-matrix">
      {#each btns as btn}
        <GridButton>
          {btn}
        </GridButton>
      {/each}
    </div>
  </div>
</div>

<style lang="postcss">
  div.desktop {
    @apply hidden lg:block text-center;

    p {
      @apply lg:max-w-[42rem] lg:pb-24 mx-auto hidden lg:block;
    }

    h2 {
      @apply lg:text-[2.5rem] lg:mb-6;
    }
  }

  div.container {
    @apply relative;
    @apply bg-cover bg-no-repeat w-full;

    /*   ::-webkit-scrollbar {
    @apply hidden;
  } */

    p {
      @apply text-center relative max-w-full px-6;
    }

    h2 {
      @apply text-[2rem] font-bold text-accent-content text-center py-8;
    }

    div.m-btn-group {
      @apply flex justify-center mt-6;

      span {
        @apply px-4;
      }
    }
  }

  button.swipebtn {
    @apply mx-4 h-8 w-8 rounded-full bg-accent-content border border-secondary;
  }

  button.swipebtn[active="true"] {
    @apply bg-transparent;
  }

  .mydots {
    @apply py-8;
  }

  div.matrix-col {
    @apply px-4 justify-center;
    grid-template-columns: auto;
  }

  :global(.matrix-col button) {
    @apply h-28 my-4 w-full block;
  }

  div.matrix-container {
  }

  div.mob {
    @apply block lg:hidden;
  }

  div.btn-matrix {
    @apply hidden  md:grid gap-6 items-center justify-center tracking-[0];

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, minmax(0, 20rem));
      grid-template-rows: repeat(4, 6rem);
    }
  }
</style>
