<script>
  import ButtonMatrix from "$lib/components/ButtonMatrix.svelte";

  let btns = [
    "Customer relationship management",
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

<section>
  <ButtonMatrix {btns} title="Key Features" showbg={true} />

  <h2 class="text-[2rem] font-bold text-center mt-4">And so much more!</h2>
  <p>
    With One-click, be able to effortlessly <wbr />
    switch between CRM, CMS, Point-of-sale, <wbr />
    Business intelligence & data visualization, <wbr />
    employee tracking, company-wide leaderboards, HR & Payroll, Fitness Hub, Marketing
    cloud, Mass communications, agreement builders, automated lead & member journeys
    and so much more!
  </p>
</section>

<style>
  section{
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

    @media (min-width: 1024px) {
      background-image: url("/combg/matrix1_bg.png");
      background-attachment: local;
      background-size: 130% 80%;
    }

    h2 {
      @apply text-[2rem] font-bold text-center mt-4;
    }

    p {
      @apply text-center px-10 mt-4 lg:max-w-[45rem] lg:mx-auto lg:py-16;
    }
  }
</style>
