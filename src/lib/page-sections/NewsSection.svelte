<script>
import PageSection from "$lib/components/PageSection.svelte";
const articles = [
  {
    href: "https://www.clubindustry.com/press-releases/gymrevenue-makes-waves-ihrsa-introducing-health-club-owners-and-operators-their-new",
    title: "GymRevenue Makes Waves at IHRSA, Introducing Health Club Owners and Operators to Their New, All-In-One Cloud-Based Solution",
  }
]
</script>

<PageSection class="mt-16" id="news">
  <div class="bg-white text-base-100 p-4 rounded-xl mx-8">
    <h2 class="text-2xl">In The News</h2>
    {#each articles as {href, title}}
      <div class="p-8">
        <p>{title}</p>
        <a target="__blank" {href} class="btn btn-secondary bg-secondary text-white border-none rounded-full mt-4">Read Article</a>
      </div>
    {/each}
  </div>
</PageSection>
