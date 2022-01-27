<script>
  import { Card } from "atoms";
  import { GroupImage } from "organisms";
  import { familyImages } from "utils";
  import { elementInViewport } from "utils";

  export let activeTrigger, firstTrigger, secondTrigger;

  let triggerPoint,
    triggerClass = "";

  const handleTriggerClasses = (
    activeClass,
    firstTriggerClass,
    secondTriggerClass
  ) => {
    if (activeTrigger && !firstTrigger) {
      return activeClass;
    } else if (activeTrigger && firstTrigger && !secondTrigger) {
      return firstTriggerClass;
    } else if (activeTrigger && firstTrigger && secondTrigger) {
      return secondTriggerClass;
    } else if (!activeClass) {
      return "";
    }
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);

    triggerClass = handleTriggerClasses(
      "animate-slideInBottom z-2",
      "animate-shrinkDown z-2 no-caption",
      "transform origin-bottom scale-75 animate-fadeOut"
    );
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item relative flex sm:flex-col">
  <div
    class="image-container h-screen w-1/2 fixed top-0 right-1/20 overflow-hidden min-w-md sm:w-full sm:min-w-sm opacity-0 {triggerClass}"
  >
    <GroupImage images={familyImages} />
  </div>
  <Card class="card">
    <p bind:this={triggerPoint}>
      Šeima kaip šeima: apie Aroną, vyresnįjį brolį pirmiausia sakyčiau, kad jis
      įsimylėjęs Elizą, merginą iš knygyno, tik paskui pridurčiau, kad yra
      ješivos studentas, mat palei knygyno vitrinas jis trinasi daug uoliau, nei
      alkūnėm trindamas rašomąjį stalą.
    </p>
    <p class="mt-8">
      Mažėlis brolis Tolikas tėra ketverių, visada prisisegęs prie mamos sijono
      arba sėdi močiutės lovoje sijono prisiplojusiu broliuku, - visada šypsosi,
      o jei pamatei ją prikandus lūpą, žinok, kad artėja audra ir tam, kas
      papuls į audros debesį, gerai nesibaigs.
    </p>
    <p class="mt-8">
      Geriausiai mamos audras moka nuraminti tėtis, manau, tėčiai tam ir
      sugalvoti, kad mamos šypsotųsi.
    </p>
  </Card>
</div>
