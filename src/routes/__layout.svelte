<script>
  import "@fontsource/mulish"; // Defaults to weight 400.
  import "@fontsource/mulish/700.css"; // Defaults to weight 400.
  import "@fontsource/mulish/300.css"; // Defaults to weight 400.
  import "../app.css";
  import 'swiper/css';
  import "swiper/css/pagination";
  import Header from "$lib/layout/Header.svelte";
  import Footer from "$lib/layout/Footer.svelte";
</script>

<!-- TODO: preload Mullish -->
<!-- <svelte:head>
	<link
		rel="preload"
		href="/fonts/poppins-latin-400-normal.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/poppins-latin-600-normal.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/poppins-latin-700-normal.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head> -->

<Header />
<main class="flex flex-col flex-grow">
  <slot />
  <div class="flex-grow" />
  <Footer />
</main>

<style>
  :global(#app) {
    background: rgb(0, 9, 22);
    background: linear-gradient(
      180deg,
      rgba(0, 9, 22, 1) 0%,
      rgba(3, 47, 78, 1) 34%,
      rgba(1, 75, 129, 1) 59%,
      rgba(23, 40, 52, 1) 81%,
      rgba(0, 1, 7, 1) 100%
    );
  }
</style>
