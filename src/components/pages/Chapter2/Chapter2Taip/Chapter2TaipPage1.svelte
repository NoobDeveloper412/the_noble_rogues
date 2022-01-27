<script>
  import { Card } from "atoms";
  import deskSrc from "images/Chapter2/desk.png";
  import radioSrc from "images/Chapter2/radio.png";
  import passportSrc from "images/Chapter2/passport.png";
  import letterJSrc from "images/Chapter2/letterJ.png";
  import { handleTriggerClasses } from "utils";

  export let nextTrigger;

  let triggerPoint, deskTrigger, radioTrigger, passPortTrigger;

  const getTriggerClasses = () => {
    deskTrigger = handleTriggerClasses(
      null,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
    radioTrigger = handleTriggerClasses(
      null,
      nextTrigger,
      "",
      "smMin:animate-slideOutTop sm:animate-fadeOut"
    );
    passPortTrigger = handleTriggerClasses(
      null,
      nextTrigger,
      "",
      "animate-scaleUp"
    );
  };

  const setActiveTrigger = () => {
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={deskSrc}
      alt=""
      class="absolute w-full top-1/5 sm:top-1/10 animate-fadeIn {deskTrigger}"
    />
    <img
      src={radioSrc}
      alt=""
      class="absolute top-1/5 sm:top-1/10 animate-slideInTop {radioTrigger}"
    />
    <img
      src={passportSrc}
      alt=""
      class="hover-control absolute bottom-0 top-1/4 left-1/3 my-auto sm:left-0 sm:right-0 sm:mx-auto {passPortTrigger ||
        'animate-vibrate'}"
    />
    <img
      src={letterJSrc}
      alt=""
      class="hover-display absolute bottom-0 top-1/4 left-1/3 my-auto sm:left-0 sm:right-0 sm:mx-auto opacity-0 transition-opacity duration-500"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <p bind:this={triggerPoint} class="mb-6">
      Ir tėčio širdelė, liūdnai nusišypsojusi, linktelėjo:
    </p>
    <h2 class="c-h2 mb-8">Taip</h2>
    <p>
      Iš pradžių tėtis siūlė keliauti Šveicarijon, bet paaiškėjo, kad mūsų
      pasai, nors ir vokiški, turi papildomą įrašą – didelę riebią raudoną J
      raidę. O šita raidė šveicarams nepatinka. Mes jus priimtumėm, sako
      mandagūs šveicarai, bet nepriimsime, pas mus ir taip tų J raidžių per
      daug.
    </p>
  </Card>
</div>

<style global lang="postcss">
  .hover-control:hover {
    & + .hover-display {
      @apply opacity-100;
    }
  }
</style>
