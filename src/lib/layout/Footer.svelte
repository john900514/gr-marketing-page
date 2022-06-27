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
        <a href="https://www.instagram.com/gymrevenue/">
          <Insta_icon />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/gymrevenue/">
          <Linkedin_icon />
        </a>
      </li>
    </ul>
  </nav>
  <sup>Copyright &#169 2022. All rights reserved by GymRevenue </sup>
</footer>

<style lang="postcss">
  footer {
    @apply py-8 text-center;

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
