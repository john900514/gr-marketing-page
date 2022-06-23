<script>
  import Insta_icon from "$lib/components/icons/Insta_icon.svelte";
  import Linkedin_icon from "$lib/components/icons/Linkedin_icon.svelte";

  import Gymrevenue from "$lib/components/icons/Gymrevenue.svelte";
</script>

<footer>
  <!-- <div class="cool-animation-thing">
    <span>logo animation</span>
  </div> -->

  <Gymrevenue />

  <nav>
    <ul>
      <li>
        <Insta_icon />
      </li>
      <li>
        <Linkedin_icon />
      </li>
    </ul>
  </nav>
  <sup>Copyright &#169 2022. All rights reserved by GymRevenue </sup>
</footer>

<style>
  footer {
    @apply py-8 absolute bottom-0 w-full text-center;

    nav {
      @apply py-4;
    }

    nav ul {
      @apply flex justify-center;

      li {
        @apply px-4;
      }
    }
  }

  :global(footer svg) {
    @apply mx-auto;
  }
</style>
