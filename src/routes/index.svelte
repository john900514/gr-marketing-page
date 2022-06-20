<script>
  import InfoPanel from "$lib/slot/InfoPanel.svelte";
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

  //provided via shadow endpoint
  export let foo;
</script>

<section>
  <p>another section</p>
</section>

<ButtonMatrix {btns} />

<section>
  <InfoPanel title="Widget Center">
    The widget center is your hub for customization <wbr />
    pertaining to your access to your account. Add / <wbr />
    remove and share specific widgets that are informative <wbr />
    to your business.
    <br />
    <br />
    Widgets are isolated by type and category and have <wbr />
    the ability to be as customized to your specific needs <wbr />
    and desires.
  </InfoPanel>
</section>
image.png
