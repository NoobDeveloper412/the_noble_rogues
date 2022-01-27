<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "atoms";
  import { ChapterItem, HoverImage } from "molecules";
  import catOnFenceSrc from "images/chapter3/catOnFence.png";
  import carSrc from "images/chapter3/car.png";
  import birdsEatingSrc from "images/chapter3/birdsEating.png";
  import birds2FlyingSrc from "images/chapter3/2birdsFlying.png";
  import birds3FlyingSrc from "images/chapter3/3birdsFlying.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  let triggerPoint, fromTopClass, fromBottomClass, containerClass, fenceClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop ",
      "animate-slideOutBlurredRight"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-slideOutBlurredRight"
    );
    fenceClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-slideOutBlurredRight"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-10 mb-20 sm:mt-152">
  <div slot="story" class="animate-slideInBlurredBottom">
    <Card>
      <p class="mb-6" bind:this={triggerPoint}>
        Tupiu prisimerkęs, galima būtų pagalvoti, kad snaudžiu, bet iš tikro
        stebiu žvirblius, džiugiai besipešančius prie arklio mėšlo krūvutės.
        Eismas šioje gatvėje nedidelis, krūvučių mažai, o blogiausia – į namą
        įsikraustę žmonės neturi arklio, turi du automobilius: juodą tik darbo
        dienoms skirtą Kadilaką su vairuotoju ir triukšmingą smirdantį geležies
        gabalą, Buick'ą su užrašu K125. Kaip tai „argi katinas moka skaityti?“.
        Katinas, jei jis tikras šni... jei jis tikras šnypščiantis padaras, moka
        viską, ko šiame katiniškame darbe gali prireikti.
      </p>
      <p class="mb-6">
        Kad gaučiau pakankamai informacijos, užtenka, kad mane paglostytų.
        Glosto mane visi: ir kartą per mėnesį ateinanti rusė skalbėja, ir maloni
        japonė katės akimis Jukiko, ir jos sesuo, vaikų auklė Setsuko, ir į
        katiną panašus vaikų tėvas Čiunė, nors tas labai užsiėmęs savo
        popieriais ir į kiemą eina nedažnai, tad kad pasitrinčiau į jo dryžuotom
        kostiuminėm kelnėm aptemptą blauzdą prašydamas dėmesio, tenka įtipenti į
        jo darbo kambarius pirmame aukšte.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="h-xl sm:h-l w-full flex justify-center items-center relative"
  >
    <HoverImage
      class="maw-w-screen-xl absolute bottom-0 sm:mb-16 z-100 animate-slideInBlurredBottom {fenceClass}"
      alt=""
      src={catOnFenceSrc}
    >
      <div class="bg-primary py-3 px-4 text-primary-300 font-black">
        <h4 class="c-h4 font-serif pb-2">Vilties vartai</h4>
        <p class="text-sm">
          Tuos vartus vėliau žydai ėmė vadinti "vilties vartais". Mūsų laikais
          tvoros nebėra, tačiau varteliai išlikę. Ant jų užrašas: "Vizos
          gyvenimui. Vilties vartai"
        </p>
      </div>
    </HoverImage>
    <img
      class="object-contain absolute bottom-0 right-0 opacity-0 {fromBottomClass}"
      alt="car"
      src={carSrc}
    />
    <img
      class="object-contain absolute bottom-0 right-1/3 sm:left-1/20 opacity-0 {fromBottomClass}"
      alt="birds"
      src={birdsEatingSrc}
    />
    <img
      class="object-contain absolute top-0 left-1/5 sm:left-1/20 opacity-0 {fromTopClass}"
      alt="birds"
      src={birds2FlyingSrc}
    />
    <img
      class="object-contain absolute top-0 right-1/20 opacity-0 {fromTopClass}"
      alt="birds"
      src={birds3FlyingSrc}
    />
  </div>
</ChapterItem>
