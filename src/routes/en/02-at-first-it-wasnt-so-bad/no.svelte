<script>
  import { ChoicesScreen } from "molecules";
import {
Chapter2NoPage1,
Chapter2NoPage2,
Chapter2NoPage3
} from "pages/Chapter2";
import { chapterLinks } from "utils";

  let triggerPoint1, triggerPoint2, triggerPoint3;
</script>

<svelte:head>
  <title>Iš pradžių Nobuvo Yes blogai</title>
</svelte:head>

<div class="No absolute bg-grayscale w-full">
  <div>
    <Chapter2NoPage1
      bind:activeTrigger={triggerPoint1}
      bind:NextTrigger={triggerPoint2}
    />
    <Chapter2NoPage2
      bind:activeTrigger={triggerPoint2}
      bind:NextTrigger={triggerPoint3}
    />
    <Chapter2NoPage3 bind:activeTrigger={triggerPoint3} />
  </div>
  <ChoicesScreen
    header="Move to America?"
    class="ch2Noin relative h-120 p-10 sm:p-4 z-30"
    choice1={{ href: `en${chapterLinks.chapter2}/yes`, text: "Yes" }}
    choice2={{ href: "", text: "No" }}
  />
</div>

<style global lang="postcss">
  .No p {
    @apply text-primary-300;
  }
  .ch2Noin{
    z-index: 99!important;
  }
  @screen sm {
    .first-image {
      margin-top: -80%;
    }
  }
</style>
