<script>
  import { Card } from "atoms";
  import { ChapterItem } from "molecules";
  import { ChapterMenu } from "organisms";
  import spySRC from "images/chapter1/spy.png";
  import desk from "images/chapter1/desk.png";
  import orange from "images/chapter1/orange.png";
  const links = [
    { href: "#", title: "Kaip atpažinti Šnipus?", isActive: true },
    { href: "#", title: "Iš pradžių nebuvo taip blogai" },
    { href: "#", title: "Namai ant kalno" },
    { href: "#", title: "Jukiko I" },
    { href: "#", title: "Lėja II" },
    { href: "#", title: "Janas Zwartendijkas" },
    { href: "#", title: "Labai triukšmingas rytas" },
    { href: "#", title: "Kaunui sudie" },
    { href: "#", title: "JKlastotės ir kopijos" },
    { href: "#", title: "Į kaimą" },
    { href: "#", title: "Kieno vaikai" },
    { href: "#", title: "O kaip viskas baigėsi?" },
  ];
</script>

<ChapterMenu {links} chapterHeader="Gyvenimo vizos" />

<ChapterItem class="mb-16">
  <div slot="story" class="pt-16 ">
    <Card>
      <h2 class="c-h2 mb-8">Kaip atpažinti šnipus?</h2>
      <p class="">
        Beveik kiekvienas paklaustas kaip, jų nuomone, atrodo šnipai (jei norite
        mandagiau – slaptieji agentai), paminės juodą lietpaltį, juodą ant akių
        užmaukšlintą skrybėlę, juodus akinius. Dar – kokį įmantrų daikčiuką:
        fotografuojančias sagas, filmavimo kameras batuose arba iš saldainio
        popierėlio greitai išvyniojamą dūminį sprogmenį.
      </p>
      <p class="mt-6">
        Tikroji tiesa yra ta, kad šnipai dažniausiai nė iš tolo nepanašūs į
        šnipus. Šnipai dažnai yra <span class="tracking-3"
          >LABAI MALONŪS ŽMONĖS</span
        >
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="w-full relative flex justify-center items-center"
  >
    <img class="2xl:w-4/6 object-contain " alt="" src={spySRC} />
    <img class="absolute left-1/4 top-1/4" alt="" src={orange} />
    <img class="absolute left-1/4 top-1/2" alt="" src={orange} />
    <img class="absolute left-1/2 top-1/4" alt="" src={orange} />
    <img class="absolute left-1/2 top-1/2" alt="" src={orange} />
  </div>
</ChapterItem>

<ChapterItem>
  <div slot="story">
    <Card>
      <p class="mb-6">
        Šiais laikais viskas daug paprasčiau: jei turi telefoną kišenėje, tai
        turi ir tavęs pasiklausymo įrenginį. Bet norėčiau jus nukelti į daug
        įdomesnius laikus, kai dar niekas nebuvo taip paprasta ir lengva.
      </p>
      <p class="mb-6">
        Besikurianti Lietuvos valstybė 1918 metais jau turėjo besiplečiantį savo
        slaptųjų tarnybų tinklą. Kadangi nauja valstybė dar nelabai tokiems
        reikalams turėjo pinigų, imtas organizuoti žvalgybinis būrys vien tik iš
        moterų: seserų zitiečių, tarnaičių. Vadinasi, jei turite namų
        tvarkytoją, turite būti kaip niekad atsargūs.
      </p>
      <p>
        Namų tvarkytoja valo jūsų stalčius, tvarko darbastalius, išneša šiukšles
        (ir – neabejokite – tose šiukšlėse gerai pasikuičia). Namų tvarkytojų
        jūs įprantate nepastebėti, žiūrite į jas kaip į beveik nejudantį dar
        vieną baldą, nebylų kilimėlį. Tuo labiau, kad ši kvaiša yra visiškai
        neisšilavinusi, dažnai nesuvokia kas jai sakoma, nekalba jokia užsienio
        kalba.
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="w-full relative flex justify-center items-center"
  >
    <img class="object-contain 2xl:w-4/6" src={spySRC} />
  </div>
</ChapterItem>

<ChapterItem>
  <div slot="story">
    <Card>
      <p>
        Ha. Na, nekalba. Gal ir nekalba. Nes nenori. Štai, pažiūrėkite į mane,
        šaunųjį istorijų pasakotoją: galėčiau būti geriausias iš šnipų: mano
        juodas kailis, baltos pirštinėlės, ilgi ūsai ir stačios ausys. Man
        patinka, kai mane glosto. Visi šnipai, kuriuos man teko sutikti, buvo be
        galo geri glostytojai, turbūt įtarė, kad turime kai ką bendro. Norėsiu –
        murksiu taip meiliai, kad užsihipnotizavę slaptieji agentai man
        išpliurps visas savo paslaptis. Norėsiu – kniauksiu it sirena, kai
        slaptosios tarnybos bandys prie stalviršio priklijuoti pasiklausymo
        blakę.
      </p>
    </Card>
    <Card>
      <p class="mb-6">
        Mes, katinai, kai nemiegame ir nemedžiojame, labiausiai mėgstame žaisti.
        Nagi, prašššaaau, pažaiskite su manim. Keliaukime į Lietuvą prieš pat
        Antrąjam Pasauliniam karui prasidedant, bus įdomu, - parodysiu jums
        Kauną, kur šnipų knibždėjo tiek, kad miestas vėliau buvo pramintas
        Šiaurės Kasablanka, parodysiu, kaip gyveno tuometiniai jūsų
        bendraamžiai, paseksiu jums dvylika istorijų, o jūs nuo šiol gaunate
        užduotį: ieškokite tose istorijose šnipų. Raskite ir atpažinkite. O
        tada, - o tada aš jums išduosiu visas paslaptis: kas šnipas, o kas tik
        paprasta namų tvarkytoja. Tik nepamirškite:
      </p>
      <p>
        Šnipai Dažniausiai Būna Labai Malonūs Žmonės. (Ir katinai, be abejo –
        katinai!
      </p>
    </Card>
  </div>
  <div
    slot="illustration"
    class="w-full relative flex justify-center items-center"
  >
    <img class="object-contain  mt-48 2xl:w-4/6 " src={desk} />
    <img class="absolute left-1/2 top-1/2" src={orange} />
  </div>
</ChapterItem>
