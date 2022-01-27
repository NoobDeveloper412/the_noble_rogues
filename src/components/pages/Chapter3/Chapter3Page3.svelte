<script>
  export let activeTrigger, nextTrigger;
  import { Card } from "atoms";
  import { ChapterItem } from "molecules";
  import { Explanation } from "organisms";
  import houseSrc from "images/chapter3/house.png";
  import catBackSrc from "images/chapter3/catBack.png";
  import gudzeSrc from "images/chapter3/gudze.png";
  import gudzePhotoSrc from "images/chapter3/gudzePhoto.png";
  import boysSrc from "images/chapter3/boys.png";
  import { elementInViewport, handleTriggerClasses, imageReferences } from "utils";

  let triggerPoint, triggerClass, houseClass;

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-slideOutBlurredRight"
    );
    houseClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="mb-20 sm:mt-172">
  <div slot="story">
    <Card class="mb-16">
      <p bind:this={triggerPoint}>
        Kieme žaidžia du maži berniukai, vyresnis Hiroki meta kamuolį mažam
        Čijakiui, tas dar tik pradėjęs vaikščioti, todėl jo nepagautą kamuolį
        spirteli prie namo rūkęs sekretorius
        <Explanation variant="green" class="w-120 md:w-80" href={imageReferences[3].gudze}>
          <div slot="content" class="">
            <img class="w-full h-64" alt="" src={gudzePhotoSrc} />
            <p class="p-6">
              Volfgangas Gudzė, Čijūne Sugiharos sekretorius, pagalbininkas,
              vokiečių kilmės lietuvis. Taip pat ir vokiečių Gestapo agentas,
              bet tai žinoti šiuo metu gali tik katinas. nuoroda
            </p>
          </div>
          <span slot="text"> Gudzė</span>
        </Explanation>, jis, kitaip nei kiti konsulato lenkai darbuotojai, kalba
        ir lietuviškai, bet kai pasilenkia manęs glostyti, užuodžiu jo vokiškus
        marškinius, labai įtartinas kvapas.
      </p>
      <p class="mb-6">
        Kamuolys atsitrenkia į sodo tvorą, išgąsdina žvirblius ir sugadina mano
        medžioklę, tad nušoku žemyn. Kad jau taip, eime, parodysiu namus. Štai
        juoda anglinės arka: kaskart, kai ten lendu norėdamas patikrinti, ar
        nėra kokio lengvai pagaunamo šikšnosparnio, ar iš daržovių sandėliuko
        atklydusios pelės, gaunu barti nuo kambarius tvarkančios tarnaitės.
        „Škac iš čia, Aiko, kvailas katine, vėl pripėduosi kilimą“ - šnypščia ji
        semtuvėliu berdama anglis į kibirą ir trepteli koja taip, kad vėl šoku
        lauk. .
      </p>
      <p>
        Tiek pirmo aukšto, kuriame įsikūręs Japonijos konsulatas, tiek antrojo
        aukšto, kur gyvena konsulo šeima, durys veriasi į
        <Explanation variant="green" class="w-120 md:w-80">
          <p slot="content" class="p-6 text-sm">
            Įprastai pastatų durys veriasi į lauko pusę, tokie yra
            priešgaisriniai reikalavimai.
          </p>
          <span slot="text" class="border-b-4 border-green"> vidų</span>
        </Explanation>: tai tikriausiai specialiai dėl katinų, nes kai katinas
        laukia prie durų kad jį įleistum į namus, atidarydami duris į namo vidų,
        net ir netyčia neužgausite katino
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="w-full flex justify-center items-center relative"
  >
    <img
      class="house maw-w-screen-xl object-contain mb-40 sm:mb-32 sm:-mx-1-5 animate-slideInBlurredBottom {houseClass}"
      alt="house"
      src={houseSrc}
    />
    <img
      class="object-contain absolute bottom-0 right-1/20 sm:-right-1/20 opacity-0 {triggerClass}"
      alt="cat"
      src={catBackSrc}
    />
    <img
      class="object-contain absolute bottom-1/5 right-2/5 opacity-0 {triggerClass}"
      alt="gudze"
      src={gudzeSrc}
    />
    <img
      class="object-contain absolute bottom-0 right-1/2 sm:left-0 opacity-0 {triggerClass}"
      alt="boys"
      src={boysSrc}
    />
  </div>
</ChapterItem>
