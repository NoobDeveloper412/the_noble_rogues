<script>
  import { Card } from "atoms";
  import bgTaipSrc from "images/chapter11/bg.png";
  import cowTaipSrc from "images/chapter11/cow.png";
  import rivkaTaipSrc from "images/chapter11/rivka.png";
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
    class="bg_11tai_1 overflow-hidden fixed w-4/5 bottom-0 left-0 h-screen sm:w-full sm:left-0"
  >
    <img
      class="bgtaip object-contain absolute bottom-0 left-0 animate-slideInTop {slideFromTop}"
      alt="houseNe"
      src={bgTaipSrc}
    />
    <img
      class="cow object-contain absolute animate-slideInBlurredLeft {slideFromLeft}"
      alt="soldierNe"
      src={cowTaipSrc}
    />
    <img
      class="rivka object-contain absolute animate-slideInBottom {slideFromLeft}"
      alt="soldierNe"
      src={rivkaTaipSrc}
    />
  </div>
  <Card class="card float-right sm:float-none">
    <h2 class="c-h2 mb-8">Yes</h2>
    <p class="mb-6" bind:this={triggerPoint}>
      The brother’s wife agrees to hide the girls.
    </p>
    <p class="mb-6" bind:this={triggerPoint}>
      What does the maid’s brother do in the barn with the shovel? By morning he
      finishes digging a pit in the corner of the barn. It’s summer, the cows
      graze among the bushes, the pig was requisitioned and taken by the
      Germans, there is plenty of space in the barn. He lays the bottom of the
      pit with boards, brings a couple of bags stuffed with straw - that will be
      mattresses. They give the girls some warm milk, hide them in the pit, put
      an old door on top, and spread some hay.
    </p>
    <p class="mb-6" bind:this={triggerPoint}>
      At night, they lift the door and help the girls out to move their numb
      legs.
    </p>
    <p class="mb-6" bind:this={triggerPoint}>
      A little later, a priest from Pasvalys parish writes the new metrics and
      baptizes the baby. Now the girls are named Aldutė and Valerija, both have
      Lithuanian surnames. The maid cautiously tells the townsfolk that they are
      relatives from Šiauliai, orphans - if anyone wonders who are those
      children that suddenly appeared in a remote farmstead where old childless
      smallholders lived.
    </p>
  </Card>
</div>

<style global lang="postcss">
  .image-container_11ne {
    max-width: 860px;
  }
  .bg_11tai_1 {
    width: 100%;
    max-width: 830px;
  }
  img.cow {
    max-width: 250px;
    bottom: 8%;
    left: 1%;
  }
  .rivka {
    width: 180px;
    bottom: 10%;
    right: 20%;
  }
  .bg_11tai_2a {
    z-index: -9;
  }
  @screen sm {
    .bg_11tai_1 {
      width: 100%;
      max-width: 100%;
      bottom: 20%;
    }
    img.cow {
      max-width: 40%;
      bottom: 8%;
      left: 0%;
    }
    .rivka {
      width: 30%;
      bottom: 7%;
      right: 12%;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1350px) {
    .bg_11tai_1,
    .bg_11tai_2a {
      width: 100%;
      max-width: 51%;
      z-index: -9;
    }
    .father_dau {
      width: 35% !important;
    }
    img.cow {
      max-width: 34%;
      bottom: 8%;
      left: 1%;
    }
    .rivka {
      width: 20%;
      bottom: 8%;
      right: 20%;
    }
  }
</style>
