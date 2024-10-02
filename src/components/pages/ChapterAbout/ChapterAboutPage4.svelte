<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "atoms";
  import { ChapterItem, HoverImage } from "molecules";
  import { elementInViewport, handleTriggerClasses } from "utils";

  let triggerPoint, fromTopClass, fromBottomClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-slideOutTop"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-slideOutTop"
    );
    
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-20 mb-20 sm:mt-152">
  <div slot="story" class="animate-slideInBlurredBottom">
    <Card>
      <p class="mb-6" bind:this={triggerPoint}>
        Istorija apie Sugiharos ir Zwartendijko žygdarbius žinoma diplomatiniame ir kultūriniame sektoriuose. Tai ryškiausias diplomatinis tiltas tarp Lietuvos ir Japonijos. 2014 m. pirmą kartą vienintelis gyvas Sugiharos sūnus lankėsi Lietuvoje, ir grįžo dar 6 kartus. 2015 m. Japonijoje išleistas filmas „Persona Non Grata“, opera „Sempo Sugihara“ pristatyta Lietuvoje. 2017 m. Lietuvoje pradėta rengti „Sugiharos savaitė“. 2018 m. Kaune meno instaliaciją Zwartendijkui pagerbti  atidarė Nyderlandų karalius, Lietuvos prezidentas ir Kauno meras. 2020 m. Kaune atidengta skulptūra Sugiharos garbei. Herojiški Sugiharos ir Zwartendijko poelgiai sujungia ne tik daugiau nei keturias šalis, bet ir visą už žmogaus teises ir laisvę tebesikaunantį pasaulį. 
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        Ateityje planuojame išleisti šį kūrinį kitomis kalbomis bei pildyti naujais skyriais.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="letter_area h-xl sm:left-1/20 sm:h-l w-full left-1/3 flex justify-center items-center relative"
  >

  </div>
</ChapterItem>

<style global lang="postcss">
  .letter_area {
      width: 530px;
      bottom: 3%;
  }
  @screen sm{
    .letter_area {
      width: 115%!important;
      bottom: 3%;
      left: -8%;
    }
  }
</style>  