<script>
  export let activeTrigger, nextTrigger;
  import { PulsingDot } from "molecules";
  import { Container, Card } from "atoms";
  import { RoomsImagesCarousel } from "organisms";
  import houseInsideSrc from "images/chapter3/houseInside.png";

  import { elementInViewport, handleTriggerClasses, rooms } from "utils";

  let triggerPoint, triggerClass, containerClass, alignmentClass;

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "block animate-fadeInSlow z-10 ",
      ""
    );
    containerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "z-10",
      ""
    );
    alignmentClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "sm:z-10",
      ""
    );
  };

  let currentIndex = 0;
  let buildingClass = "";
  let carouselClass = "hidden";
  let pulsingDot = "";
  const openCarousel = () => {
    currentIndex = 0;
    carouselClass = "block animate-scaleInCenter";
    buildingClass = "hidden";
    pulsingDot = "hidden";
  };
  const closeCarousel = () => {
    carouselClass = "hidden";
    buildingClass = "sm:z-10 animate-fadeIn";
    pulsingDot = "block";
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div
  class="flex items-start relative justify-start ml-28 md:ml-0 sm:my-172 {containerClass}"
>
  <Container
    class="w-4/12 flex-col max-w-md min-w-sm 2xl:max-w-lg z-10 sm:w-full sm:max-w-screen-sm"
  >
    <Card class="mb-16 z-20">
      <p class="mb-6" bind:this={triggerPoint}>
        Pirmas aukštas pilnas prislopintų garsų: Sugiharos darbo kabinete taukši
        rašomoji mašinėlė, retkarčiais subirbia telefonas. Asistentų kambaryje
        tyliai ginčijasi du lenkai, nugirstu miestų pavadinimus
        “Stokholmas...Suomijos japonų konsulatas...Britanijos konsulato lenkų
        sekcija” - žodžiu, nieko įdomaus katinui.
      </p>
      <p class="mb-6">
        Įdomesnis yra dešifravimo kambarys, ten landžioti uždrausta, bet
        nutaikau sekundę, kai į tą kambarį apsidairęs įslenka Gudzė, šmurkšteliu
        pro jo kojas ir palendu po ligi žemės nudrykusia užuolaida. Gudzė,
        katiniškai minkštai dėliodamas kojas, artinasi prie stalo. Stalas
        švelniai ūžia, visur raizgosi laidai.
      </p>
      <p>
        Vakarais iš šio kambario girdėti pypčiojimas, tad įtariau paukščius, bet
        jokių paukščių čia nėra: tik radijo aparatai, telegrafo rankenėlės,
        ausinės, daiktas, panašus į rašomąją mašinėlę, tik prikaišiotas laidų,
        kištukų ir smirdintis kaistančiomis elektros lemputėmis.
      </p>
    </Card>
  </Container>
  <div
    class="w-8/12 fixed xl:left-1/3 left-2/5 sm:w-full xsRange:w-4/5 sm:left-auto bottom-0"
  >
    <div
      class="maw-w-screen-xl w-full h-screen flex justify-center items-end opacity-0 {triggerClass} {alignmentClass}"
    >
      <img
        class="house object-contain maw-w-screen-xl mb-40 sm:mb-32 sm:-mx-1-5 {buildingClass}"
        on:click={openCarousel}
        alt="house"
        src={houseInsideSrc}
      />
      <PulsingDot on:click={openCarousel}
        class="absolute bottom-1/3 left-1/2 {pulsingDot} {alignmentClass}"
      />
      <RoomsImagesCarousel
        content={rooms}
        bind:currentIndex
        class={carouselClass}
        close={closeCarousel}
      />
    </div>
  </div>
</div>

<div class="flex items-start relative justify-start ml-28 md:ml-0 sm:mt-172">
  <Container
    class="w-4/12 flex-col max-w-md min-w-sm 2xl:max-w-lg z-10 sm:w-full sm:max-w-screen-sm"
  >
    <Card class="bg-primary">
      <p class="mb-6 text-primary-300">
        Japonas Čiunė Sugihara lietuvių spaudai sakė, kad atvyko čia stiprinti
        Lietuvos-Japonijos kultūrinių ryšių, be to, atstovauja “Osram” elektros
        lempučių firmai, tačiau nematau čia nei parduodamų lempučių dėžių, nei
        jokių ryšių: tik besiraizgančius laidus. Gudzė skubiai knisasi tarp
        apvalių raidėmis išmargintų kortelių, kažką nuo jų nusirašo ir slepia
        švarko kišenėje, o aš po dulkėta užuolaida nesulaikau čiaudulio. “PČI!”
      </p>
      <p class="text-primary-300">Išgąsdintas Gudzė strykteli ore ir atsisuka.</p>
    </Card>
  </Container>
</div>
