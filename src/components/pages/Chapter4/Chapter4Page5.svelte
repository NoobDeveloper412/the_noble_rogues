<script>
  import { Card } from "atoms";
  import { Explanation } from "organisms";
  import hands2Src from "images/Chapter4/hands2.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint,
    triggerClass = "";

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item relative flex sm:flex-col">
  <div
    class="image-container overflow-hidden fixed w-2/3 top-0 right-0 h-screen sm:w-full opacity-0 {triggerClass}"
  >
    <img
      src={hands2Src}
      alt=""
      class="absolute bottom-0 left-0 right-0 mx-auto {triggerClass}"
    />
  </div>
  <Card class="card dark last">
    <p bind:this={triggerPoint}>
      Su manimi jis kalbėdavosi taip aiškiai, ramiai ir atidžiai žvelgdamas man
      į akis, kaip dar joks vyras nebuvo su manim elgęsis. Buvom pažįstami jau
      kelis mėnesius, kai vieną dieną Čiunė, toks rimtas, kokio dar nebuvau
      mačiusi, paklausė:
    </p>
    <p class="mt-8">
      - Ar tekėsite už manęs? - Kodėl norite mane vesti? - Nes jus galėčiau be
      gėdos vežtis į <Explanation
        variant="pink"
        class="border-pink border-b-4"
        cardClass="left-auto sm:left-0"
      >
        <div slot="content" class="w-full">
          <p class="p-6">
            Pirmoji žmona buvo rusė, jis – japonas. Tais laikais santuokos tarp
            skirtingų rasių buvo ne tik labai retos, bet ir labai nepriimtinos,
            ypač diplomatiniuose sluoksniuose. Gali būti, kad rusė žmona nebūtų
            galėjusi rodytis priėmimuose, o diplomatas be žmonos yra
            nepatikimas, įtartinas. Tokie laikai!
          </p>
        </div>
        <span slot="text">užsienį</span>
      </Explanation>.
    </p>
  </Card>
</div>
