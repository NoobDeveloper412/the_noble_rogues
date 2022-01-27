<script>
  import { Card } from "atoms";
  import { Explanation } from "organisms";
  import kitchenSrc from "images/Chapter2/kitchen.png";
  import kelvinatorSrc from "images/Chapter2/kelvinator.png";
  import { elementInViewport, handleTriggerClasses, imageReferences } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint,
    triggerClass = "";

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeInSlow sm:z-0",
      "animate-fadeOut"
    );
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item relative flex sm:flex-col">
  <div
    class="image-container fixed bottom-0 right-1/20 w-1/2 overflow-hidden flex-auto h-screen min-w-md sm:w-full sm:min-w-sm sm:h-94 sm:mt-10 opacity-0 {triggerClass}"
  >
    <img
      src={kitchenSrc}
      alt=""
      class="absolute bottom-0 right-0 w-full h-full object-contain object-bottom sm:h-full sm:w-full"
    />
  </div>
  <Card class="card">
    <p>
      Štai prieš savaitę audra kilo pamažu: ledo vežiotojai laiku neatvežė ledo
      terasoje laikomai gendančių produktų dėžei, taigi sviestas ištęžo, žalia
      mėsa tikrai truputį pažaliavo, o tėčio alus „pavirto į nieką“ - bent taip
      mama, vis prikąsdama lūpą, pranešė tėčiui.
    </p>
    <p class="mt-8" bind:this={triggerPoint}>
      Dabar mama vėl gali šypsotis, nes keli vyrai į virtuvę įbogino didelę
      dėžę, iš kurios išpakavo baltą metalinį 
      <Explanation
        variant="sand"
        class="border-sand border-b-4"
        href={imageReferences[2].kelvinator}
      >
        <div slot="content" class="w-full">
          <img src={kelvinatorSrc} alt="kelvinatoriu" class="w-full" />
          <p class="p-6">„Nash-Kelvinator“</p>
        </div>
        <span slot="text"> Kelvinatorių</span>
      </Explanation>, toks šios švediškos spintelės pavadinimas. Kelvinatorių
      prijungus prie elektros, virtuvėje susikalbėti sunkiau, nes jo variklis
      burzgia it motociklo motoras, pati dėžė dreba ir švelniai siūbuoja į
      šonus, bet nuo šiol tėtis visada turės šalto alaus, mama iš džiaugsmo
      nusiperka pusę kilogramo sviesto, o mes, vaikai, gauname grietinėlės ledų.
      Kad gautum ledų, nebereikia eiti į miesto ledainę, tik pamanyk.
    </p>
  </Card>
</div>
