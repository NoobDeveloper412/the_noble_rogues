<script>
  import { Card } from "atoms";
  import { Explanation } from "organisms";
  import handsSrc from "images/Chapter4/hands.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint,
    triggerClass = "";

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item relative flex sm:flex-col">
  <div
    class="image-container overflow-hidden fixed w-2/3 top-0 right-0 h-screen sm:w-full opacity-0 {triggerClass}"
  >
    <img
      src={handsSrc}
      alt=""
      class="absolute bottom-0 right-0 left-0 mx-auto {triggerClass}"
    />
  </div>
  <Card class="card">
    <p>
      Japonija vis labiau izoliavosi nuo likusio pasaulio, bet saugioje šeimoje
      nesijautė jokio artėjančio karo ženklų. Tėtis mirė labai netikėtai. Po
      laidotuvių išsikrausčiau gyventi į Tokiją, kur draudimo agentu dirbo mano
      brolis. Kartą į namus jis parsivedė draugą, o tas, vos su manim
      pasisveikinęs, išsitraukė užrašinę ir parašęs kelis hieroglifus, atkišo
      man.
    </p>
    <p class="mt-8" bind:this={triggerPoint}>
      - Ar perskaitysite? - Gudriai nusišypsojo. - Senpo! - skamba kaip
      dailininko slapyvardis, arba, pala, gal – <Explanation
        variant="pink"
        class="border-pink border-b-4"
      >
        <div slot="content" class="w-full">
          <p class="p-6">
            Japonišką vardą, jei vardo savininkas garsiai pirmas neištaria,
            galima perskaityti keliais būdais, ypač kai pasitaiko retesni
            heroglifai.
          </p>
        </div>
        <span slot="text">Čiunė?</span>
      </Explanation><br />
      Jo veidas nušvito: <br />
      - Niekam dar nėra pavykę perskaityti mano vardo šitaip, Čiunė, - jūs tikra
      retenybė, panele Jukiko.
    </p>
  </Card>
</div>
