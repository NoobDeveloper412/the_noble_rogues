<script>
  import { Card } from "atoms";
  import windowSrc from "images/Chapter5/window.png";
  import familySrc from "images/Chapter5/family.png";
  import policeSrc from "images/Chapter5/police.png";
  import seaSrc from "images/Chapter5/sea.png";
  import portSrc from "images/Chapter5/port.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, firstTrigger, secondTrigger;

  let triggerPoint,
    windowTrigger = "",
    policeTrigger = "",
    seaTrigger = "",
    portTrigger = "";

  const getTriggerClasses = () => {
    windowTrigger = handleTriggerClasses(null, secondTrigger, "", "opacity-0");
    policeTrigger = handleTriggerClasses(
      activeTrigger,
      firstTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    seaTrigger = handleTriggerClasses(
      firstTrigger,
      secondTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    portTrigger = handleTriggerClasses(
      secondTrigger,
      null,
      "animate-fadeIn",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden fixed w-2/3 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={policeSrc}
      alt=""
      class="absolute top-1/10 left-1/5 opacity-0 {policeTrigger}"
    />
    <img
      src={seaSrc}
      alt=""
      class="absolute top-1/10 left-1/5 opacity-0 {seaTrigger}"
    />
    <img
      src={portSrc}
      alt=""
      class="absolute top-1/10 left-1/5 opacity-0 {portTrigger}"
    />
    <img
      src={windowSrc}
      alt=""
      class="absolute top-1/10 left-1/5 {windowTrigger}"
    />
    <img src={familySrc} alt="" class="absolute bottom-1/10" />
  </div>
  <Card class="card dark float-right sm:float-none">
    <h2 class="c-h2 mb-8">Taip</h2>
    <p>
      Važiuokit, vaikai, - sako močiutė. Raminkis ir baik žliumbti, dukra, -
      sako ji mamai, - aš savo jau nugyvenau, nedaug ir beliko. Vaikai turi kada
      nors palikti savo senus tėvus ir pradėti gyvenimą iš naujo. Tai baik
      žliumbti ir pradėk gyventi.
    </p>
    <p class="mt-8" bind:this={triggerPoint}>
      Nelabai ką atsimenu iš tos kelionės. Tik siaubą, kai traukiniui
      stabtelėjus ant Italijos sienos, muitininkai mušė vyrą, švarke įsisiuvusį
      šiek tiek banknotų. Tik moterį, kuri laukiant patikrinimo skubiai išsisegė
      auskarus ir juos įbruko mažai dukrelei į paltuko kišenę. Ir pinigus
      slėpusio vyro šeima ir auskarus per vėlai išsisegusios moters giminaičiai
      – visi liko anąpus sienos, nė vieno nebeįleido į traukinį. Mano juoda
      diržo sagtelė maniau pilve išdegins man skylę, o batai užsiliepsnos, tokia
      buvo baimė, kad ir mums nepavyks.
    </p>
  </Card>
</div>
