<script>
  import { Card } from "atoms";
  import { HoverImage } from "molecules";
  import jewelyShopSrc from "images/Chapter2/jewelry-shop.png";
  import lejaSrc from "images/Chapter2/leja.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint,
    backgroundTrigger = "",
    imageTrigger = "";

  const getTriggerClasses = () => {
    backgroundTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item flex sm:flex-col">
  <div
    class="image-container overflow-hidden fixed w-2/3 top-0 right-0 h-screen sm:w-full"
  >
    <img
      src={jewelyShopSrc}
      alt=""
      class="absolute top-0 right-1/20 sm:top-1/4 sm:right-0 {backgroundTrigger ||
        'animate-fadeInSlow'}"
    />
    <HoverImage
      class="absolute bottom-0 right-1/10 mx-auto w-62 sm:w-44 sm:right-1/5 {imageTrigger ||
        'animate-slideInBlurredBottom z-2 sm:z-0'}"
      src={lejaSrc}
      alt=""
    >
      <p class="box-shadow-sandsm bg-primary p-4 font-serif text-xl w-max">
        Leja
      </p>
    </HoverImage>
  </div>
  <Card class="card">
    <h2 class="c-h2 mb-8">Iš pradžių nebuvo taip blogai</h2>
    <p bind:this={triggerPoint}>
      Labas, aš Lėja. Gimiau Frankfurte prie Maino, taigi moku vokiškai, ne tik
      prancūziškai (to moko lenkiškoje gimnazijoje), nes gimus Tolikui, mažajam
      broliukui, mūsų šeima persikraustė į Lodzę. Mano tėtis, juvelyras, turi
      nedidelę papuošalų parduotuvę.
    </p>
  </Card>
</div>
