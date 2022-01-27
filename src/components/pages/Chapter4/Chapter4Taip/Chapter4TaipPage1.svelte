<script>
  import { Card } from "atoms";
  import handsSrc from "images/Chapter4/hands-yes.png";
  import coupleSrc from "images/Chapter4/couple1.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, imageTrigger, handsTrigger, coupleTrigger;

  const getTriggerClasses = () => {
    imageTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
      "animate-fadeOut"
    );
    handsTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeOut",
      "animate-fadeOut"
    );
    coupleTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
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

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0 {imageTrigger}"
  >
    <img
      src={handsSrc}
      alt=""
      class="absolute top-0 bottom-0 my-auto sm:bottom-1/10 {handsTrigger}"
    />
    <img
      src={coupleSrc}
      alt=""
      class="absolute h-4/5 bottom-0 left-0 right-0 mx-auto opacity-0 {coupleTrigger}"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <p class="mb-6">
      Man dvidešimt vieneri. Jam trisdešimt penkeri. Jis švelnus, ramus,
      rūpestingas, su juo jaučiuosi saugi. Ir jis man žada pasaulį. Žada
      parodyti man visą pasaulį! Ir aš sakau:
    </p>
    <h2 class="c-h2 mb-8">Taip</h2>
    <p>
      Po metų, 1936 rugsėjį, mums gimė sūnus Hirokis. Čiunės nėra šalia, jis
      išvykęs Kamčiatkon aiškintis dėl Sovietų sąjungos ir Japonijos žvejybos
      teritorijų, bet grįžęs iškart paima kūdikį į glėbį. Mes laimingi, o po
      pusmečio ima vertis ir tas pažadėtas tolimas pasaulis: Čiunė gauna vertėjo
      darbą Maskvoje, kartu su mumis vyks ir mano sesuo Setsuko. <span
        bind:this={triggerPoint}>Mes</span
      > jau susiruošę lagaminus ir telieka užrakinti namų duris, kai ateina žinia,
      kad Sovietai neduoda Čiunei vizos. Čiunė kažką žino per daug apie sovietus,
      sovietai Čiunės nebenori.
    </p>
  </Card>
</div>
