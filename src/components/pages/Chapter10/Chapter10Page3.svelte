<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "atoms";
import cityExCySrc from "images/chapter10/cityexcycle.png";
import maidSrc from "images/chapter10/maid.png";
import { ChapterItem } from "molecules";
import { elementInViewport,handleTriggerClasses } from "utils";









  let triggerPoint, fromTopClass, fromBottomClass, fromLeftClass, fromRightClass, triggerClass;

const getTriggerClasses = () => {
  fromTopClass = handleTriggerClasses(
    activeTrigger,
    nextTrigger,
    "animate-slideInTop",
    "animate-slideOutTop"
  );
  fromBottomClass = handleTriggerClasses(
    activeTrigger,
    nextTrigger,
    "animate-slideInBottom",
    "opacity-0"
  );
  triggerClass = handleTriggerClasses(
    activeTrigger,
    nextTrigger,
    "animate-slideInTop",
    "opacity-1"
  );
  
};

const setActiveTrigger = () => {
  activeTrigger = elementInViewport(triggerPoint);
  getTriggerClasses();
};
</script>


<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-20 mb-20 sm:mt-152">
  <div slot="story" class="animate-slideInBlurredBottom">
    <Card>
      <p class="mb-6" bind:this={triggerPoint}>
        Tačiau per gavėnios pasninką kone kasdien eidavom pirkti silkių – nes tik žydai pardavinėja silkes, lietuviai silkių patys pasigauti nemoka. Žingsniuodavom per miestelį pro odininko dirbtuvę, pro geležų krautuvę su blizgančiomis grandinėmis vitrinoje, pro kepurių siuvyklą, pro gaiviai kvepiančius agurkų pardavėjo namus, sveikindavomės su linksmai švilpaujančiu batsiuviu, - ši miestelio dalis savo kvapais ir garsais buvo panaši į Kauną.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        Bet visada reikdavo skubintis namo, atgal į vienkiemį, kur amžinai bambanti Brolienė aiškindavo, kaip mes, miesčioniai, ją apėdam. 
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        Tik po metų tas bambėjimas kiek aptilo, mat mes abu: tarnaitė ir aš, stengėmės iš paskutiniųjų. Ji melžė karves, lesino vištas, rinko kiaušinius, separuodavo pieną ir sukdavo sviestą, kurį nešdavom į miestelio turgų. Aš gaudydavau peles ir atnešęs į namus klodavau Brolienei prie kojų. 
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        Atvykome iš Kauno rudens pradžioje, peržiemoję ir nudirbę pavasario darbus, sulaukėme vasaros. Pasklido kalbos, kad mūsų Vaškų miestelyje valdžią paėmė baltaraiščiai. Kad visiems žydų tautybės žmonėms reikia virš kairės alkūnės ryšėti geltoną raištį, jei ne – bus areštuoti. Balti raiščiai, geltoni raiščiai – keisti tie žmonių žaidimai. Kitą vakarą brolis partempė radijo imtuvą, - sakė, žydams dabar draudžiama tokius turėti, tai batsiuvys padovanojęs mainais už vištą. Kai su tarnaite kaip visad išsiruošėme į turgų, miestelyje nebekvepėjo bandelėmis, visų krautuvėlių vitrinos buvo uždengtos užuolaidomis ir uždarytos langinėmis. 
       </p>
    </Card>
  </div>
  <div
  slot="illustration"
  class="rail_area right-3/20 h-xl sm:h-l w-full flex justify-center items-center relative {triggerClass}"
>
  <img
    class="object-contain rstation thrird absolute bottom-1/10 right-0 right-0 opacity-0 {fromTopClass}"
    alt="rail"
    src={cityExCySrc}
  />
  <img
    class="object-contain rmaid third absolute bottom-1/10 right-1/10 opacity-0 {fromBottomClass}"
    alt="maid"
    src={maidSrc}
  />

</div>
</ChapterItem>
<style global lang="postcss">
  .rmaid.third {
    width: 155px;
    bottom: 0;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }
</style>  