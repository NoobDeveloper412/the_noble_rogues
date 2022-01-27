<script>
  import { ChapterMenu } from "organisms";
  import { menuLinks } from "utils";
  import { fade, fly } from "svelte/transition";
</script>

<div class="choice min-h-screen {$$props.class || ''}" out:fade>
  <ChapterMenu
    links={menuLinks}
    chapterHeader="Gyvenimo vizos"
    class="hidden sm:block"
  />
  <div
    class="card-container relative sm:pt-120"
    in:fly={{ y: 1000, duration: 1000 }}
  >
    <slot />
  </div>
</div>
