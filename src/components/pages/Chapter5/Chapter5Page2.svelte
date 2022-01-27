<script>
  import { Card } from "atoms";
  import { elementInViewport, handleTriggerClasses, familyImages } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint,
    triggerClass = "";

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBlurredBottom",
      "animate-slideOutTop"
    );
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item flex sm:flex-col">
  <div
    class="image-container fixed w-1/2 top-0 right-1/20 min-w-md overflow-hidden flex-auto h-screen sm:h-120 sm:bottom-0 sm:top-auto sm:w-full sm:min-w-sm opacity-0 {triggerClass}"
  >
    {#each familyImages as image}
      <img class={image.class} src={image.src} alt={image.alt} />
    {/each}
  </div>
  <div class="card-holder mb-0 sm:h-auto mt-20 sm:mt-10 sm:mb-0">
    <Card
      class="w-max h-max max-w-md bg-primary-300 relative sm:w-full sm:max-w-screen-sm sm:mb-80"
    >
      <p>
        Negali pirkti kruizo tik į vieną pusę, tokios taisyklės. Taisyklės,
        taisyklės, - nebėra jokio gyvenimo, vienos taisyklės. Mama verkia,
        stengiasi slapta, bet mes matom nuolat paraudusias jos akis. Tėtis
        kelias dienas sėdėjo užsidaręs dirbtuvėse: jis išlydė visus dar
        neatimtus mamos ir močiutės auksinius papuošalus. Išlydė auskarus,
        grandinėles ir nuliejo naujų dalykų: berniukų diržų sagtys, mano ir
        mamos batų sagtelės yra auksinės, tik nudažytos juodai. Juodai dienai.
      </p>
      <p class="mt-8" bind:this={triggerPoint}>
        Kiekvienas žydas, kertantis Reicho sieną, gali su savim turėti tik
        dešimt markių, vieną laikrodį ir vieną žiedą. Negali išsivežti jokių
        santaupų, jokių papuošalų. Nieko. Bet tai dar nebaisu, sako tėtis, -
        pinigai uždirbami. O kas baisu? - klausia mama ir vėl beveik iki kraujo
        prikanda lūpą. Gavau tik penkis bilietus, - atsako jis taip tyliai, kad
        beveik nesigirdi, o mama raudodama puola jį kumščiais.
      </p>
    </Card>
    <Card
      class="w-max h-max max-w-md bg-primary relative mt-20 sm:w-full sm:max-w-screen-sm"
    >
      <p class="text-primary-300">
        Mūsų gi šeši. Tėtis, mama, Aronas, Tolikas, aš ir močiutė.
      </p>
    </Card>
  </div>
</div>
