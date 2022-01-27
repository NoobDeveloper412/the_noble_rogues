<script>
  import { Card } from "atoms";
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
  <Card class="card mb-28 float-right sm:float-none">
    <p bind:this={triggerPoint}>
      Mama išsitraukia berlynietės draugės laišką ir šimtąjį kartą piktai tėčiui
      perskaito „visą savaitę keliavome iki Prancūzijos sienos, kelias naktis
      laukėme vedlio per sieną“ - tiek dienų ir naktų ji savo senos motinos,
      mūsų močiutės, tikrai niekur nekratys.
    </p>
    <p class="mt-6">
      Mums lieka, mums belieka, kas mums tebelieka? Vieną vakarą tėtis grįžta iš
      miesto ir sako radęs išeitį. Yra miestas, į kurį priima be vizų.
    </p>
    <p class="uppercase mt-6 tracking-3">Šanchajus.</p>
    <ChapterLink
      href={chapterLinks.chapter3}
      class="mt-12 bg-primary w-full text-primary"
    >
      Kitas skyrius
    </ChapterLink>
  </Card>
</div>
