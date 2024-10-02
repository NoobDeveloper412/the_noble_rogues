<script>
  import { ChoicesTemplate, ChoicesScreen } from "components";
  import { Chapter6NePage1 } from "pages/Chapter6";
  import { chapterLinks, chapterTitles } from "utils";
</script>

<svelte:head>
  <title>{chapterTitles.chapter6}</title>
</svelte:head>

<ChoicesTemplate class="bg-grayscale">
  <Chapter6NePage1 />
  <ChoicesScreen
    header="Ar Zwartendijkas sutinka klastoti Kurasao vizas?"
    class="relative h-120 p-10 sm:p-4 z-10"
    choice1={{ href: `en${chapterLinks.chapter6}/taip`, text: "yes" }}
    choice2={{ href: "", text: "no" }}
/>
</ChoicesTemplate>
