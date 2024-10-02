<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "atoms";
  import { ChapterItem } from "molecules";
  import { Explanation } from "organisms";
  import abAkioSrc from "images/about/ab-akio.png";
  import { handleTriggerClasses, imageReferences } from "utils";

  let abAkioTrigger, NewsMTrigger, NewsRTrigger, triggerClass;

  const getTriggerClasses = () => {
    abAkioTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      'animate-slideInTop',
      "animate-fadeOut",
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
      <h2 class="c-h2 mb-8">Apie projektą</h2>
      <p class="mb-8">
        “Kilnieji sukčiai” - interaktyvus pasakojimas apie japonų konsulo Čiunės Sugiharos ir Nyderlandų diplomato Jano Zwartendijko žygdarbius tarpukario Kaune gelbstint žydus.
       </p>  
      <p class="mb-8">
        Karas, Holokaustas, diplomatija - sudėtingos ir dažnai neįdomios temos jauniems žmonėms. Todėl kartu su rašytoja Agnė Žagrakalyte ir iliustratoriumi Kohyoh Ikeshita sukūrėme interaktyvų pasakojimą.
      </p>
      <p class="mb-8">
        Skaitytojai galės rinktis ir taip lemti veikėjų likimus: sėkmę ar pražūtį. Pasakojimo metu mus lydės katinas Akio. Tarp daugybės pasakojimo herojų ryškiausi, žinoma, du:
      </p> 
    </Card>
  </div>
  <div
  slot="illustration"
  class="img-area_about sm:left-0 right-0 left-0 top-1/10 w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="ab_akio maw-w-screen-xl object-contain mb-40 sm:mb-94 sm:-mx-1-5  animate-slideInTop {abAkioTrigger}"
      alt="ab_akio"
      src={abAkioSrc}
    />
  </div>

</ChapterItem>
<style global lang="postcss">
  .img-area_about{
    max-width: 1200px;
  }
  .ab_akio {
    width:100%;
    max-width: 350px;
    z-index: 9;
  }
  @screen sm {
    .img-area_about{
      max-width: 100%;
      display: block;
      margin: 0 auto;
    }
    .ab_akio {
      width: 50%;
      margin-left: -17%;
    }

  }


</style>