<script>
  import { ChapterTemplate, ChoicesScreen } from "components";
  import { ChapterMenu } from "organisms";
  import { menuLinks } from "utils";
  import { fade } from "svelte/transition";
  import {
    Chapter3Page1,
    Chapter3Page2,
    Chapter3Page3,
    Chapter3Page4,
  } from "pages/Chapter3";
  import { chapterLinks } from "utils";

  let trigger1, trigger2, trigger3, trigger4, trigger5;
</script>

<svelte:head>
  <title>Namai ant kalno</title>
</svelte:head>

<div class="absolute w-full bg-green" out:fade in:fade>
  <ChapterMenu links={menuLinks} chapterHeader="Gyvenimo vizos" />
  <Chapter3Page1 bind:trigger={trigger2} />
  <Chapter3Page2 bind:activeTrigger={trigger1} bind:nextTrigger={trigger2} />
  <Chapter3Page3 bind:activeTrigger={trigger2} bind:nextTrigger={trigger3} />
  <Chapter3Page4 bind:activeTrigger={trigger3} />
  <ChoicesScreen
    header="Ar sukniauks katinas?"
    class="relative h-120 p-10 sm:p-4 z-10"
    choice1={{ href: `${chapterLinks.chapter3}/taip`, text: "taip" }}
    choice2={{ href: `${chapterLinks.chapter3}/ne`, text: "ne" }}
  />
</div>

<style global lang="postcss">
  @screen sm {
    .house {
      max-width: 150%;
      margin-left: -25%;
      margin-right: -25%;
    }
  }
</style>
