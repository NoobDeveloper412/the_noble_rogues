<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "atoms";
  import bgSrc from "images/chapter11/bg-2.png";
  import rivkaSrc from "images/chapter11/rivka-2.png";
  import { ChapterItem } from "molecules";
  import { handleTriggerClasses } from "utils";

  let SlideFromTop, triggerClass, SlideFromTopSec;

  const getTriggerClasses = () => {
    SlideFromTop = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop",
      "animate-fadeOut"
    );
    SlideFromTopSec = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      ""
    );
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-0 ",
      ""
    );
  };
</script>

<svelte:window on:scroll={getTriggerClasses} />
<ChapterItem class="z-20 mb-20 mt-72 smRange:mt-54">
  <div slot="story" class="pt-16 sm:t-0 animate-slideInBlurredBottom">
    <Card>
      <h2 class="c-h2 mb-8">Whose children</h2>
      <p class="mb-8">
        Stop crying and listen to me, says the uncle. Stop crying, you scare the
        baby. Listen, I’ll finish telling the story, there’s little more left.
      </p>
      <p class="mb-8">
        When I finally got out of the house on the third day after the massacre
        and released the dog from the chain, it rushed to the barn and started
        whining and scratching the door. I armed myself with a bread knife and
        opened the heavy lock. The dog rushed in, I followed. In the barn, under
        a heap of last year’s straw, four eyes shone in the dark. Two little
        human beings. A tiny girl, completely naked, dirty with clotted blood
        and earth, and another one, a bit older, hugging her.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="img-area_11 right-1/10 bottom-0 w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="bg maw-w-screen-xl absolute object-contain bottom-0 right-0 sm:mb-32 sm:-mx-1-5 animate-fadeIn {SlideFromTop}"
      alt="bg"
      src={bgSrc}
    />
    <img
      class="rivka_2 absolute bottom-0 maw-w-screen-xl object-contain sm:mb-32 sm:-mx-1-5 animate-fadeIn {SlideFromTopSec}"
      alt="rivka"
      src={rivkaSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  .img-area_11 {
    max-width: 100%;
  }
  .rivka_2 {
    width: 175px;
    right: 2%;
    animation-delay: 0.5s;
  }
  @screen sm {
    .rivka_2 {
      width: 25%;
      right: 10%;
      margin-bottom: 27%;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1350px) {
    .img-area_11 {
      max-width: 90%;
      float: right;
    }
    .rivka_2 {
      width: 23%;
      right: 2.3%;
    }
  }
</style>
