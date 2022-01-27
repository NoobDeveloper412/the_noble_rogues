<script>
  import { Card } from "atoms";
  import lejaSrc from "images/Chapter2/leja.png";
  import trainSrc from "images/Chapter5/train.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint,
    imageTrigger = "";

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item flex sm:flex-col">
  <div
    class="image-container overflow-hidden fixed w-2/3 top-0 right-0 h-screen sm:w-full"
  >
    <img
      src={trainSrc}
      alt=""
      class="absolute bottom-0 right-1/20 w-full object-contain animate-fadeInSlow"
    />
    <img
      src={lejaSrc}
      alt=""
      class="absolute bottom-0 right-1/10 sm:right-1/5 sm:w-1/2 {imageTrigger ||
        'animate-slideInBlurredBottom'}"
    />
  </div>
  <Card class="card">
    <h2 class="c-h2 mb-8">Bėgliai</h2>
    <p bind:this={triggerPoint}>
      Aš Lėja, pamenate mane? Paskutinįkart matėmės, kai tėtis pranešė apie
      kelionę Amerikon per Šanchajų. Jis turėjo išvaikščioti visą miestą,
      kalbėtis su begale žmonių ir... atiduoti saują nedeklaruotų deimantų už
      tai, kad gautų leidimą kirsti Reicho sieną, kad gautų bilietus į traukinį,
      kad gautų bilietus į kruizinį laivą Potsdam maršrutu Genuja – Šanchajus,
      pirmyn ir atgal.
    </p>
  </Card>
</div>
