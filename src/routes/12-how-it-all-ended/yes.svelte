<script>
  import { ChoicesTemplate, ChoicesScreen } from "components";
  import {
    Chapter12TaipPage1,
  } from "pages/Chapter12";
  import { chapterTitles, chapterLinks } from "utils";

  let trigger1, trigger2, trigger3;
</script>

<svelte:head>
  <title>{chapterTitles.chapter12}</title>
</svelte:head>

<ChoicesTemplate class="bg-ch12">
  <Chapter12TaipPage1 bind:activeTrigger={trigger1} />
</ChoicesTemplate>

