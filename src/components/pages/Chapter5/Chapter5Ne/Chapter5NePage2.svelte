<script>
  import { Card } from "atoms";
  import wallSrc from "images/Chapter5/wall2.png";
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
      Mums tereikia pasukti į kitą pusę, mums reikia į Lietuvą, visi dabar
      vyksta į Lietuvą, ir bėgantys nuo nacių ir bėgantys nuo sovietų. Rytų
      Lenkiją užėmę sovietai uždarinėja visas ješivas, tad studentai perkeliami
      Lietuvon, vadinasi, ten visi gali gauti prieglobstį. Aronas jau seniai
      nekalba apie savo Elizą. Elizos tėvas Aroną grūste išgrūdo pro duris: „kad
      tavo žydiško snukio čia nebematyčiau, tu man dukters negadinsi, tu mano
      šeimos nepražudysi, šūdinas žydo gabale“. Eliza ne žydė, tad jie niekada
      nebegalės būti kartu.
    </p>
  </Card>
</div>
