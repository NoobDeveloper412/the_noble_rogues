<script>
  import { ChoicesTemplate, ChoicesScreen } from "components";
  import { Chapter12NePage1 } from "pages/Chapter12";
  import { chapterLinks, chapterTitles } from "utils";
</script>

<svelte:head>
  <title>{chapterTitles.chapter12}</title>
</svelte:head>

<ChoicesTemplate class="bg-grayscale">
  <Chapter12NePage1 />
  <ChoicesScreen
    header="Will Dad agree to be a soviet spy?"
    class="relative h-120 p-10 sm:p-4 z-10"
    choice1={{ href: `en${chapterLinks.chapter12}/yes`, text: "yes" }}
    choice2={{ href: "", text: "no" }}
/>
</ChoicesTemplate>
