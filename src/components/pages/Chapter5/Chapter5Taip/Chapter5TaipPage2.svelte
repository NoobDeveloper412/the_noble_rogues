<script>
  import { Card } from "atoms";
  import { elementInViewport } from "utils";

  export let activeTrigger1, activeTrigger2;

  let triggerPoint1, triggerPoint2;

  const setActiveTrigger = () => {
    activeTrigger1 = elementInViewport(triggerPoint1);
    activeTrigger2 = elementInViewport(triggerPoint2);
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <Card class="card last dark float-right sm:float-none bg-primary">
    <p bind:this={triggerPoint1}>
      Tikriausiai močiutės maldos saugojo mūsų šeimą, nes ne tik atvykom į
      Genujos uostą, bet ir jūra atrodė visai nebaisi. Baisi buvo tik mamos
      tyla. Mama visą kelionę neištarė nė žodžio.
    </p>
    <p class="mt-8">
      Tylėjo traukinyje, tylėjo Aronui džiūgaujant „žiūrėkit, Afrika, Sueco
      kanalas“, tylėjo laive iki pat Kobės, ten iš laivo išlipo gal trečdalis
      keleivių, tėtis aiškino, kad japonų Kobės žydų bendruomenėje saugu, tik
      Kobė ne mums, mūsų laukia bevizis Šanchajus.
    </p>
    <p class="mt-8">
      Prisiklausiusi Arono kalbų maniau, kad Šanchajus yra Kinija, tad ten bus
      drakonų, geltonų žmonių, vyrų ilgomis kasomis, o namų stogai bus raudoni
      ir lenkti it kregždės sparnai, bet miestas atrodė toks pat, kaip kiti
      miestai. Jokių ilgaplaukių vyrų ir, aišku, jokių <span
        bind:this={triggerPoint2}>drakonų</span
      >. Tik išlipus iš laivo, buvom perspėti negerti nevirinto vandens, net
      dantis valytis tik virintu vandeniu, nusilenkti pamačius bet kokį japonų
      kareivį, nevalgyti vaisių ir daržovių jei jie nevirti, apžiūrėjo plaukus
      ar nėra utėlių, net dantis patikrino, visi gavom po skaudų skiepą ir tik
      tada stojom į eilę prie autobusų, vešiančių į tą naują gyvenimą be
      močiutės. Mama tebetylėjo.
    </p>
    <p class="mt-8 bg-primary-300 w-3 h-3 border-none rounded-lg" />
  </Card>
</div>
