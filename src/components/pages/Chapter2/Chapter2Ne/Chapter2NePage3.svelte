<script>
  import { Card } from "atoms";
  import { ChapterItem } from "molecules";
  import building3Src from "images/Chapter2/building3.png";
  import wireSrc from "images/Chapter2/wire.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, triggerClass, wireClass;

  const getTriggerClasses = () => {
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    wireClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-100",
      "opacity-100"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<ChapterItem textAligment="right" class="z-10 sm:mt-120">
  <div slot="story" class="pt-16">
    <Card class="bg-primary mb-24">
      <p class="mb-6">
        1942 rugpjūčio pabaigoje paskelbta, kad iš geto bus išgelbėjami visi
        vaikai, mažesni nei dešimties metų. Į getą suvažiavo sunkvežimiai, į
        juos ėmė varyti ligonius, senukus, visus, kurie negali dirbti, taigi ir
        vaikus. Toliką tėtis greitai patraukė šonan ir paslėpė palėpėje virš
        kambarėlio. Pasodino jį ant čiužinio, prisakė, kad ant čiužinio jis gali
        gulėti, stovėti, sėdėti, bet jokiu būdu nuo jo nenulipti.
      </p>
      <p bind:this={triggerPoint}>
        Naktimis mama su tėčiu jam atnešdavo kąsnelį duonos, vandens, išnešdavo
        prisisiotą kibirą. Taip, beveik nejudėdamas, broliukas išbuvo mėnesį, po
        to jam buvo leista nulipti žemyn: tėtis jam gavo dokumentus su įrašu,
        kad yra dešimties ir gali su manimi dirbti gamykloje, tai reiškė dar
        vieną maisto kortelę.
      </p>
    </Card>
    <Card class="bg-primary sm:mt-120">
      <p class="mb-6">
        1944 rugpjūtį mūsų Getą likvidavo. Tai reiškia, kad likusius gyvus
        žmones išvežė į Auschwitz-Birkenau, vis dar veikiančią koncentracijos
        stovyklą.
      </p>
      <p class="tracking-3 mb-6">Į MIRTĮ.</p>
      <p class="bg-primary-300 w-3 h-3 border-none rounded-lg" />
    </Card>
  </div>
  <div
    slot="illustration"
    class="max-w-screen-md 2xl:m-auto w-full flex justify-center items-center relative"
  >
    <img
      class="transform lg:scale-90 object-contain mb-16 opacity-0 sm:w-full {triggerClass}"
      alt="building"
      src={building3Src}
    />
    <img
      class="absolute bottom-0 opacity-0 sm:w-full {wireClass}"
      alt="wire"
      src={wireSrc}
    />
  </div>
</ChapterItem>
