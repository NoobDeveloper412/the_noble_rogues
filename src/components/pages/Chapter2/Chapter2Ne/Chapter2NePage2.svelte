<script>
  import { Card } from "atoms";
  import { ChapterItem } from "molecules";
  import building2Src from "images/Chapter2/building2.png";
  import wireSrc from "images/Chapter2/wire.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, triggerClass, wireClass;

  const getTriggerClasses = () => {
    triggerClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    wireClass = handleTriggerClasses(
      activeTrigger,
      nextTrigger,
      "opacity-100",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger = elementInViewport(triggerPoint);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<ChapterItem textAligment="right" class="mb-20 z-10 sm:mt-120">
  <div slot="story" class="pt-16">
    <Card class="bg-primary">
      <p class="mb-6" bind:this={triggerPoint}>
        Geto teritorijoje maklinėjo daug mažų vaikų, išsigandusių našlaičių. Jų
        tėvai išeidavo dirbti į miestą, ir kurią dieną tiesiog nebegrįždavo.
        Vieną vakarą namo negrįžo ir brolis Aronas. Jis padėjo kraustytis savo
        merginos šeimai, užsibuvo mieste po komendanto valandos ir buvo
        nušautas. Kas dešimt dienų mama eidavo pasiimti duonos davinio. Duonos
        buvo taip mažai. Močiutė mirė Velykų išvakarėse. Nuo senatvės ir
        nuolatinio neprivalgymo, - savo davinį slapta atkišdavo mažajam Tolikui,
        kuris jos lovoje jau praleisdavo visą dieną.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="max-w-screen-md 2xl:m-auto w-full flex justify-center items-center relative opacity-0 {triggerClass}"
  >
    <img
      class="transform lg:scale-92 mb-16 sm:w-full"
      alt="building"
      src={building2Src}
    />
    <img
      class="absolute bottom-0 opacity-0 sm:w-full {wireClass}"
      alt="wire"
      src={wireSrc}
    />
  </div>
</ChapterItem>
