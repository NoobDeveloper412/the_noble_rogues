<script>
  import { Card } from "atoms";
  import familySrc from "images/Chapter4/couple-family.png";
  import houseSrc from "images/Chapter4/house.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, familyTrigger, houseTrigger;

  const getTriggerClasses = () => {
    familyTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    houseTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeInSlow",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    nextTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={houseSrc}
      alt=""
      class="absolute top-0 left-0 right-0 mx-auto opacity-0 object-contain {houseTrigger}"
    />
    <img
      src={familySrc}
      alt=""
      class="absolute bottom-0 left-0 right-0 mx-auto opacity-0 {familyTrigger}"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <p>
      Miegi, katine? - pusę gyvenimo tau baigiu išpasakoti, o tu miegi. Visa
      kita žinai: apsigyvenome name ant kalno, nuo kurio matosi visas Kaunas.
      Savaitgaliais važinėjame apžiūrinėdami Lietuvą, ypač jos pajūrį. Sode
      pasodinau porą obelų, susilaukėme trečio sūnaus Harukio, štai jis jau
      pabudo ir knirkčioja vežimėly.
    </p>
    <p class="mt-8">
      Lietus liovėsi ir Setsuko naujagimį vežtų į kiemą, bet lauke, įprastai
      tokioje tuščioje ir ramioje gatvelėje, nuo pat ryto stumdosi žmonės.
    </p>
    <p class="mt-8">
      Rodydamas, kad nemiegojau, o klausiausi, - pasikasau ausį, pasirąžau ir
      nuo palangės strykteliu ant stalo, o <span bind:this={triggerPoint}
        >tada</span
      > nusliuogiu Jukiko ant kelių. Jukiko atrodo pavargusi, sunerimusi ir… išsigandusi.
    </p>
  </Card>
</div>
