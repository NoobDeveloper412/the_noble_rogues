<script>
  export let trigger;
  import { Card } from "atoms";
  import { ChapterItem } from "molecules";
  import { Explanation } from "organisms";

  import houseSrc from "images/chapter3/house.png";
  import klaipedaSrc from "images/chapter3/klaipeda.jpg";
  import vilniusSrc from "images/chapter3/vilnius.jpg";
  import { handleTriggerClasses, imageReferences } from "utils";

  let houseClass;

  const getTriggerClasses = () => {
    houseClass = handleTriggerClasses(
      trigger,
      undefined,
      "animate-fadeOut",
      ""
    );
  };
</script>

<svelte:window on:scroll={getTriggerClasses} />
<ChapterItem class="z-20 mb-20 mt-72 smRange:mt-54">
  <div slot="story" class="pt-16 sm:t-0 animate-slideInBlurredBottom">
    <Card>
      <h2 class="c-h2 mb-8">Namai ant kalno</h2>
      <p>
        Štai Europa. Štai Baltijos
        <Explanation variant="green" class="w-120 md:w-80" href={imageReferences[3].jura} positionY="bottom">
          <div slot="content" class="">
            <img class="w-full h-64" alt="" src={klaipedaSrc} />
            <p class="p-6 text-sm">
              Klaipėda pasakojamuoju metu, nuo 1939 kovo 23 d. priklauso
              Vokietijai.
            </p>
          </div>
          <span slot="text"> jūra</span>
        </Explanation>
        . Štai krašteliu prie tos jūros prisisegusi Lietuvos valstybė. Štai Kauno
        miestas. Kaunas – laikinoji sostinė, kol
        <Explanation variant="green" class="w-120 md:w-80" href={imageReferences[3].vilnius} positionY="bottom" >
          <div slot="content" class="">
            <img class="w-full h-64" alt="" src={vilniusSrc} />
            <p class="p-6 text-sm">
              Vilnius 1939 m. rugpjūtį dar priklausė Lenkijai (Lenkija nuo
              rugsėjo 1 d. užpulta nacistinės Vokietijos, rugsėjo 17 d. Lenkijos
              rytus puola SSSR) rugsėjo 19 d. Vilnių ir jo apylinkes užėmė
              Raudonosios armijos daliniai. Pagal 1939 spalio 10 d. savitarpio
              pagalbos sutartį Vilniaus kraštas grąžintas Lietuvai, spalio 27-28
              d. į Vilnių iškilmingai įžengė Lietuvos kariuomenė.
            </p>
          </div>
          <span slot="text"> Vilnius</span>
        </Explanation> vis dar neaišku, kieno. Štai Vaižganto gatvė ir 30 numeriu
        pažymėtas baltas naujutėlaitis
        <Explanation variant="green" class="w-120 md:w-80"  positionY="bottom" >
          <p slot="content" class="p-6 text-sm">
            Namą savo šeimai statėsi tuometinis Lietuvos Švietimo ministras
            Juozas Tonkūnas (1894.03.30 – 1968.05.06) projektą namui parengė jo
            žmonos brolis Juozas Milvydas (1914.05.14 – 1941.06.25). Namas
            baigtas statyti 1939 spalio 3 d., o spalio 7 d. Juozas Tonkūnas
            pasirašė nuomos sutartį su neseniai į Lietuvą Japonijos konsulato
            atidaryti atvykusiu Čiune Sugihara.
          </p>
          <span slot="text"> namas</span>
        </Explanation>, aptvertas tvora. Štai varteliai, dviejų mūro bokštelių
        įrėminti. Štai ir aš, viso šio vaizdo savininkas, katinas Akio, tupiu
        ant vartelių ir šildausi besibaigiančio rudens saulėje.
      </p>
    </Card>
  </div>

</ChapterItem>
