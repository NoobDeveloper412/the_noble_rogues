<script>
  import { ChoicesTemplate, ChoicesScreen } from "components";
  import { Chapter5TaipPage1, Chapter5TaipPage2 } from "pages/Chapter5";
  import { chapterLinks, chapterTitles } from "utils";

  let trigger1, trigger2, trigger3;
</script>

<svelte:head>
  <title>{chapterTitles.chapter5}</title>
</svelte:head>

<ChoicesTemplate class="bg-grayscale">
  <Chapter5TaipPage1
    bind:activeTrigger={trigger1}
    bind:firstTrigger={trigger2}
    bind:secondTrigger={trigger3}
  />
  <Chapter5TaipPage2
    bind:activeTrigger1={trigger2}
    bind:activeTrigger2={trigger3}
  />
  <ChoicesScreen
    header="Iškeliaujame be močiutės??"
    class="relative h-120 p-10 sm:p-4"
    choice1={{ href: "", text: "taip" }}
    choice2={{ href: `${chapterLinks.chapter5}/ne`, text: "ne" }}
  />
</ChoicesTemplate>
