<script>
  import { Card } from "atoms";
  import couple2Src from "images/Chapter4/couple2.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger, nextTrigger;

  let triggerPoint, coupleTrigger;

  const getTriggerClasses = () => {
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
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={couple2Src}
      alt=""
      class="absolute h-4/5 bottom-0 left-0 right-0 mx-auto opacity-0 {coupleTrigger}"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <p>
      Lagaminus vėl susikrauname tik dar po metų – kraustomės į Helsinkį, kur
      mano vyras dirbs vertėju pasiuntinybėje. Kadangi Sovietai atsisakė išduoti
      vizą, laivu plaukėme į Sietlą, tada važiavome į Niujorką, nė neapžiūrėję
      miesto, iškart lipome į milžinišką kruizinį vokiečių laivą Bremen.
      Nemaniau, kad būna tokio didumo laivų. Laive buvo baseinai, kino teatrai,
      restoranai: pusryčiams, pietums ir vakarienėms reikėdavo persirengti vis
      kitais drabužiais. Gyva muzika: <span bind:this={triggerPoint}>dar</span> orkestrui
      nepradėjus groti, reikdavo šventiškais apdarais jau sėdėti prie stalo. Kai
      vėliau manęs kas paklausdavo: “koks įspūdis plaukti toookiu laivu?”, atsakydavau:
      „visą laiką persirenginėjau“.
    </p>
    <p class="mt-8">
      Po keturių dienų, praleistų tarp nuolat deimantų vėrinius ir šilko
      sukneles demonstruojančių turtuolių amerikiečių, pagaliau išlipom į krantą
      ir traukinys mus ramiai nulakdino į Helsinkį.
    </p>
  </Card>
</div>
