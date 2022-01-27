<script>
  import { Card } from "atoms";
  import dadSittingSrc from "images/Chapter2/dad-sitting.png";
  import radioSrc from "images/Chapter2/radio.png";
  import { handleTriggerClasses } from "utils";

  export let activeTrigger;

  let triggerClass = "";

  const setActiveTrigger = () => {
    triggerClass = handleTriggerClasses(
      activeTrigger,
      null,
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
    <img src={dadSittingSrc} alt="" class="absolute w-full bottom-0" />
    <img src={radioSrc} alt="" class="absolute left-0 bottom-0 w-2/5" />
  </div>
  <Card class="card dark last">
    <p class="text-primary-300">
      Tėtis, kas vakarą po darbo vis ilgiau prasėdintis prie radijo, pagaliau tą
      radiją išjungė ir papilkėjusiom lūpom mamai ištarė: „išvažiuokim,
      brangioji, kraustykimės Amerikon, ten turiu pažįstamų. Jie sako, kad
      padėtų išsinuomoti juvelyrikos saloną puikioje gatvėje, mūsų vaikai gabūs
      kalboms, greitai prisitaikytų, įrašyčiau juos į geriausias mokyklas,
      važiuokim, širdele, prašau.“
    </p>
  </Card>
</div>
