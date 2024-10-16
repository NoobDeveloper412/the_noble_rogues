<script>
  import { Card } from "atoms";
  import personsSrc from "images/chapter6/persons.png";
  import janSrc from "images/chapter6/jan.png";
  import visaSrc from "images/chapter6/visa.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, imageTrigger, personsTrigger, janTrigger, visaTrigger;

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
    janTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
    personsTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredLeft",
      ""
    );
    visaTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-slideOutTop"
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
    class="img-area ch6_taip image-container overflow-hidden fixed w-1/2 top-0 left-1/10 sm:w-full sm:left-0 {imageTrigger}"
  >
    <img
      src={janSrc}
      alt=""
      class="jan absolute bottom-1/10 left-0 right-0 mx-auto {janTrigger}"
    />
    <img
      src={personsSrc}
      alt=""
      class="absolute persons bottom-0 my-auto sm:bottom-1/10 animate-slideInBlurredLeft {personsTrigger}"
    />
    <img
      src={visaSrc}
      alt=""
      class="visa absolute bottom-0 left-0 right-0 mx-auto animate-slideInTop {visaTrigger}"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <h2 class="c-h2 mb-8">Yes</h2>
    <p class="mb-6" bind:this={triggerPoint}>
      And Jan Zwartendijk, after thinking for a while, sighs and writes - first
      in Nathan’s, then in Chaim’s passports:
    </p>
    <p>
      “The Dutch Consulate in Kaunas states that no visa is required to enter
      the islands of Curaçao and Suriname.”
    </p>
    <p>
      Nathan and Chaim are not going to either Curaçao or Suriname, they just
      need to leave the Soviet Union as soon as possible, they need to reach
      America, and there is only one way left: the Trans-Siberian Railway to
      Vladivostok, and from there to Japan, the local Jew community will
      certainly help them, they will receive support from American Jewish
      societies - because the Jews never abandon their own.
    </p>
  </Card>
</div>

<style global lang="postcss">
  .ch6_taip {
    max-width: 700px !important;
    height: 100%;
  }
  .persons {
    width: 350px;
    z-index: 9;
    bottom: 0;
  }
  .jan {
    width: 500px;
    height: auto;
    right: 5%;
    left: auto;
  }
  .visa {
    width: 120px;
    height: 90.29px;
    bottom: 3%;
    left: 20%;
  }
  .bg-ch6 .card {
    z-index: 9;
  }
  @screen sm {
    .jan {
      width: 100%;
      height: auto;
      right: 0;
      bottom: 27%;
      left: 5%;
    }
    .persons {
      width: 55%;
      z-index: 9;
      bottom: 15%;
      left: -7%;
    }
    .visa {
      width: 27%;
      height: auto;
      bottom: 20%;
      left: 20%;
    }
  }
</style>
