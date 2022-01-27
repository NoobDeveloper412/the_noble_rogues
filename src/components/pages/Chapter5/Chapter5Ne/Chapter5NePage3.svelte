<script>
  import { Card } from "atoms";
  import wallSrc from "images/Chapter5/wall3.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, wallTrigger;

  const getTriggerClasses = () => {
    wallTrigger = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "",
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
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={wallSrc}
      alt=""
      class="absolute bottom-0 sm:top-0 sm:my-auto {wallTrigger}"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <p bind:this={triggerPoint}>
      Aronas ne tik išblyškęs, jis visiškai pasikeitė – dabar jis nusiteikęs tik
      mokslams, dabar jis norėtų pasislėpti tarp raidžių, panirti į knygas ir
      raštų ritinius ir niekada nebeišnerti, o Telšių ješivoje mokslai vyksta
      dieną naktį be pertraukos, pamainomis studentai ten studijuoja Torą,
      Telšių ješiva yra tokia pat garsi kaip pasauliečių Oksfordas, važiuokim į
      Lietuvą, arba bent į Lenkijos Vilnių, Vilnius žydų miestas, savi savų
      neapleis.
    </p>
  </Card>
</div>
