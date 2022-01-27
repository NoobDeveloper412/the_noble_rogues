<script>
  import { Card } from "atoms";
  import { Explanation } from "organisms";
  import { elementInViewport } from "utils";

  export let activeTrigger1, activeTrigger2;

  let triggerPoint1, triggerPoint2;

  const setActiveTrigger = () => {
    activeTrigger1 = elementInViewport(triggerPoint1);
    activeTrigger2 = elementInViewport(triggerPoint2);
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item flex sm:flex-col">
  <Card class="card">
    Kai buvau maža mergaitė, - sako ji, - svajojau, kad užaugusi būsiu rašytoja.
    Kai turi tėtį - Kagavos licėjaus direktorių, <span bind:this={triggerPoint1}
      >tai</span
    >
    namuose turi didžiulę biblioteką, tad ryte rijau visas knygas iš eilės. Pamenu
    labai sunkius licėjaus egzaminus, kai nuo jų ilsindama galvą atsipalaiduodavau
    rašydama eilėraščius. Mane spausdino žurnalai Reijokai: „Panelių pasaulis“, ir
    Shôjokurabu: „Merginų klubas“, buvau labai laiminga. Mokiausi rašyti <Explanation
      variant="pink"
      class="border-pink border-b-4"
    >
      <div slot="content" class="w-full">
        <p class="p-6">Tanka - trisdešimt vieno skiemens eilėraštis.</p>
      </div>
      <span slot="text">tankas</span>
    </Explanation>, norėjau tapti garsia poete. Arba dailininke! Arba išvažiuoti
    į Paryžių ir ten atidaryti savo grožio saloną. Tiek drąsių svajonių turėjau,
    - turbūt paveldėjau tai iš mamos: kai tik Japonijoje atsirado rankiniai
    laikrodukai, ji iš visų moterų <span bind:this={triggerPoint2}>pirma</span>
    tokį sau nusipirko, kai į madą atėjo aukštakulniai bateliai – ji nusispyrė šlepetes
    ir kaukšėjo jais net namuose.
  </Card>
</div>
