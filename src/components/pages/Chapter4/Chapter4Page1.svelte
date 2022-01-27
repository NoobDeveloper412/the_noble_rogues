<script>
  import { Card } from "atoms";
  import { Explanation } from "organisms";
  import akioSrc from "images/Chapter4/akio.png";
  import jukikoSrc from "images/Chapter4/jukiko.png";
  import rainSrc from "images/Chapter4/rain.png";
  import parisSrc from "images/Chapter4/paris.png";
  import librarySrc from "images/Chapter4/library.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, firstTrigger, secondTrigger, thirdTrigger;

  let triggerPoint,
    imageTrigger = "",
    rainTrigger = "",
    parisTrigger = "",
    libraryTrigger = "";

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      thirdTrigger,
      "",
      "animate-fadeOut"
    );
    rainTrigger = handleTriggerClasses(
      activeTrigger,
      firstTrigger,
      "",
      "animate-fadeOut"
    );
    libraryTrigger = handleTriggerClasses(
      firstTrigger,
      secondTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    parisTrigger = handleTriggerClasses(
      secondTrigger,
      thirdTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item flex sm:flex-col">
  <div
    class="image-container overflow-hidden fixed w-2/3 top-0 right-0 h-screen sm:w-full animate-slideInBlurredBottom {imageTrigger}"
  >
    <img
      src={rainSrc}
      alt=""
      class="absolute top-0 left-1/10 w-3/4 sm:left-0 sm:w-full animate-fadeIn {rainTrigger}"
    />
    <img
      src={librarySrc}
      alt=""
      class="absolute top-0 left-1/10 w-3/4 sm:left-0 sm:w-full opacity-0 {libraryTrigger}"
    />
    <img
      src={parisSrc}
      alt=""
      class="absolute top-0 left-1/10 w-3/4 sm:left-0 sm:w-full opacity-0 {parisTrigger}"
    />
    <img
      src={akioSrc}
      alt=""
      class="absolute bottom-1/10 left-1/10 sm:w-1/4 sm:left-0 sm:bottom-0"
    />
    <img
      src={jukikoSrc}
      alt=""
      class="absolute bottom-0 right-1/20 sm:w-3/4 sm:right-0"
    />
  </div>
  <Card class="card">
    <h2 class="c-h2 mb-8">Jukiko</h2>
    <p bind:this={triggerPoint}>
      Lauke lyja. Mes, katinai, nemėgstam lietaus: žvirbliai kažkur išsislapstę,
      visur balos, tad grįžus iš lauko tenka ilgai laižytis letenėles. Pauostau
      radiatorių, - juodas šilumos reguliatoriaus diskas su raidėmis “Šalta -
      Šilta” atsuktas šiltojon pusėn, tad užšoku ant palangės. Šalia Jukiko
      perrašinėja dokumentus. Kiekvieną
      <Explanation variant="pink" class="border-pink border-b-4">
        <div slot="content" class="w-full">
          <p class="p-6">„Konsulate nėra dokumentų dauginimo aparato“</p>
        </div>
        <span slot="text">perrašo</span>
      </Explanation> po tris kartus, tad girdžiu, kaip jos mintys nuklysta į praeitus
      gyvenimus, kai dar gyveno Japonijoje.
    </p>
  </Card>
</div>
