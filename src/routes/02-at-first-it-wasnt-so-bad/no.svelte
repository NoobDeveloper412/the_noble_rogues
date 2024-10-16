<script>
  import { ChoicesScreen } from "molecules";
  import {
    Chapter2NePage1,
    Chapter2NePage2,
    Chapter2NePage3,
  } from "pages/Chapter2";
  import { chapterLinks } from "utils";

  let triggerPoint1, triggerPoint2, triggerPoint3;
</script>

<svelte:head>
  <title>At first, yes it was bad</title>
</svelte:head>

<div class="ne absolute bg-grayscale w-full">
  <div>
    <Chapter2NePage1
      bind:activeTrigger={triggerPoint1}
      bind:nextTrigger={triggerPoint2}
    />
    <Chapter2NePage2
      bind:activeTrigger={triggerPoint2}
      bind:nextTrigger={triggerPoint3}
    />
    <Chapter2NePage3 bind:activeTrigger={triggerPoint3} />
  </div>
  <ChoicesScreen
    header="Move to America?"
    class="ch2nein relative h-120 p-10 sm:p-4 z-30"
    choice1={{ href: `${chapterLinks.chapter2}/yes`, text: "yes" }}
    choice2={{ href: "", text: "ne" }}
  />
</div>

<style global lang="postcss">
  .ne p {
    @apply text-primary-300;
  }
  .ch2nein {
    z-index: 99 !important;
  }
  @screen sm {
    .first-image {
      margin-top: -80%;
    }
  }
</style>
