<script>
  import ButtonMatrix from "$lib/components/ButtonMatrix.svelte";

  let btns = [
    "Intuitive fitness platform",
    "agreement customizer / builder",
    "gr bench marking",
    "gr nps scoring capability",
    "one-click payment processing",
    "customized pos center",
    "financial / p&l tracking / forecasting",
    "trend forecasting abilities",
    "machine learning  forecasting",
    "marketing cloud integration",
    "organizational documentation storage",
    "internal chat functionalities",
  ];
</script>

<section>
  <ButtonMatrix btns={btns} title="Coming Soon..." showbg={false} />
  <h3 class="mt-8 text-center font-bold">And MUCH More...</h3>
</section>

<style>
    h3 {
      @apply mt-8 text-center font-bold;
    }
</style>
