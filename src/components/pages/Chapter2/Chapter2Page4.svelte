<script>
  import { Card } from "atoms";
  import speechBubbleSrc from "images/Chapter2/speech-bubble.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint1,
    triggerPoint2,
    textTrigger = "";

  const getTriggerClasses = () => {
    textTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-textFlickerInGlow",
      "opacity-100"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint1);
    nextTrigger = elementInViewport(triggerPoint2);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item relative flex sm:flex-col">
  <Card
    class="w-max h-max max-w-md mt-20 bg-primary-300 sm:mt-10 sm:mb-80 sm:w-full sm:max-w-screen-sm"
  >
    <p bind:this={triggerPoint1}>
      O tada nutinka kažkas, dėl ko geriau tikrai nebeiti nė į miesto ledainę nė
      į miestą. Aną savaitę, grįžtant iš mokyklos, mane sustabdė keli bernai,
      rėkiantys:
    </p>
    <div class="speech-container h-xl">
      <img
        src={speechBubbleSrc}
        alt=""
        class="absolute h-xl w-screen left-0 -ml-28 sm:right-0 sm:mx-auto sm:object-cover"
      />
      <h2
        class="c-h2 absolute w-3/5 z-1 text-primary-300 h-xl flex items-center sm:w-screen sm:text-3xl sm:pr-32 sm:leading-10 sm:items-start sm:mt-40 {textTrigger}"
      >
        „ šlykšti žyde, tu smirdi ir terši mūsų orą, ką čia veiki tarp normalių
        žmonių, čiuožk iš mūsų miesto, varyk į savo šalį“
      </h2>
    </div>
    <p bind:this={triggerPoint2}>
      - labai išsigandau, puoliau bėgti, vienas jų man pakišo koją, kritau,
      skaudžiai nusibrozdinau kelį. Kai šlubčiodama grįžau namo, verkiau ir
      mamos klausinėjau: kodėl, kodėl jie šitaip, apie kokią „savo šalį“ jie
      rėkavo?
    </p>
  </Card>
</div>
