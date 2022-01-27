<script>
  import { ChapterItem, ChapterLink } from "molecules";
  import { Card } from "atoms";
  import { fade } from "svelte/transition";
  import houseInsideSrc from "images/chapter3/houseInside.png";
  import { PulsingDot } from "molecules";
  import { RoomsImagesCarousel, CarouselCard } from "organisms";

  import { chapterLinks, rooms } from "utils";
  let currentIndex = 0;
  let buildingClass = "";
  let carouselClass = "hidden";
  let pulsingDot = "";
  let containerClass = "";
  const openCarousel = () => {
    currentIndex = 0;
    carouselClass = "block animate-scaleInCenter";
    buildingClass = "hidden";
    pulsingDot = "hidden";
    containerClass = "sm:mt-172";
  };
  const closeCarousel = () => {
    carouselClass = "hidden";
    buildingClass = "sm:z-10 animate-fadeIn";
    pulsingDot = "block";
    containerClass = "";
  };
</script>

<svelte:head>
  <title>Namai ant kalno</title>
</svelte:head>

<div class="absolute w-full bg-green" out:fade in:fade>
  <ChapterItem
    imageAligment="smTop"
    textAligment="right"
    class="mb-20 mt-20 sm:mt-120 {containerClass}"
  >
    <div slot="story" class=" animate-slideInBlurredBottom">
      <Card class="mb-20">
        <h2 class="c-h2 my-8">Ne</h2>
        <p class="mb-6">
          Siaubo apimtas Gudzės veidas iškart sušvelnėja. Jis pritupia ir
          tyliai, pats kaip katinas, sumurkia: “kac kac kac, mažuti, kaip tu čia
          įsigavai? Eikš ant rankų, kad neprispausčiau durimis tau uodegos
          išeidamas, - geeeeras, geeeeras kačiukas” - murma jis tyliai, dar
          tyliau išslenka iš dešifravimo kambario ir švelniai paleidžia netoli
          rūbų kabyklų: “nagi, bėk virtuvėn, gal gausi kąsnelį kumpio”.
        </p>
        <p>
          Kumpio! - bet visi žino, kad virtuvėje puodų dangčiais trankosi
          katinams kumpio tikrai nedalijanti tarnaitė, tad mankštindamasis
          lengvai padraskau katilinės duris su juoda S (slėptuvė) rodyklės
          strėle aukštai virš man nepasiekiamos rankenos ir lipu į viršų.
        </p>
      </Card>
      <Card class="mb-20">
        <p class="mb-6">
          Antrame aukšte, deja, man dabar nėra ko veikti: Jukiko savo kambaryje
          užsidariusi skaito knygą, Setsuko savo ir vaikų kambaryje bando
          migdyti mažuosius pietų miego, svetainė ir valgomasis, per pokylius
          paverčiamas viena didele patalpa - po pietų tušti.
        </p>
        <p class="mb-6">
          Žinau, kad jūs norėtumėte pasižiūrėti, kaip gyvena vieninteliai Kauno,
          jei ne visos Lietuvos, japonai, bet man dabar labiau rūpi palypėti iki
          pat namo viršaus, kur palėpėje įrengtuose kambariuose gyvena
          nuomininkai lietuviai: panelė Jadvyga ir jos brolis studentas.
          Supraskit: kartą tas studentas Kazys iš Nemuno parsinešė pagautos
          žuvies ir man pasiūlė galvų bei uodegų: tokią šventę labai sunku
          pamiršti, tad reikia bent kartą per dieną patikrinti, ar žuvies formos
          laimė man nenusišypsos dar kartą.
        </p>
        <p>
          Sekite man iš paskos! Pilko akmens laiptai, virtuvė, vonia. Skalbykla:
          čia šiandien tuščia, skalbėja ateis dar po kelių dienų, tad pintinėse
          jau sumesti skalbiniai, tačiau milžiniškas virinimo puodas dar
          nepripildytas vandens. Čia aitriai kvepia dar nesutarkuoti dideli
          muilo gabalai, mane nuo jų ima čiaudulys, greičiau, greičiau, dabar
          reikia kaip reikiant nagais padraskyti panelės Jadvygos kambario duris
          ir kuo garsiai sukniaukti, kad ji įsileistų.
        </p>
      </Card>
      <Card>
        <p>
          Švelniai kvepia grybais: tai senų knygų krūvos, jos manęs nedomina,
          pasitrinu į panelės Jadvygos sijoną, ji atsidūsta „katine tu katine,
          eikš“ - ir ant stalo tarkštelėjusi rankoj laikytą rožančių, užsikelia
          mane ant kelių. Glostomas murkiu jai pasakodamas apie žvirblius, apie
          vis silpniau šildančią saulę, apie ponią Jukiko, ant kurios kelių taip
          pat mėgdavau įsitaisyti, bet šiomis dienomis ten nebetelpu, apie
          žvitriau nei katė visur šmirinėjančią tarnaitę, kol apsvaigstu nuo
          šilumos ir užmiegu.
        </p>
        <ChapterLink href={chapterLinks.chapter4} class="mt-12 w-full">
          Kitas skyrius
        </ChapterLink>
      </Card>
    </div>
    <div
      slot="illustration"
      class="max-w-screen-md 2xl:m-auto w-full flex justify-start items-end relative animate-slideInBlurredBottom"
    >
      <img
        class="house-image object-contain maw-w-screen-xl mb-40 sm:mb-32 sm:-mx-1-5 {buildingClass}"
        on:click={openCarousel}
        alt="house"
        src={houseInsideSrc}
      />
      <PulsingDot class="absolute bottom-1/2 left-1/2 sm:z-10 {pulsingDot} " />
      <RoomsImagesCarousel
        variant="trivia"
        content={rooms}
        bind:currentIndex
        class={carouselClass}
        close={closeCarousel}
      />
    </div>
  </ChapterItem>
</div>

<style global lang="postcss">
  @screen sm {
    .house-image {
      width: 150%;
      max-width: 150%;
      margin: 0 -25%;
    }
  }
</style>
