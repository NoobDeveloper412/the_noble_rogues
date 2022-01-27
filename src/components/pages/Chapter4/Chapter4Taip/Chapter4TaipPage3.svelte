<script>
  import { Card } from "atoms";
  import { Explanation } from "organisms";
  import couple3Src from "images/Chapter4/couple3.png";
  import shipSrc from "images/Chapter4/ship.png";
  import { elementInViewport, handleTriggerClasses } from "utils";

  export let activeTrigger1, activeTrigger2;

  let triggerPoint1, triggerPoint2, coupleTrigger, shipTrigger;

  const getTriggerClasses = () => {
    coupleTrigger = handleTriggerClasses(
      activeTrigger1,
      activeTrigger2,
      "animate-fadeIn",
      "animate-fadeOut"
    );
    shipTrigger = handleTriggerClasses(
      activeTrigger1,
      activeTrigger2,
      "animate-fadeInSlow",
      "animate-fadeOut"
    );
  };

  const setActiveTrigger = () => {
    activeTrigger1 = elementInViewport(triggerPoint1);
    activeTrigger2 = elementInViewport(triggerPoint2);
    getTriggerClasses();
  };
</script>

<svelte:window on:scroll={setActiveTrigger} />

<div class="chapter-item container flow-root sm:flex">
  <div
    class="image-container overflow-hidden fixed w-1/2 bottom-0 left-1/20 h-screen sm:w-full sm:left-0"
  >
    <img
      src={shipSrc}
      alt=""
      class="absolute bottom-0 left-0 right-0 mx-auto opacity-0 {shipTrigger}"
    />
    <img
      src={couple3Src}
      alt=""
      class="absolute h-4/5 bottom-0 left-0 right-0 mx-auto opacity-0 {coupleTrigger}"
    />
  </div>
  <Card class="card float-right sm:float-none">
    <p>
      Ką veikiau Suomijoje? Lankiau prancūzų ir vokiečių kalbos pamokas. Taip
      pat mokiausi etiketo ir šokių. Be šitų įgūdžių nebūčiau galėjusi būti gera
      diplomato žmona, mat kasdien jei ne patys kviesdavomės svečius, tai
      <span bind:this={triggerPoint1}>būdavom</span> kviečiami: vis pietūs, vakarienės,
      popiečio arbatėlės. Prieš vakarienę diplomatai diskutuodavo, po vakarienės
      vykdavo šokiai. Su atsivežtais kimono iš visų išsiskirdavau, moterys be ceremonijų
      čiupinėdavo šilką, iš nuostabos aikčiodamos, tačiau šokių aikštelėje kimono
      buvo labai nepatogus, tad turėjau pirktis europietiškų suknelių, tam diplomatų
      žmonoms buvo skiriamos reprezentacinės lėšos. Parduotuvėse sulaukdavau gluminančių
      klausimų: „jūs kinė? Ak, japonė? Tai kodėl jūsų oda visai ne geltona?“. Vėl
      pradėjau rašyti.
    </p>
    <p class="mt-8">
      Suk ne lė je aš<br />
      vi o le ti nis šil kas<br />
      šį va kar ly džiu<br />
      sa vo vy rą į ba lių<br />
      Šve di jos am ba sa
      <Explanation variant="pink" class="border-pink border-b-4">
        <div slot="content" class="w-full">
          <p class="p-6">
            Tikras Jukiko eilėraštis. Tanką rašant svarbu penkios eilutės,
            kiekvienoje po 5-7-5-7-7 skiemenis
          </p>
        </div>
        <span slot="text">don</span>
      </Explanation>
    </p>
    <p class="mt-8">
      Po metų gimė mūsų antrasis <span bind:this={triggerPoint2}>sūnus</span>,
      Čijakis. Dar po metų mano vyras gavo įsakymą vykti į Lietuvą ir Kaune
      atidaryti Japonijos konsulatą. Vos spėjome išvažiuoti, kai gruodį ant
      Helsinkio pasipylė Sovietų bombos.
    </p>
  </Card>
</div>
