<script>
  import { ChoicesTemplate, ChoicesScreen } from "components";
  import { Chapter9NePage1 } from "pages/Chapter9";
  import { chapterLinks, chapterTitles } from "utils";
</script>

<svelte:head>
  <title>{chapterTitles.chapter9}</title>
</svelte:head>

<ChoicesTemplate class="bg-grayscale ch_9_ne">
  <Chapter9NePage1 />
  <ChoicesScreen
    header="Will Dad agree to be a Soviet spy?"
    class="relative h-120 p-10 sm:p-4 z-10"
    choice1={{ href: `en${chapterLinks.chapter9}/taip`, text: "yes" }}
    choice2={{ href: "", text: "no" }}
  />
</ChoicesTemplate>
