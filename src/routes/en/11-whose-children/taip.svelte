<script>
  import { ChoicesTemplate, ChoicesScreen } from "components";
  import {
    Chapter11TaipPage1,
    Chapter11TaipPage2,
  } from "pages/Chapter11";
  import { chapterTitles, chapterLinks } from "utils";

  let trigger1, trigger2;
</script>

<svelte:head>
  <title>{chapterTitles.chapter11}</title>
</svelte:head>

<ChoicesTemplate class="bg-ch11">
  <Chapter11TaipPage1
    bind:activeTrigger={trigger1}
    bind:nextTrigger={trigger2}
  />
  <Chapter11TaipPage2 bind:activeTrigger={trigger2} />
</ChoicesTemplate>

