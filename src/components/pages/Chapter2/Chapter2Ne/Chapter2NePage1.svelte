<script>
  import { Card } from "atoms";
  import { ChapterItem } from "molecules";
  import { Explanation } from "organisms";
  import building1Src from "images/Chapter2/building1.png";
  import wireSrc from "images/Chapter2/wire.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, triggerClass, wireClass;

  const getTriggerClasses = () => {
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-scaleDown ",
      "lg:scale-92 animate-fadeOut"
    );
    wireClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem textAligment="right" class="mb-20 z-20">
  <div slot="story" class="pt-16 sm:mt-120">
    <Card class="bg-primary mb-24 animate-slideInBlurredBottom">
      <p class="mb-6">
        Ir tėčio širdelė, piktai prikandusi lūpą, papurtė galvą:
      </p>
      <h2 class="c-h2 my-8 text-primary-300">Ne</h2>
      <p>
        Nes viskas čia nėra taip blogai, nes močiutė per silpna atlaikyti tokią
        ilgą kelionę per jūras, nes mažėlis Tolikas apsivemia kaskart
        automobiliu važiuojant už miesto, nes vyresniojo Arono niekaip neatplėši
        nuo mylimos Elizos,
        <span class="tracking-3"> NES, NES, NES!</span>
      </p>
    </Card>
    <Card class="bg-primary animate-slideInBlurredBottom">
      <p class="mb-6">
        1939 pagrindinė Lodzės miesto gatvė pervadinta į
        <Explanation variant="gray" class="w-120 md:w-80">
          <p slot="content" class="p-6 bg-primary">
            Hitlerio gatvę, Adolf-Hitler-Straße – tokiais pavadinimais buvo
            pakeista daug miestų pagrindinių gatvių, pvz., Klaipėdoje (tuomet
            vadintoje Mėmeliu) buvo tokia gatvė.
          </p>
          <span slot="text" class="border-b-4 border-grayscale">
            Hitlerstrasse</span
          >
        </Explanation>
        , o Lodzė - Litzmannstadt. Mes neturime teisės vaikščioti šia gatve. Mes
        nebeturime teisės į savo miestą. Tėtis prarado visas savo klientes. Policija
        atėmė brolio dviratį, mamos papuošalus ir kelvinatorių, tėčio namą. Šeimai
        įsakyta palikti namus ir kraustytis į
        <Explanation variant="gray" class="w-120 md:w-80">
          <div slot="content" class="p-6 bg-primary">
            <p class="pb-4">
              Getas – atskiras kvartalas. Iš pradžių šis žodis nereiškė nieko
              labai baisaus, tik tam tikrą teritoriją, kur gyvena vienos
              tautybės žmonės, ten turintys savo mokyklas, gydytojus,
              amatininkus ir pan.
            </p>
            <p class="pb-4">
              Antrojo pasaulinio karo metais naciai ėmė steigti getus kaip
              laikiną stotelę prieš vežant į koncentracijos stovyklas.
            </p>
            <p>
              Žmonės turėdavo palikti savo namus ir kraustytis į patį
              prasčiausią kvartalą, gyventi ankštai ir be jokių buvusių
              patogumų. Iš geto galėjai išeiti į dažniausiai priverstinius
              darbus, bet turėjai sugrįžti.
            </p>
          </div>
          <span
            slot="text"
            class="border-b-4 border-grayscale"
            bind:this={triggerPoint}
          >
            Getą
          </span>
        </Explanation>
        – ten gavome mažą kambarėlį.
      </p>
      <p>
        Iš pradžių turėjome susimokėti už geto teritoriją juosiančias tvoras ir
        spygliuotas vielas. Tave įgrūda į kalėjimą ir liepia susimokėti “už
        saugumą”!
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="max-w-screen-md first-image w-full flex justify-center items-center relative 2xl:m-auto"
  >
    <img
      class="first-image object-contain animate-slideInBlurredBottom mb-16 sm:w-full transform {triggerClass} "
      alt="building"
      src={building1Src}
    />
    <img
      class="absolute bottom-0 opacity-0 sm:w-full {wireClass}"
      alt="wire"
      src={wireSrc}
    />
  </div>
</ChapterItem>

<style global lang="postcss">
  @screen sm {
    .first-image {
      margin-top: -80%;
    }
  }
</style>
