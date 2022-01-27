<script>
  import { Card } from "atoms";
  import aronSrc from "images/Chapter5/aron.png";
  import { ChapterLink } from "molecules";
  import { elementInViewport, chapterLinks } from "utils";

  export let activeTrigger;

  let triggerPoint;

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={aronSrc}
      alt=""
      class="absolute h-3/5 bottom-0 left-0 right-0 mx-auto"
    />
  </div>
  <Card class="card mb-28 float-right sm:float-none">
    <p bind:this={triggerPoint}>
      Be to... paukštelis pačiulbėjo, vis daugiau paukštelių vis garsiau čiulba,
      kad jei pasieksime Vilnių, nereikės pavojingai kirsti sienos, o Vilnius
      tuoj bus grąžintas Lietuvai, tada mes lyg niekur nieko atsidurtume
      Lietuvoje – ne mes sieną, o siena mus peršoktų, - taip kalba vis labiau
      gražbyliaudamas Aronas, kalba vis labiau karščiuodamasis ir tas karštis
      pagaliau atšildo suledėjusį tėčio žvilgsnį.
    </p>
    <ChapterLink
      href={chapterLinks.chapter6}
      class="mt-12 bg-primary w-full text-primary"
    >
      Kitas skyrius
    </ChapterLink>
  </Card>
</div>
