<script>
  import { Explanation } from "organisms";
  import { Image } from "molecules";
  import passportSRC from "images/chapter1/passport.png";
  import YukikoSugiharaKauneSRC from "images/YukikoSugiharaKaune.png";

  //  DISCLAIMER Currently you can not use component for slot
  //  Below example of temporary solution - div wrapper to use for slot
  //  Can be removed after this task is merged - https://github.com/sveltejs/svelte/pull/4556
  //         <div slot="content">
  //             <Image src={passportSRC} />
  //         </div>
</script>

<div class="mx-8 mt-32">
  <div class="w-1/2">
    <Explanation variant="sand">
      <p slot="content" class="p-6 w-full">„Nash-Kelvinator“</p>
      <span slot="text"> Kelvinatorių</span>
    </Explanation> prijungus prie elektros, virtuvėje susikalbėti sunkiau, nes jo
    variklis burzgia it motociklo motoras, pati dėžė dreba ir švelniai siūbuoja į
    šonus, bet nuo šiol tėtis visada turės šalto alaus, mama iš džiaugsmo nusiperka
    pusę kilogramo sviesto, o mes, vaikai, gauname grietinėlės ledų. Kad gautum ledų,
    nebereikia eiti į miesto ledainę, tik pamanyk.
  </div>
  <br />
  <div class="w-1/2">
    Kodėl tiek daug kalbu apie šnipus? Nes jų daug, tų šnipų. Iki 1939 metų
    Lietuvos saugumo tarnybos sulaikė 302 šnipus Lenkijos naudai (42 iš jų buvo
    moterys), 87 (3 moterys)
    <Explanation variant="green" class="w-120 md:w-80">
      <div slot="content">
        <Image src={YukikoSugiharaKauneSRC} />
      </div>
      <span slot="text"> šnipinėjusius</span>
    </Explanation>
    Vokietijos naudai, o Sovietų Sąjungos agentų turėjo būti keturis kartus daugiau,
    nei jau paminėtus kartu sudėjus.
  </div>
  <br />
  <div class="w-1/2">
    Norėsiu – kniauksiu it sirena, kai
    <Explanation>
      <p slot="content" class="p-6 w-full">
        Kodėl tiek daug kalbu apie šnipus? Nes jų daug, tų šnipų. Iki 1939 metų
        Lietuvos saugumo tarnybos sulaikė 302 šnipus Lenkijos naudai (42 iš jų
        buvo moterys), 87 (3 moterys) šnipinėjusius Vokietijos naudai, o Sovietų
        Sąjungos agentų turėjo būti keturis kartus daugiau, nei jau paminėtus
        kartu sudėjus.
      </p>
      <span slot="text"> slaptosios tarnybos</span>
    </Explanation>
    bandys prie stalviršio priklijuoti pasiklausymo blakę.
  </div>
  <br />
  <div class="w-1/2">
    Šeimai įsakyta palikti namus ir kraustytis į
    <Explanation variant="sand">
      <div slot="content">
        <Image src={passportSRC} />
      </div>
      <span slot="text"> Getą</span>
    </Explanation>
    – ten gavome mažą kambarėlį. Iš pradžių turėjome susimokėti už geto teritoriją
    juosiančias tvoras ir spygliuotas vielas.
  </div>
</div>
