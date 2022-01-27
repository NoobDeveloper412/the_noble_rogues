<script>
  import { ChoicesTemplate } from "components";
  import { Chapter2TaipPage1, Chapter2TaipPage2 } from "pages/Chapter2";
  import { chapterTitles } from "utils";

  let trigger;
</script>

<svelte:head>
  <title>{chapterTitles.chapter2}</title>
</svelte:head>

<ChoicesTemplate class="bg-sand">
  <Chapter2TaipPage1 bind:nextTrigger={trigger} />
  <Chapter2TaipPage2 bind:activeTrigger={trigger} />
</ChoicesTemplate>
