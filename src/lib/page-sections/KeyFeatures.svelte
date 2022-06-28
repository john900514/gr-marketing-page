<script>
  import ButtonMatrix from "$lib/components/ButtonMatrix.svelte";
  import PageSection from "$lib/components/PageSection.svelte";

  let btns = [
    "CRM",
    "client management system",
    "business intelligence & feature specific reporting",
    "billing & processing",
    "point of sale systems",
    "fitness platform",
    "marketing cloud capabilities",
    "mass communications & automizations",
    "open api and endless 3rd party integrations",
    "client portal accessibility",
    "employee and team tracking",
    "gr benchmarking",
  ];
</script>

<PageSection class="flex flex-col space-y-16">
  <img
    src="/combg/calendar_bg.png"
    slot="pre-container"
    alt=""
    class="hidden md:block pointer-events-none transform -translate-y-[35%] inset-x-0 bottom-0 absolute w-full filter mix-blend-screen scale-[150%]"
  />

  <ButtonMatrix {btns} title="Key Features" showbg={true} />
  <div class="px-4 w-full max-w-[40rem]">
    <a
      href="#demo"
      class="btn btn-outline w-full h-32 flex items-center justify-center text-xl md:text-3xl md:w-auto btn-lg  rounded-lg font-bold uppercase mx-auto my-8"
      >schedule your demo</a
    >
  </div>

  <p class="p-8 md:px-32 lg:px-64 lg:mx-16">
    With One-click, be able to effortlessly <wbr />
    switch between CRM, CMS, Point-of-sale, <wbr />
    Business intelligence & data visualization, <wbr />
    employee tracking, company-wide leaderboards, HR & Payroll, Fitness Hub, Marketing
    cloud, Mass communications, agreement builders, automated lead & member journeys
    and so much more!
  </p>
</PageSection>

<style>
  section {
    @apply pt-4 lg:bg-top bg-no-repeat;
    background-position-y: 65%;
    background-color: #000616;
    background-image: url("/combg/matrix1_bg.png");

    /*  this works to fade the image but affects the entire element, so will
    need to use some sort of pseudo element or just throw an <img> in there
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 70%,
      transparent 100%
    );
    */
    h2 {
      @apply text-[2rem] font-bold text-center;
    }

    p {
      @apply text-center px-10 lg:max-w-[45rem] lg:mx-auto;
    }
  }
</style>
