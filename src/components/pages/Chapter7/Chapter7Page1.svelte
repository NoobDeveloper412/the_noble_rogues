<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "atoms";
  import birdSrc from "images/chapter7/three-birds.png";
  import winddowSrc from "images/chapter7/window.png";
  import { ChapterItem } from "molecules";
  import { handleTriggerClasses } from "utils";

  let winddowTrigger, birdTrigger, NewsRTrigger, triggerClass;

  const getTriggerClasses = () => {
    winddowTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-fadeOut"
    );
    birdTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-pulseReverse"
    );
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-0 ",
      "animate-fadeOut"
    );
  };
</script>

<svelte:window on:scroll={getTriggerClasses} />
<ChapterItem class="z-20 mb-20 mt-72 smRange:mt-54">
  <div slot="story" class="pt-16 sm:t-0 animate-slideInBlurredBottom">
    <Card>
      <h2 class="title-7 c-h2 mb-8">A very Noisy morning</h2>
      <p class="mb-8">
        Go away, Akio, you foolish cat, the baby pram is full of your hair
        again, - the maid, that country pumpkin, scolds me. If the sisters of
        St. Zita didn’t help her, she would still be standing in the train
        station, her eyes wide in horror, nervously clutching the bag with
        woolen socks. And now she lives in a warm home, has her own room with a
        balcony, has a job - if you can call a job sweeping dust with a feather
        broom from the green table lamp, from the top of the piano, I watch the
        broom dancing in her hand like a jumpy sparrow.
      </p>
      <p class="mb-8">
        The sparrows of Kaunas are the most beautiful music! But the master
        thinks otherwise. He sits at the piano playing the same “Maiden’s
        Prayer” every day, I sometimes wonder if I should pray that Chiune would
        finally play something else. I barely stop myself from biting him in the
        toe and just rub against his calf in the striped trousers. Akio, - he
        tells me then, - Akio, you foolish cat.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="img-area_7 top-0 left-1/5 w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="window maw-w-screen-xl object-contain mb-40 sm:mb-32 sm:-mx-1-5 animate-slideInTop {winddowTrigger}"
      alt="window"
      src={winddowSrc}
    />
    <img
      class="bird absolute maw-w-screen-xl object-contain sm:mb-32 sm:-mx-1-5 animate-pulseReverse {birdTrigger}"
      alt="house"
      src={birdSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .img-area_7 {
    max-width: 800px;
  }
  .window {
    width: 590px;
    margin-top: 2%;
    z-index: 9;
    left: 0;
    margin-left: 0px;
  }
  .bird {
    width: 400px;
    height: auto;
    top: -12%;
    right: auto;
    left: 36%;
    z-index: 9;
  }

  @screen sm {
    .title-7 {
      font-size: 44px;
    }
    .img-area_7 {
      max-width: 100%;
      left: 0;
      position: fixed;
      top: 20%;
    }
    .window {
      width: 95%;
      margin-top: 0%;
    }
    .bird {
      width: 60%;
      height: auto;
      top: -12%;
      left: auto;
      z-index: 9;
      right: 7%;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1350px) {
    .img-area_7 {
      max-width: 50%;
    }
    .piano,
    .frame {
      max-width: 60%;
    }
    .house_area,
    ..last_hou_gate {
      width: 70%;
    }
  }
</style>
