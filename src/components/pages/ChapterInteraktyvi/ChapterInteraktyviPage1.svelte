<script>
export let activeTrigger, nextTrigger;
import { Card } from "atoms";
import tableSrc from "images/interaktyvi/illustration1501.png";
import { ChapterItem } from "molecules";
import { handleTriggerClasses } from "utils";



  let tvTrigger, tableTrigger, triggerClass;

  const getTriggerClasses = () => {
    tableTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      'animate-slideInTop',
      "animate-fadeOut",
    );

    tvTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      'animate-slideInTop',
      "animate-fadeOut",
    );

  };
</script>

<svelte:window on:scroll={getTriggerClasses} />
<ChapterItem class="z-20 mb-20 mt-72 smRange:mt-54">
  <div slot="story" class="pt-16 sm:t-0 animate-slideInBlurredBottom">
    <Card>
      <h2 class="c-h2 mb-8">Interaktyvi pamoka</h2>
      <p class="mb-8">
        Interaktyvi pamoka „The Noble Rogue" skirta 8–11 klasių moksleiviams. Pamoka pristato japonų konsulo Čiunės Sugiharos ir Nyderlandų diplomato Jano Zwartendijko žygdarbius tarpukario Kaune gelbstint žydus. Moksleiviai susipažins su istorinėmis asmenybės, prisimins tarpukarį, dalyvaus simuliaciniame žaidime, kur patirs, ką reiškia priimti sprendimus, nulemiančius jų pačių ar artimųjų gyvenimus, įsitrauks į pokalbį ir pasidalins mintimis apie moralę ir dorovines vertybes. Šia pamoka siekiama praplėsti mokinių požiūrį į aplinką, istoriją ir dabartinę pasaulinę situaciją, skatinti kritinį mąstymą, patirčių įvairovę bei diskusiją tarp bendraamžių.
       </p>  
      <p class="mb-8">
        <a class="link_p" target="_blank" href="/files/Kilnieji-sukčiai_pamokos-prezentacija.pdf">Pamokos prezentacija</a>
        <a class="link_p" target="_blank" href="/files/Kilnieji-sukčiai-pamokos-metodika.pdf">Pamokos metodika</a>
      </p> 
    </Card>
  </div>
  <div
  slot="illustration"
  class="img-area_about sm:left-0 right-0 left-0 top-1/5 w-full flex justify-center items-center relative {triggerClass}"
  >
    <img
      class="table_new_p maw-w-screen-xl object-contain sm:mb-94 sm:-mx-1-5  animate-slideInBottom {tableTrigger}"
      alt="ab_akio"
      src={tableSrc}
    />
  </div>

</ChapterItem>
<style global lang="postcss">
  .img-area_about{
    max-width: 1200px;
  }

  .table_new_p {
    width:100%;
    max-width: 950px;
    z-index: 9;
    position: absolute;
    right:0;
    bottom: 0px;
  }

.tv_new_p {
    width: 100%;
    max-width: 350px;
    position: absolute;
    right: 6%;
    left: auto;
    bottom:50px;
}
a.link_p {
    width: 100%;
    display: block;
    text-decoration: underline;
}
  @screen sm {
    .img-area_about{
      max-width: 100%;
      display: block;
      margin: 0 auto;
    }
    .table_new_p {
      width: 100%;
      margin-left: 0;
      margin-top: 113px;
      bottom: -150px;
      left: 0;
    }
    .tv_new_p {
        width: 50%;
        margin-left: 0;
        z-index: 99;
        bottom: -70px;
        right: 10%;
    }

  }


</style>