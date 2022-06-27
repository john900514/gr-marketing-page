<script>
  import Insta_icon from "$lib/components/icons/Insta_icon.svelte";
  import Linkedin_icon from "$lib/components/icons/Linkedin_icon.svelte";

  import Gymrevenue from "$lib/components/icons/Gymrevenue.svelte";
</script>

<footer>
  <!-- <div class="cool-animation-thing">
    <span>logo animation</span>
  </div> -->

  <!-- <Gymrevenue /> -->
 <img src="/logo.svg" alt="GymRevenue Logo" class="m-auto"/>
  <nav>
    <ul>
      <li>
        <a href="https://www.instagram.com/gymrevenue/" target="__blank">
          <Insta_icon />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/gymrevenue/"  target="__blank">
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
