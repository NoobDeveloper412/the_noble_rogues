<script>
  import { Card } from "atoms";
  import peoTaipSrc from "images/chapter9/people-taip.png";
  import policeTaipSrc from "images/chapter9/police.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, imageTrigger, slideFromTop, slideFromLeft;

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-fadeOut"
    );
    slideFromTop = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-fadeOut"
    );
    slideFromLeft = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredLeft",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex relative">
  <div
    class="image-container ch_12taip_a overflow-hidden fixed w-1/2 bottom-0 left-0 h-screen sm:w-full sm:left-0"
  >
    <img
      class="peotaip object-contain absolute bottom-0 left-1/10 animate-slideInTop {slideFromTop}"
      alt="houseNe"
      src={peoTaipSrc}
    />
    <img
      class="police object-contain absolute bottom-0 left-1/10 animate-slideInBottom {slideFromLeft}"
      alt="soldierNe"
      src={policeTaipSrc}
    />
  </div>
  <Card class="card float-right sm:float-none">
    <h2 class="c-h2 mb-8">Yes</h2>
    <p class="mb-6" bind:this={triggerPoint}>
      Dad agrees to sign a cooperation agreement. And so he gets permission for
      a journey to freedom. Maybe nothing bad will happen if he doesn’t report
      anything, maybe he will just dissolve somewhere on the way and disappear
      from the list of NKVD assistants? After all, those lists of forced
      assistants are endless.
    </p>
  </Card>
</div>

<style global lang="postcss">
  .ch_12taip_a {
    width: 100%;
    max-width: 800px;
  }
  .peotaip {
    width: 100%;
    max-width: 800px;
    left: 0;
    bottom: 10%;
  }
  .police {
    width: 100%;
    right: 0;
    left: auto;
    max-width: 700px;
  }
  @screen sm {
    .ch_12taip_a {
      max-width: 100%;
      height: 400px;
      position: fixed;
      bottom: 17%;
    }
    .peotaip {
      width: 100%;
      left: 0;
      bottom: 12%;
    }
    .police {
      width: 98%;
      right: -2%;
      left: auto;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1350px) {
    .ch_12taip_a,
    .img-area-taip {
      width: 100% !important;
      max-width: 50% !important;
      z-index: 9;
    }

    .bg-ch9 .card {
      z-index: 99;
    }
    .river {
      max-width: 100%;
      left: 0;
    }
    .japenese {
      max-width: 50%;
    }
    .fullfamily {
      max-width: 59%;
    }
  }
</style>
