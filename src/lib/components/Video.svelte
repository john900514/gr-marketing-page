<script>
  import { onMount } from "svelte";

  let Player;
  let Hls;
  let DefaultUi;

  let width = 0;
  let height= 0;

  const BASE_POSTER_URL = "https://image.mux.com/48cmhcTN4RQckEsVOF01XjMH5ksEAu8mjqSXmZP5IJWI/thumbnail.png";
  let poster = BASE_POSTER_URL;

  const setPoster = () => {
    poster = `${BASE_POSTER_URL}?width=${width}&height=${height}`;
    // poster = `${BASE_POSTER_URL}?width=${width}&height=${height}&fit_mode=pad`;
    console.log({poster})
  }
  onMount(async () => {
    // NOTE: parentheses turn destructuring assignments into expressions
    setPoster();
    ({ Player, Hls, DefaultUi } = await import("@vime/svelte"));
  });
  
</script>

<svelte:window on:resize={setPoster} bind:innerHeight={height} bind:innerWidth={width} />

<svelte:component
  this={Player}
  theme="dark"
  style="--vm-player-theme: #e86c8b; --vm-settings-width: 100%; --vm-settings-height: 100%;"
  controls
  width="100%"
  height="100%"
>
  <svelte:component
    this={Hls}
    crossOrigin
    {poster}
  >
    <source
      data-src="https://stream.mux.com/48cmhcTN4RQckEsVOF01XjMH5ksEAu8mjqSXmZP5IJWI.m3u8"
      type="application/x-mpegURL" 
          />
    <svelte:component this={DefaultUi} />
  </svelte:component>
</svelte:component>
