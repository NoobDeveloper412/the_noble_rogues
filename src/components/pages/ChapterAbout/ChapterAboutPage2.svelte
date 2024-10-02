<script>

  export let activeTrigger, nextTrigger;
  import { Card } from "atoms";
  import { ChapterItem, HoverImage } from "molecules";
  import abJanSrc from "images/about/ab-jan.png";
  import abVisaSrc from "images/about/ab-visa.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  let triggerPoint, fromTopClass, fromBottomClass, containerClass, fenceClass;

  const getTriggerClasses = () => {
    fromTopClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInTop ",
      "animation-fadeOut"
    );
    fromBottomClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-slideInBottom",
      "animation-slideOutBottom"
    );
    
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />
<ChapterItem class="z-20 mb-20 sm:mt-152">
  <div slot="story" class="animate-slideInBlurredBottom">
    <Card>
      <h2>Chiune Sugihara</h2>
      <h5>1900–1986</h5>
      <p class="mb-6" bind:this={triggerPoint}>
        Diplomatas, dirbęs Japonijos vicekonsulu tarpukario Lietuvoje. Padėjo išgelbėti 6000 žydų, dalindamas tranzitines vizas, kurioms išrašyti neturėjo leidimo.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        Pasirinkdamas tai padaryti, Sugihara rizikavo savo karjera, savo šeimos gyvybėmis.
      </p>
      <p class="mb-6" bind:this={triggerPoint}>
        1985 m. Izraelis suteikė Sugiharai Pasaulio tautų teisuolio vardą.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="about-2 h-xl sm:h-l w-full flex justify-center items-center relative"
  >
    <img
      class="object-contain ab_jan absolute sm:w-9/10 sm:left-1/20 left-1/4 bottom-1/4 right-0 opacity-0 {fromBottomClass}"
      alt="PersonTv"
      src={abJanSrc}
    />
    <img
      class="object-contain ab_visa absolute sm:w-9/10 sm:left-1/20 left-1/4 bottom-1/10 right-0 opacity-0 {fromTopClass}"
      alt="PersonTv"
      src={abVisaSrc}
    />

  </div>
</ChapterItem>
